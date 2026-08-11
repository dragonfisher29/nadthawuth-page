/* ============================================================
 * RESUME CONSTANTS — Central Data File
 * ------------------------------------------------------------
 * THIS IS THE ONLY FILE YOU NEED TO EDIT.
 * All site content lives here — resume, business packages,
 * pricing, add-ons, domain info, and contact info.
 *
 * Personal Identity & Resume:
 *   siteName, handle, tagline, email, social, terminal,
 *   resume.education, resume.projects, resume.experience, resume.skills
 *
 * Business Resources (for business.html):
 *   packages, addons, domainNote
 *
 * site-config.js automatically references ALL values from here.
 * Update lastUpdated below every time you edit this file.
 * ============================================================ */
window.RESUME_CONSTANTS = {

  /* Personal Identity */
  siteName: "nadthawuth.dev",
  handle: "nadthawuth",
  tagline: "Architecting full-stack web applications, multi-tenant B2B SaaS platforms, and cloud-native systems.",
  location: "Southampton, United Kingdom",

  /* Update this every time you edit the resume */
  lastUpdated: "2026-08-11",

  /* Contact */
  email: "nadthawuth@gmail.com",
  phone: "+447733529901",

  /* Downloadable resume (drop your resume PDF at this path) */
  resumePdf: "assets/resume.pdf",

  /* WhatsApp */
  whatsapp: {
    number: "447733529901",
    message: "Hi Nadthawuth! I saw your portfolio and would like to connect."
  },

  /* Social / external profile links */
  social: {
    github: "https://github.com/dragonfisher29",
    linkedin: "https://www.linkedin.com/in/nadthawuthketnukkunn"
  },

  /* Terminal widget data (rendered in the hero of index.html) */
  terminal: {
    status: "Studying",
    location: "Southampton, UK",
    focus: "Full-stack · B2B SaaS · Cloud-native · Cybersecurity",
    languages: ["TypeScript", "Java", "Python", "C", "Dart", "JavaScript", "Haskell"]
  },

  /* ==========================================================
   * RESUME CONTENT — Education, Projects, Experience, Skills
   * ========================================================== */
  resume: {

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
        title: "Pasar Karat MSA",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
        points: [
          "Architected and deployed a full-stack web marketplace for the Malaysian Student Association to digitize peer-to-peer trading, replacing legacy WhatsApp workflows.",
          "Engineered secure seller phone authentication, custom session management, and RBAC admin password recovery using SQL migrations and Supabase RLS/Storage policies.",
          "Built a responsive frontend with full-text search, multi-category filtering, client-side asset uploads, and automated fallback caching to maintain high service availability."
        ],
        links: { github: "", demo: "" }
      },
      {
        title: "B2B Multi-Tenant Restaurant Platform",
        tech: ["Next.js", "Node.js", "Supabase", "WebSockets", "PostgreSQL"],
        points: [
          "Designed a multi-tenant SaaS architecture utilizing Row-Level Security (RLS) for complete cross-tenant data isolation and structured JSON logging.",
          "Engineered an HMAC/SHA256 signature-verified webhook ingestion pipeline with idempotency tracking to prevent duplicate payment processing.",
          "Built a real-time Kitchen Display System (KDS) leveraging persistent WebSockets, browser audio alerts, dynamic JSONB menu modifier pricing, and reactive inventory toggling."
        ],
        links: { github: "", demo: "" }
      },
      {
        title: "Pinecone Healthcare Platform",
        tech: ["Java 21", "Spring Boot 3", "JavaFX", "PostgreSQL", "Docker"],
        points: [
          "Developed a full-stack enterprise desktop application with a JavaFX frontend and Spring Boot REST API for encrypted healthcare appointment management and test kit distribution.",
          "Authored 33+ integration tests using JUnit and MockMvc to ensure compliance and end-to-end reliability across critical medical workflows.",
          "Containerized backend services with Docker and configured automated CI/CD deployment pipelines on Railway paired with a managed PostgreSQL instance."
        ],
        links: { github: "", demo: "" }
      },
      {
        title: "Part III Module Advisor",
        tech: ["Next.js", "TypeScript", "Supabase", "Vitest", "React Hook Form", "Zod"],
        points: [
          "Built a full-stack academic planning tool that parses structured Markdown syllabus data to rank and construct optimal 5-module course paths.",
          "Developed a multi-factor recommendation engine incorporating user interest weights, dynamic study-time workload classifiers, and dependency-graph prerequisite validation.",
          "Integrated Zod-validated forms with a server-side Supabase client for persistent user submissions and seamless Vercel deployment."
        ],
        links: { github: "", demo: "" }
      }
    ],

    experience: [
      {
        role: "Private Tutor",
        company: "Self-Employed",
        period: "2022 — 2023",
        points: [
          "Delivered tailored academic support in multiple subjects for primary and secondary students, improving examination performance through structured lesson planning and simplified concept delivery."
        ]
      },
      {
        role: "President, Science and Innovation Club",
        company: "SMS Sultan Mohamad Jiwa",
        period: "2020 — 2022",
        points: [
          "Led a club of 30+ members in organizing STEM workshops and innovation competitions, fostering technical interest among the student body."
        ]
      }
    ],

    /* Technical skills taxonomy */
    skills: [
      {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Java", "Python", "C", "SQL", "HTML/CSS", "Dart", "Haskell"]
      },
      {
        category: "Frameworks & Web",
        items: ["Next.js (App Router)", "React", "Spring Boot", "Node.js", "JavaFX", "Tailwind CSS", "Flutter"]
      },
      {
        category: "Cloud, Databases & DevOps",
        items: ["PostgreSQL", "Supabase (RLS)", "WebSockets", "Docker", "Railway", "Vercel", "Firebase", "MongoDB"]
      },
      {
        category: "Testing & Tools",
        items: ["JUnit", "MockMvc", "Vitest", "React Hook Form", "Zod", "Git", "Unix/Linux", "Maven", "Gradle"]
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

  /* ==========================================================
   * WEB DEVELOPMENT PACKAGES — business.html pricing
   * ========================================================== */
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

  /* ==========================================================
   * ADD-ONS & EXTRAS — business.html optional services
   * ========================================================== */
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

  /* ==========================================================
   * DOMAIN INFO — shared business info
   * ========================================================== */
  domainNote: "Domain names (.com, .my, etc.) are purchased and renewed directly by you through a third-party registrar (e.g., Namecheap or Exabytes). We will assist with domain setup and linking at no additional charge.",

  /* ==========================================================
   * DEMOS — listing page data
   * snapshot: relative path to image file in the repository
   *   (e.g. "assets/images/demos/menu-qr.png")
   * ========================================================== */
  demos: [
    {
      title: "Digital Menu / QR Page",
      category: "Package 02",
      description: "Selera Kitchen",
      tech: ["HTML", "Tailwind CSS", "Responsive Design"],
      snapshot: "assets/images/demos/seleraKitchen.png",
      demoUrl: "https://demo1-fnb.nadthawuth.workers.dev/"
    },
    {
      title: "Business Website",
      category: "Package 02",
      description: "SparkleCleanMY",
      tech: ["Next.js", "Tailwind CSS", "Contact Form"],
      snapshot: "assets/images/demos/sparkleCleanMY.png",
      demoUrl: "https://demo1-service.nadthawuth.workers.dev/"
    },
  ]
};
