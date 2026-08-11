/* ============================================================
 * nadthawuth.dev — Central Site Configuration
 * ------------------------------------------------------------
 * All site data (resume, catalog, services) and all external
 * links (WhatsApp, email, LinkedIn, demo websites) are managed
 * from this single file. Edit here, the pages update everywhere.
 *
 * Demo website URLs are STORED here for the future integration
 * phase. To embed them later, add a "Live Demos" section that
 * renders SITE_CONFIG.demoWebsites.
 * ============================================================ */
window.SITE_CONFIG = {

  siteName: "nadthawuth.dev",
  name: "Nadthawuth Ketnukkunn",
  shortName: "Nadthawuth",
  handle: "nadthawuth",
  title: "Software Engineering Student · Full-Stack · Algorithms · Cybersecurity",
  tagline: "Building scalable backend systems and intelligent web applications.",
  university: "University of Southampton",
  degree: "BSc Computer Science",
  location: "Southampton, United Kingdom",

  email: "nadthawuth@gmail.com",
  phone: "+447733529901",

  /* Downloadable resume (drop your resume PDF at this path) */
  resumePdf: "assets/resume.pdf",

  /* WhatsApp */
  whatsapp: {
    number: "447733529901",
    message: "Hi Nadthawuth! I saw your portfolio and would like to connect."
  },

  /* ----------------------------------------------------------
   * Demo website URLs — STORED FOR FUTURE IMPLEMENTATION.
   * These will be embedded into the pages during a subsequent
   * integration phase (do not display yet).
   * ---------------------------------------------------------- */
  demoWebsites: [
    {
      id: "service",
      label: "Service Business Demo",
      url: "https://demo1-service.nadthawuth.workers.dev",
      status: "ready" // planned status badge: "ready" | "coming-soon"
    },
    {
      id: "fnb",
      label: "F&B / Restaurant Demo",
      url: "https://demo1-fnb.nadthawuth.workers.dev",
      status: "ready"
    }
  ],

  /* Social / external profile links */
  social: {
    github: "https://github.com/dragonfisher29",
    linkedin: "https://www.linkedin.com/in/nadthawuthketnukkunn"
  },

  /* ----------------------------------------------------------
   * Terminal widget data (rendered in the hero of index.html)
   * ---------------------------------------------------------- */
  terminal: {
    status: "Open to Software Engineering / Cybersecurity Internships (Summer 2026)",
    location: "Southampton, UK",
    focus: "Full-stack · Algorithms · Cloud-native · Cybersecurity",
    languages: ["Java", "Python", "C", "Dart", "JavaScript", "Haskell"]
  },

  /* ----------------------------------------------------------
   * RESUME — real content (Nadthawuth Ketnukkunn)
   * ---------------------------------------------------------- */
  resume: {

    profile:
      "Second-year Computer Science student with a strong foundation in full-stack development, " +
      "adversarial search algorithms, and cloud-native architecture. Proficient in Java, Python, and C, " +
      "with a growing interest in cybersecurity. Proven ability to deliver complex group and individual " +
      "projects. Seeking a software engineering or cybersecurity internship for Summer 2026.",

    education: [
      {
        degree: "BSc. Computer Science",
        school: "University of Southampton, Southampton, UK",
        period: "Sept 2024 — Present",
        details: "Modules: Algorithmics, Computer Systems, Data Management, Mathematics, Networks and Security, Programming, Artificial Intelligence, Formal Specification and Verification, Programming Language Concepts, Software Design and Development, Theory of Computing."
      },
      {
        degree: "A-Levels",
        school: "Taylor's College, Subang Jaya, Malaysia",
        period: "Sept 2022 — June 2024",
        details: "Grades: A*AA (Computer Science, Mathematics, Chemistry)."
      },
      {
        degree: "Malaysian Certificate of Education (SPM)",
        school: "SMS Sultan Mohamad Jiwa, Kedah, Malaysia",
        period: "Jan 2017 — March 2022",
        details: "Grades: 6A+, 3A · Award: Petronas Education Sponsorship Programme (PESP) Scholar."
      }
    ],

    projects: [
      {
        title: "Pinecone Sexual Health Management",
        tech: ["Java", "Spring Boot 3", "JavaFX 21", "JUnit", "MockMvc", "Docker", "PostgreSQL", "Railway"],
        points: [
          "33+ integration tests across secure healthcare workflows with JUnit & MockMvc",
          "Containerized full stack with Docker; production deployment on Railway + PostgreSQL"
        ],
        links: { github: "", demo: "" } // TODO: add GitHub repo / live demo URLs
      },
      {
        title: "AI Chess Engine",
        tech: ["Python", "Alpha-Beta Minimax", "Iterative Deepening"],
        points: [
          "Alpha-Beta Minimax search with iterative deepening for dynamic depth analysis",
          "Multi-factor evaluation: Michniewski valuations, threat detection, endgame heuristics"
        ],
        links: { github: "", demo: "" } // TODO: add GitHub repo / live demo URLs
      },
      {
        title: "Visitor Management System",
        tech: ["Flutter", "Firebase Firestore", "Firebase Auth", "Node.js", "Cloud Functions"],
        points: [
          "Cross-platform iOS/Android solution for PETRONAS Twin Towers visitor workflows",
          "Secure cloud backend with granular Firestore security rules + serverless data sync"
        ],
        links: { github: "", demo: "" } // TODO: add GitHub repo / live demo URLs
      }
    ],

    experience: [
      {
        role: "Private Tutor",
        company: "Self-Employed",
        period: "2022 — 2023",
        points: [
          "Delivered tailored academic support in multiple subjects for primary and secondary students.",
          "Improved examination performance through structured lesson planning and simplified concept delivery."
        ]
      },
      {
        role: "President, Science and Innovation Club",
        company: "SMS Sultan Mohamad Jiwa",
        period: "2020 — 2022",
        points: [
          "Led a club of 30+ members in organizing STEM workshops and innovation competitions.",
          "Fostered technical interest among the student body."
        ]
      },
      {
        role: "Committee Member, Basketball Club",
        company: "SMS Sultan Mohamad Jiwa",
        period: "2018 — 2021",
        points: [
          "Coordinated logistics for regional tournaments and managed team training schedules."
        ]
      }
    ],

    /* Technical skills taxonomy */
    skills: [
      {
        category: "Languages",
        items: ["Java", "Python", "C", "Dart", "JavaScript", "Haskell"]
      },
      {
        category: "Frameworks & Tools",
        items: ["Spring Boot", "JavaFX", "Flutter", "Node.js", "Docker", "Maven", "Gradle", "Git", "JUnit", "MockMvc"]
      },
      {
        category: "Data & Cloud",
        items: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "Cloud Functions", "Railway"]
      },
      {
        category: "CS Foundations",
        items: ["Algorithms & Data Structures", "Adversarial Search", "Networks & Security", "Database Design", "Formal Specification & Verification"]
      },
      {
        category: "Formal Methods",
        items: ["Rocq (Coq)", "Dafny", "SPIN", "Promela"]
      },
      {
        category: "Spoken Languages",
        items: ["English (Fluent)", "Malay (Native)", "Thai (Conversational)", "Mandarin (Conversational)"]
      }
    ]
  },

  /* ----------------------------------------------------------
   * BUSINESS RESOURCES
   * ---------------------------------------------------------- */

  /* Seamless product catalog — placeholder data.
   * Replace these entries with your real Google Docs catalog
   * data (imported into this array) to display it in-website
   * without any external link. */
  catalog: [
    {
      id: "p1",
      name: "Signature Nasi Lemak",
      category: "F&B",
      price: "RM 12.00",
      imagePrompt: "malaysian nasi lemak on banana leaf plate with sambal fried anchovies peanuts cucumber and boiled egg, appetizing food photography, warm lighting",
      description: "Fragrant coconut rice with sambal, anchovies, peanuts, cucumber, and egg."
    },
    {
      id: "p2",
      name: "Teh Tarik Original",
      category: "F&B",
      price: "RM 4.50",
      imagePrompt: "pulled milk tea teh tarik in a classic glass with frothy top on wooden table, malaysian street drink, warm tones",
      description: "Pulled milk tea with a rich, frothy top — a Malaysian classic."
    },
    {
      id: "p3",
      name: "Ayam Percik Meal Box",
      category: "F&B",
      price: "RM 15.90",
      imagePrompt: "grilled chicken with coconut sauce and rice in a kraft takeaway box, food photography, clean background",
      description: "Grilled chicken in coconut-based percik sauce served with rice, ready for takeaway."
    },
    {
      id: "p4",
      name: "Roti Canai Set",
      category: "F&B",
      price: "RM 6.00",
      imagePrompt: "flaky roti canai with dhal curry dipping bowl on a plate, malaysian breakfast, food photography",
      description: "Crispy layered flatbread served with a warm dhal curry."
    },
    {
      id: "p5",
      name: "Salon & Grooming Package",
      category: "Services",
      price: "RM 60.00",
      imagePrompt: "modern hair salon interior with stylist working on a client, bright professional lighting",
      description: "Professional grooming session — cut, style, and finish."
    },
    {
      id: "p6",
      name: "Home Cleaning Service",
      category: "Services",
      price: "RM 120.00",
      imagePrompt: "bright clean modern living room after professional cleaning service, tidy and spotless",
      description: "Deep home cleaning with professional equipment and eco-friendly products."
    },
    {
      id: "p7",
      name: "Premium Gift Hamper",
      category: "Retail",
      price: "RM 89.00",
      imagePrompt: "elegant gift hamper with assorted products and ribbon bow, premium product photography",
      description: "Curated premium hamper — perfect for festive gifting."
    },
    {
      id: "p8",
      name: "Local Artisan Bundle",
      category: "Retail",
      price: "RM 45.00",
      imagePrompt: "handmade artisan crafts bundle with natural materials, warm product photography",
      description: "Handpicked local artisan goods celebrating Malaysian craft."
    }
  ],

  /* Services & pricing packages */
  packages: [
    {
      tag: "Basic",
      tagColor: "emerald",
      packageNumber: "01",
      title: "Digital Menu / QR Page",
      upfrontFee: "RM 400 / page",
      yearlyRenewal: "RM 0 / year (Free)",
      description: "Free subdomain, basic business/menu page, mobile-friendly setup.",
      features: [
        "Free subdomain (e.g., yourname.nadthawuth.dev)",
        "Basic business info & menu page",
        "Mobile-friendly responsive design",
        "QR code generation for scanning",
        "Global CDN hosting included"
      ]
    },
    {
      tag: "Standard",
      tagColor: "blue",
      packageNumber: "02",
      title: "Business Web + Custom Domain",
      upfrontFee: "RM 400 / page",
      yearlyRenewal: "~ RM 120 / year (Direct to Registrar)",
      description: "Includes all Package 1 features + custom address (e.g., www.johndoe.my).",
      features: [
        "All Package 1 features",
        "Custom domain linking (.com, .my, etc.)",
        "Domain DNS setup & configuration",
        "Professional business layout",
        "Contact form & 1-tap WhatsApp button"
      ]
    },
    {
      tag: "Premium",
      tagColor: "purple",
      packageNumber: "03",
      title: "E-Catalog & Ordering Website",
      upfrontFee: "RM 1,800 (up to 5 pages)",
      upfrontFeeNote: "+RM 300 / additional page",
      yearlyRenewal: "~ RM 620 / year",
      yearlyRenewalNote: "(RM 120 Direct to Registrar)",
      description: "High-speed server, custom domain, full product catalog, online ordering & Manager Dashboard.",
      features: [
        "All Package 1 & 2 features",
        "Full product catalog with categories",
        "Online ordering system (WhatsApp cart)",
        "Manager Dashboard for order tracking",
        "High-speed server performance",
        "Up to 5 pages (add more for RM 300 each)"
      ]
    }
  ],

  /* Add-Ons & Extras */
  addons: [
    {
      category: "Attract Customers",
      categoryIcon: "📍",
      services: [
        {
          name: "Google Maps Business Listing Setup",
          price: "RM 300",
          description: "Helps local customers find your store, address, and opening hours directly on Google Maps.",
          features: [
            "Create/verify Google Business Profile",
            "Add store address, photos & hours",
            "Pin location on Google Maps",
            "Customer review setup guidance"
          ]
        }
      ]
    },
    {
      category: "Sales & Orders",
      categoryIcon: "🛒",
      services: [
        {
          name: "WhatsApp Cart-to-Order System",
          price: "RM 400",
          description: "Lets customers build a cart and send formatted orders directly to your WhatsApp.",
          features: [
            "Add-to-cart functionality",
            "Quantity adjustment (add/remove items)",
            "Automated order summary formatting",
            "1-tap send order to your WhatsApp"
          ]
        }
      ]
    },
    {
      category: "Content & Data",
      categoryIcon: "📝",
      services: [
        {
          name: "Writing & Data Entry Service",
          price: "RM 200 / page",
          description: "We digitize and format text/pricing from your paper menus, flyers, or notes.",
          features: [
            "Digitize paper menu / flyer content",
            "Format pricing & descriptions neatly",
            "Up to 25 items per page",
            "Photo resizing & optimization (if provided)"
          ]
        }
      ]
    }
  ],

  /* Domain info note */
  domainNote: "Domain names (.com, .my, etc.) are purchased and renewed directly by you through a third-party registrar (e.g., Namecheap or Exabytes). We will assist with domain setup and linking at no additional charge.",

  /* Why-choose-us guarantees */
  guarantees: [
    {
      title: "0% Commission Fees",
      description: "Keep 100% of your order profit — no marketplace fees."
    },
    {
      title: "Ultra Fast Loading",
      description: "Hosted on Cloudflare global servers for instant access."
    },
    {
      title: "Free Domain Setup Help",
      description: "We link and configure your custom domain at no extra charge."
    }
  ]
};

/* ============================================================
 * Helpers
 * ============================================================ */
window.SITE_CONFIG.whatsappLink = function () {
  var cfg = window.SITE_CONFIG;
  return "https://wa.me/" + cfg.whatsapp.number + "?text=" + encodeURIComponent(cfg.whatsapp.message);
};

window.SITE_CONFIG.catalogImage = function (prompt) {
  return "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=" +
    encodeURIComponent(prompt) + "&image_size=landscape_4_3";
};

/* ============================================================
 * Shared UI — navigation bar, theme toggle & footer
 * ============================================================ */
(function () {

  function activePage() {
    var p = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p === "business.html" ? "business.html" : "index.html";
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
    var wa = cfg.whatsappLink();

    var linkItems =
      navLinkItem("index.html", "Resume", active === "index.html") +
      navLinkItem("business.html", "Business Resources", active === "business.html");

    var cta =
      '<a href="' + wa + '" target="_blank" rel="noopener" class="btn btn-primary btn-sm ml-2">Contact</a>';

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
      '<a href="' + wa + '" target="_blank" rel="noopener" class="btn btn-primary w-full mt-2">Contact</a>' +
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

  window.renderFooter = function () {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var cfg = window.SITE_CONFIG;
    var wa = cfg.whatsappLink();

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
      '<a href="index.html" class="' + footLink + '">Resume</a>' +
      '<a href="business.html" class="' + footLink + '">Business Resources</a>' +
      "</div></div>" +

      /* Connect */
      '<div>' +
      '<p class="' + footHead + '">connect</p>' +
      '<div class="space-y-2">' +
      '<a href="' + cfg.social.github + '" target="_blank" rel="noopener" class="' + footLink + '">GitHub ↗</a>' +
      '<a href="' + cfg.social.linkedin + '" target="_blank" rel="noopener" class="' + footLink + '">LinkedIn ↗</a>' +
      '<a href="mailto:' + cfg.email + '" class="' + footLink + ' truncate">' + cfg.email + "</a>" +
      '<a href="' + wa + '" target="_blank" rel="noopener" class="' + footLink + '">WhatsApp ↗</a>' +
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
      "<p>Powered by Cloudflare Pages</p>" +
      "</div></div>" +
      "</footer>";
  };
})();
