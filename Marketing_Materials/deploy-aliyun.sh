#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${DOMAIN:-thedramaplay.com}"
BUCKET="${BUCKET:-thedramaplay-com}"
REGION="${REGION:-cn-hangzhou}"
ENDPOINT="oss-${REGION}.aliyuncs.com"
OSS_URL="oss://${BUCKET}"
CNAME_TARGET="${BUCKET}.${ENDPOINT}"

cd "$(dirname "$0")"

echo "Checking Alibaba Cloud CLI profile..."
aliyun configure list >/dev/null

echo "Checking OSS access..."
if ! aliyun oss ls >/dev/null; then
  echo "OSS is not available for this account yet. Open/activate OSS in Alibaba Cloud, then rerun this script."
  exit 1
fi

echo "Ensuring bucket ${BUCKET} exists in ${REGION}..."
if ! aliyun oss stat "${OSS_URL}" --region "${REGION}" >/dev/null 2>&1; then
  aliyun oss mb "${OSS_URL}" --region "${REGION}" --acl public-read
fi

echo "Configuring static website hosting..."
aliyun oss website --method put "${OSS_URL}" oss-website.xml --region "${REGION}"
aliyun oss set-acl "${OSS_URL}" public-read --region "${REGION}"

echo "Uploading site files..."
aliyun oss sync . "${OSS_URL}" \
  --region "${REGION}" \
  --delete \
  --force \
  --exclude ".DS_Store" \
  --exclude "deploy-aliyun.sh" \
  --exclude "oss-website.xml" \
  --exclude "homepage-preview.png"

echo "Adding DNS CNAME records if missing..."
ROOT_RECORD_COUNT="$(aliyun alidns DescribeDomainRecords --DomainName "${DOMAIN}" --RRKeyWord "@" --TypeKeyWord CNAME | python3 -c 'import json,sys; print(json.load(sys.stdin).get("TotalCount", 0))')"
WWW_RECORD_COUNT="$(aliyun alidns DescribeDomainRecords --DomainName "${DOMAIN}" --RRKeyWord "www" --TypeKeyWord CNAME | python3 -c 'import json,sys; print(json.load(sys.stdin).get("TotalCount", 0))')"

if [ "${ROOT_RECORD_COUNT}" = "0" ]; then
  aliyun alidns AddDomainRecord --DomainName "${DOMAIN}" --RR "@" --Type CNAME --Value "${CNAME_TARGET}" --TTL 600
fi

if [ "${WWW_RECORD_COUNT}" = "0" ]; then
  aliyun alidns AddDomainRecord --DomainName "${DOMAIN}" --RR "www" --Type CNAME --Value "${CNAME_TARGET}" --TTL 600
fi

echo "Binding custom domain to OSS bucket..."
aliyun oss bucket-cname --method put "${OSS_URL}" "${DOMAIN}" --region "${REGION}" || true
aliyun oss bucket-cname --method put "${OSS_URL}" "www.${DOMAIN}" --region "${REGION}" || true

echo "Done."
echo "OSS endpoint: http://${CNAME_TARGET}/index.html"
echo "Domain: http://${DOMAIN}/"
