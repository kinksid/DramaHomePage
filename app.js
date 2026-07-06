(function () {
  "use strict";

  var I18N = {
    zh: {
      nav_player: "玩家端",
      nav_editor: "创作端",
      nav_partners: "合作伙伴",
      cta_beta: "立即内测",
      cta_explore: "探索玩家端",
      cta_download_editor: "下载编辑器",
      hero_title: "发现可以玩的<br />互动短剧",
      hero_lede: "面向移动端互动影游与短剧团队：用 DramaEditor 搭建分支剧情，再交给玩家亲手推进故事。",
      store_ios_small: "Download on the",
      store_android_small: "GET IT ON",
      trusted_label: "超过 100+ 短剧与影游团队信赖",
      label_home: "首页",
      label_play: "播放",
      label_branch: "分支",
      label_chat: "角色互动",
      label_interact: "热点互动",
      label_discover: "发现",
      label_profile: "我的",
      testimonials_title: "行业专家怎么说",
      testimonial_1_tag: "好莱坞高管评语",
      testimonial_1_quote: "「Drama Play 让互动叙事终于有了电影级的质感——AI 懂节奏、懂情绪、懂角色。这不是游戏，这是你主演的剧。」",
      testimonial_1_author: "—— 某好莱坞影视公司数字内容副总裁",
      testimonial_2_tag: "游戏大厂工程师评语",
      testimonial_2_quote: "「Drama Editor 是我用过最顺手的互动叙事工具——架构干净、AI 辅助实用、性能扎实。编剧能上手，引擎扛得住，这才是创作该有的样子。」",
      testimonial_2_author: "—— 某 AAA 游戏工作室技术总监",
      player_title: "秒找互动剧情模式",
      player_desc: "首页、剧情分支、角色陪伴、发现与消息 — 完整玩家端体验，一手掌握。",
      tab_home: "首页",
      tab_story: "剧情",
      tab_chat: "角色互动",
      tab_discover: "发现",
      screen_home: "剧集首页",
      screen_play: "竖屏播放",
      screen_interact: "热点互动",
      screen_branch: "分支选择",
      screen_story1: "主线剧情",
      screen_story2: "隐藏分支",
      screen_chat: "角色陪伴",
      screen_companion: "心动陪伴",
      screen_profile: "我的",
      screen_discover: "发现推荐",
      screen_recommend: "热门短剧",
      screen_more: "更多精彩",
      editor_eyebrow: "创作端",
      editor_title: "探索完整创作旅程",
      editor_desc: "DramaEditor 无限故事画布：拖拽连接视频节点、互动分支与结局，一键生成可测试 App 数据。",
      editor_f1: "世界观、角色、地点结构化搭建",
      editor_f2: "视频节点与互动分支可视化配置",
      editor_f3: "AI 脚本拆分、镜头提示、批量出片",
      features_title: "从灵感到上线",
      feat_1_title: "竖屏互动播放",
      feat_1_desc: "完整微交互与分支动画，玩家在手机上自然推进剧情。",
      feat_2_title: "可视化分支编辑",
      feat_2_desc: "无限画布拖拽连接，团队直接生成可测试的 App 数据。",
      feat_3_title: "AI 批量出片",
      feat_3_desc: "脚本拆分、镜头提示、批量视频，保留完整制作链路。",
      feat_4_title: "实时预览",
      feat_4_desc: "手机端实时预览互动效果，所见即所得。",
      feat_5_title: "API 开放接入",
      feat_5_desc: "开放 API 接口，灵活接入第三方工具与工作流。",
      partners_heading: "超过 100+ 短剧与影游团队信赖",
      download_title: "永不错过下一幕精彩",
      download_desc: "免费体验互动短剧，或下载 DramaEditor 开始创作。",
      modal_title: "选择下载平台",
      modal_sub: "立即体验 Drama Play 互动短剧",
      modal_ios_small: "iOS",
      modal_android_small: "Android",
      modal_android: "Google Play",
      footer_tagline: "互动短剧创作平台",
      footer_contact: "联系我们",
      footer_email: "邮箱",
      footer_wechat: "商务微信",
      footer_company: "公司",
      footer_company_name: "Drama Play Studio",
      footer_share: "分享",
      share_weibo: "微博",
      share_wechat: "微信",
      share_xhs: "小红书",
      share_bili: "哔哩哔哩",
      footer_rights: "保留所有权利。"
    },
    en: {
      nav_player: "Player",
      nav_editor: "Creator",
      nav_partners: "Partners",
      cta_beta: "Join Beta",
      cta_explore: "Explore Player",
      cta_download_editor: "Download Editor",
      hero_title: "Discover playable<br />interactive drama",
      hero_lede: "For mobile interactive film-games and short drama teams: build branching stories with DramaEditor, then let players push the plot forward.",
      store_ios_small: "Download on the",
      store_android_small: "GET IT ON",
      trusted_label: "Trusted by 100+ drama and interactive teams",
      label_home: "Home",
      label_play: "Play",
      label_branch: "Branch",
      label_chat: "Characters",
      label_interact: "Interact",
      label_discover: "Discover",
      label_profile: "Profile",
      testimonials_title: "What industry experts are saying",
      testimonial_1_tag: "Hollywood Executive",
      testimonial_1_quote: "\"Drama Play finally gives interactive storytelling a cinematic quality — AI understands pacing, emotion, and character. This isn't a game, it's a drama you star in.\"",
      testimonial_1_author: "— VP of Digital Content, Major Hollywood Studio",
      testimonial_2_tag: "AAA Game Engineer",
      testimonial_2_quote: "\"Drama Editor is the smoothest interactive narrative tool I've used — clean architecture, practical AI assist, solid performance. Writers can onboard, engines can scale. This is what creation should feel like.\"",
      testimonial_2_author: "— Technical Director, AAA Game Studio",
      player_title: "Find interaction patterns in seconds",
      player_desc: "Home, branching story, character chat, discover and messages — the full player experience in your hand.",
      tab_home: "Home",
      tab_story: "Story",
      tab_chat: "Characters",
      tab_discover: "Discover",
      screen_home: "Series Home",
      screen_play: "Vertical Play",
      screen_interact: "Hotspot Choice",
      screen_branch: "Branch Select",
      screen_story1: "Main Plot",
      screen_story2: "Hidden Branch",
      screen_chat: "Character Chat",
      screen_companion: "Companionship",
      screen_profile: "Profile",
      screen_discover: "Discover",
      screen_recommend: "Trending",
      screen_more: "More Stories",
      editor_eyebrow: "Creator",
      editor_title: "Explore the full creation journey",
      editor_desc: "DramaEditor infinite story canvas: drag and connect video nodes, branches and endings — generate testable App data in one click.",
      editor_f1: "Structured worldview, character and location building",
      editor_f2: "Visual config of video nodes and branching",
      editor_f3: "AI script splitting, shot hints, batch rendering",
      features_title: "From inspiration to launch",
      feat_1_title: "Vertical Interactive Play",
      feat_1_desc: "Full micro-interactions and branch animations — players advance the story naturally on mobile.",
      feat_2_title: "Visual Branch Editing",
      feat_2_desc: "Drag and connect on an infinite canvas — generate testable App data directly.",
      feat_3_title: "AI Batch Production",
      feat_3_desc: "Script splitting, shot hints, batch video — keep the full production pipeline.",
      feat_4_title: "Live Preview",
      feat_4_desc: "Real-time interactive preview on mobile, WYSIWYG.",
      feat_5_title: "API Integration",
      feat_5_desc: "Open API for flexible third-party tool and workflow integration.",
      partners_heading: "Trusted by 100+ drama and interactive teams",
      download_title: "Never miss the next chapter",
      download_desc: "Try interactive drama for free, or download DramaEditor to start creating.",
      modal_title: "Choose your platform",
      modal_sub: "Experience Drama Play interactive drama now",
      modal_ios_small: "iOS",
      modal_android_small: "Android",
      modal_android: "Google Play",
      footer_tagline: "Interactive Drama Creation Platform",
      footer_contact: "Contact Us",
      footer_email: "Email",
      footer_wechat: "Business WeChat",
      footer_company: "Company",
      footer_company_name: "Drama Play Studio",
      footer_share: "Share",
      share_weibo: "Weibo",
      share_wechat: "WeChat",
      share_xhs: "Xiaohongshu",
      share_bili: "Bilibili",
      footer_rights: "All rights reserved."
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll(".zh-only").forEach(function (el) {
      el.style.display = lang === "zh" ? "" : "none";
    });
    document.querySelectorAll(".en-only").forEach(function (el) {
      el.style.display = lang === "en" ? "" : "none";
    });
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("drama_lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var savedLang = "zh";
  try { savedLang = localStorage.getItem("drama_lang") || "zh"; } catch (e) {}
  applyLang(savedLang);

  // Header scroll
  var header = document.getElementById("site-header");
  window.addEventListener("scroll", function () {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Pause marquee on hover
  document.querySelectorAll(".marquee-row, .brand-marquee-row").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      var track = el.querySelector(".marquee-track, .brand-marquee-track");
      if (track) track.style.animationPlayState = "paused";
    });
    el.addEventListener("mouseleave", function () {
      var track = el.querySelector(".marquee-track, .brand-marquee-track");
      if (track) track.style.animationPlayState = "running";
    });
  });

  // Tabs
  var tabs = document.querySelectorAll(".tab");
  var panels = document.querySelectorAll(".tab-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-panel") === id);
      });
    });
  });

  // Modal
  var modal = document.getElementById("download-modal");
  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".js-open-modal").forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });
  document.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
