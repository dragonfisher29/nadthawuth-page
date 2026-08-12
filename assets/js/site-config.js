/* ============================================================
 * nadthawuth.dev — Central Site Configuration
 * ------------------------------------------------------------
 * ALL editable content (resume + business resources) now lives
 * in resume-constants.js. Edit that single file when updating:
 *   - Personal info, education, projects, experience, skills
 *   - Pricing packages, add-ons, domain notes, and all other text
 *
 * This file aggregates those constants and provides the shared
 * nav & footer renderers used by all pages.
 * ============================================================ */
var R = window.RESUME_CONSTANTS;

window.SITE_CONFIG = {

  siteName: R.siteName,
  handle: R.handle,
  tagline: R.tagline,
  location: R.location,

  lastUpdated: R.lastUpdated,

  email: R.email,

  /* Downloadable resume (drop your resume PDF at this path) */
  resumePdf: R.resumePdf,

  /* Social / external profile links */
  social: R.social,

  /* ----------------------------------------------------------
   * Terminal widget data (rendered in the hero of index.html)
   * ---------------------------------------------------------- */
  terminal: R.terminal,

  /* ----------------------------------------------------------
   * RESUME — pulled from resume-constants.js
   * ---------------------------------------------------------- */
  resume: R.resume,

  /* ----------------------------------------------------------
   * BUSINESS RESOURCES — all pulled from resume-constants.js
   * so you only edit one file
   * ---------------------------------------------------------- */
  packages: R.packages,
  addons: R.addons,
  domainNote: R.domainNote,

  /* ----------------------------------------------------------
   * DEMOS — listing page
   * ---------------------------------------------------------- */
  demos: R.demos
};

/* ============================================================
 * Shared UI — navigation bar, theme toggle & footer
 * ============================================================ */
(function () {

  function activePage() {
    var p = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (p === "business.html") return "business.html";
    if (p === "demos.html") return "demos.html";
    return "index.html";
  }

  function navLinkItem(href, label, active) {
    var base = "px-3 py-2 rounded-md text-sm font-semibold transition-colors ";
    var cls = active
      ? base + "text-[var(--accent-text)] bg-[var(--accent-soft)]"
      : base + "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-soft)]";
    return '<a href="' + href + '" class="' + cls + '">' + label + "</a>";
  }

  window.renderNav = function () {
    var el = document.getElementById("site-nav");
    if (!el) return;
    var cfg = window.SITE_CONFIG;
    var active = activePage();

    var linkItems =
      navLinkItem("index.html", "About Me", active === "index.html") +
      navLinkItem("business.html", "Services", active === "business.html") +
      navLinkItem("demos.html", "Demos", active === "demos.html");

    var mailto = 'mailto:' + cfg.email;
    var cta =
      '<a href="' + mailto + '" class="btn btn-primary btn-sm ml-2">Contact</a>';

    var themeToggle =
      '<button type="button" id="theme-toggle" class="theme-toggle" aria-label="Toggle color theme" title="Toggle color theme">' +
      '<svg class="theme-icon-sun w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>' +
      '<svg class="theme-icon-moon w-5 h-5 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>' +
      "</button>";

    var hamburger =
      '<button id="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" class="theme-toggle" aria-controls="mobile-menu">' +
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>' +
      "</button>";

    var mobileMenu =
      '<div id="mobile-menu" class="md:hidden hidden border-t border-[var(--border)] px-4 py-3 space-y-1">' +
      linkItems +
      '<a href="' + mailto + '" class="btn btn-primary w-full mt-2">Contact</a>' +
      "</div>";

    el.innerHTML =
      '<header class="nav-bar fixed top-0 inset-x-0 z-50 backdrop-blur-md">' +
      '<nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">' +
      '<a href="index.html" class="font-mono font-bold text-lg text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap">~/' +
      '<span class="text-[var(--accent)]">' + cfg.handle + "</span></a>" +
      '<div class="hidden md:flex items-center gap-1">' + linkItems + cta + themeToggle + "</div>" +
      '<div class="flex md:hidden items-center gap-2">' + themeToggle + hamburger + "</div>" +
      "</nav>" +
      mobileMenu +
      "</header>";

    /* Mobile menu toggle */
    var menuToggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-menu");
    if (menuToggle && menu) {
      menuToggle.addEventListener("click", function () {
        var open = menu.classList.toggle("hidden");
        menuToggle.setAttribute("aria-expanded", String(!open));
      });
    }

    /* Theme toggle (dark/light), persisted in localStorage */
    var root = document.documentElement;
    var stored = localStorage.getItem("theme");
    if (!stored) stored = "dark";
    root.setAttribute("data-theme", stored);

    var themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      var sun = themeBtn.querySelector(".theme-icon-sun");
      var moon = themeBtn.querySelector(".theme-icon-moon");
      function syncIcons() {
        var light = root.getAttribute("data-theme") === "light";
        if (sun) sun.classList.toggle("hidden", light);
        if (moon) moon.classList.toggle("hidden", !light);
      }
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        syncIcons();
      });
      syncIcons();
    }
  };

  function formatDate(iso) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var parts = iso.split("-");
    return parts[2] + " " + months[parseInt(parts[1], 10) - 1] + " " + parts[0];
  }

  window.renderFooter = function () {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var cfg = window.SITE_CONFIG;

    var footLink = "block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors";
    var footHead = "font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-text)] mb-3";

    el.innerHTML =
      '<footer class="border-t border-[var(--border)] bg-[var(--bg-tertiary)]">' +
      '<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">' +

      /* Brand */
      '<div class="space-y-3">' +
      '<a href="index.html" class="inline-block font-mono font-bold text-base text-[var(--text-primary)]">~/' +
      '<span class="text-[var(--accent)]">' + cfg.handle + "</span></a>" +
      '<p class="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs">' + cfg.tagline + "</p>" +
      '<p class="font-mono text-xs text-[var(--text-secondary)]">' + cfg.location + "</p>" +
      "</div>" +

      /* Navigation */
      '<div>' +
      '<p class="' + footHead + '">navigation</p>' +
      '<div class="space-y-2">' +
      '<a href="index.html" class="' + footLink + '">About Me</a>' +
      '<a href="business.html" class="' + footLink + '">Services</a>' +
      '<a href="demos.html" class="' + footLink + '">Demos</a>' +
      "</div></div>" +

      /* Connect */
      '<div>' +
      '<p class="' + footHead + '">connect</p>' +
      '<div class="space-y-2">' +
      '<a href="' + cfg.social.github + '" target="_blank" rel="noopener" class="' + footLink + '">GitHub ↗</a>' +
      '<a href="' + cfg.social.linkedin + '" target="_blank" rel="noopener" class="' + footLink + '">LinkedIn ↗</a>' +
      '<a href="mailto:' + cfg.email + '" class="' + footLink + ' truncate">' + cfg.email + "</a>" +
      "</div></div>" +

      /* Resume */
      '<div>' +
      '<p class="' + footHead + '">resume</p>' +
      '<div class="space-y-2">' +
      '<a href="' + cfg.resumePdf + '" download class="btn btn-outline btn-sm w-full">Download Resume PDF</a>' +
      "</div></div>" +

      "</div>" +
      '<div class="border-t border-[var(--border)]">' +
      '<div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-secondary)]">' +
      "<p>© 2026 " + cfg.siteName + "</p>" +
      (cfg.lastUpdated ? "<p>Last updated: " + formatDate(cfg.lastUpdated) + "</p>" : "") +
      "</div></div>" +
      "</footer>";
  };
})();
