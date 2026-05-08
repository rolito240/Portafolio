export type Language = "en" | "es";

export const languages: Record<Language, string> = {
  en: "English",
  es: "Espanol",
};

export const portfolioContent = {
  en: {
    nav: ["About", "Work", "AI Systems", "Skills", "Contact"],
    profile: {
      name: "Daniel Martinez",
      fullName: "Daniel Josue Martinez Lopez",
      role: "Web Developer, Data Analyst & AI Automation Builder",
      location: "Bucaramanga, Santander, Colombia",
      email: "leinadgalaxy@gmail.com",
      phone: "+57 300 205 3165",
      githubUrl: "https://github.com/rolito240",
      linkedinUrl: "https://www.linkedin.com/in/daniel-martinez-381034228/",
      headline:
        "Computer Engineering student near graduation building practical web products, analytics views, and agent-assisted workflows.",
      summary:
        "I connect front-end development, data analysis, and AI automation to turn business ideas into usable digital systems. My work combines React and TypeScript interfaces, SQL/Postgres analytics, Supabase-backed products, and modern agentic workflows with tools, skills, MCP concepts, and subagent collaboration.",
      availability:
        "Open to junior, internship, freelance, remote, and AI automation opportunities.",
    },
    hero: {
      eyebrow: "English-first bilingual portfolio",
      title: "Building useful digital systems across web, data, and AI automation.",
      primaryCta: "Explore work",
      secondaryCta: "Open contact links",
    },
    metrics: [
      { value: "3", label: "Professional lanes: web, data, AI automation" },
      { value: "20+", label: "Tools across development, analytics, and delivery" },
      { value: "2026", label: "Portfolio rebuilt from scratch with Next.js 15" },
    ],
    tracks: [
      {
        title: "Front-End Development",
        description:
          "Responsive interfaces with React, Next.js, TypeScript, Tailwind CSS, and reusable component systems.",
      },
      {
        title: "Data Analysis",
        description:
          "SQL, PostgreSQL/Supabase, Power BI, Excel, KPIs, reporting, data cleaning, and decision-support dashboards.",
      },
      {
        title: "AI Automation",
        description:
          "Agentic workflows using custom agents, tools, skills, MCP-aware integrations, and subagent coordination.",
      },
    ],
    projects: [
      {
        slug: "ttc-time-task-control",
        title: "TTC - Time & Task Control",
        category: "Productivity App",
        description:
          "A mobile-first productivity system to organize day-to-day execution through calendar planning, tasks, goals, habits, and focus sessions.",
        impact:
          "Shows end-to-end product thinking for personal productivity UX, including onboarding, daily summaries, progress cues, and dark mode consistency.",
        tech: ["Flutter", "UX design", "State management", "Pomodoro", "Habit tracking"],
        repoUrl: "https://github.com/rolito240/Ttc.git",
        liveUrl: "https://vercel.com/leinadgalaxy-gmailcoms-projects/ttc/3QXAqi77i6ab6GoZbiaVJw8uxmHS",
        images: [
          "/projects/focusday/Screenshot_1778107270.png",
          "/projects/focusday/Screenshot_1778107381.png",
          "/projects/focusday/Screenshot_1778107287.png",
          "/projects/focusday/Screenshot_1778107388.png",
          "/projects/focusday/Screenshot_1778107484.png",
          "/projects/focusday/Screenshot_1778107464.png",
          "/projects/focusday/Screenshot_20260506_154919.png",
          "/projects/focusday/Screenshot_1778107394.png",
          "/projects/focusday/Screenshot_1778107475.png",
          "/projects/focusday/Screenshot_1778107493.png",
          "/projects/focusday/Screenshot_1778107504.png",
          "/projects/focusday/Screenshot_1778107470.png",
        ],
        captions: [
          "Onboarding screen for planning your day and task flow.",
          "Pomodoro onboarding: entering deep focus sessions.",
          "Habit onboarding: daily check-ins and streak consistency.",
          "Rewards onboarding: levels, achievements, and points.",
          "Profile dashboard with XP progress and quick stats.",
          "Goals module with purpose and period-based planning.",
          "Calendar dashboard with daily progress and pending tasks.",
          "Home summary with tasks, habits, focus and daily goals.",
          "Focus module with pomodoro controls and progress metrics.",
          "Dark mode profile view for low-light sessions.",
          "Dark mode focus timer with segmented controls.",
          "Empty-state habits screen with clear primary action.",
        ],
      },
      {
        slug: "horus-optic-ecommerce",
        title: "Horus Optic",
        category: "E-commerce Platform",
        description:
          "Digital commerce platform for an optical business, including catalog presentation, Supabase integration, and a path toward analytics dashboards.",
        impact:
          "Shows real business product thinking across front-end delivery, database-backed features, and measurable commerce operations.",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
        repoUrl: "https://github.com/Mariamm240/Horus",
        liveUrl: "https://www.horusoptic.com.co/",
      },
      {
        slug: "santa-rosa-institutional",
        title: "Colegio Santa Rosa de Lima",
        category: "Institutional Website",
        description:
          "Institutional web presence and information organization for an educational environment, with supporting Excel workflows for internal tracking.",
        impact:
          "Demonstrates reliability with content-heavy interfaces, structured information, and maintenance for real organizational use.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Content architecture", "Institutional UX"],
        repoUrl: "https://github.com/Mariamm240/santarosa-web-legacy",
        liveUrl: "https://www.colegiosantarosadelimasoacha.edu.co/",
      },
      {
        slug: "calendar-task-manager",
        title: "Calendar Task Manager",
        category: "Productivity App",
        description:
          "Task-planning product with calendar navigation, timeline scheduling, priority levels, and quick daily routines.",
        impact:
          "Highlights UX thinking, multi-view application design, and practical productivity workflows.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "date-fns", "Local Storage"],
        repoUrl: "https://github.com/Mariamm240/My-app-Calendary",
        images: [
          "/projects/task-manager-timeline.png",
          "/projects/task-manager-calendar.png",
          "/projects/task-manager-list.png",
        ],
        captions: [
          "Timeline scheduling interface for time-block planning.",
          "Calendar dashboard with cross-day task visibility.",
          "Task list view to process execution and priorities.",
        ],
      },
      {
        slug: "portfolio-rebuild",
        title: "Portfolio Rebuild",
        category: "Professional Portfolio",
        description:
          "A bilingual, English-first portfolio focused on professional clarity, strong project proof, and polished frontend execution.",
        impact:
          "Transforms profile presentation into a clear hiring narrative for international frontend and product opportunities.",
        tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Playwright"],
        repoUrl: "https://github.com/rolito240/Portafolio",
      },
    ],
    aiSystems: {
      title: "AI Automation & Agentic Workflows",
      description:
        "My next professional lane focuses on practical AI systems that help people research, plan, build, verify, and deliver work faster.",
      items: [
        "Custom agents designed for specific workflows and outcomes.",
        "MCP-aware integrations that connect tools and context safely.",
        "Tool orchestration for development, documents, research, and QA.",
        "Reusable skills and prompts that standardize repeatable work.",
        "Subagent collaboration for parallel research, implementation, and review.",
      ],
    },
    skills: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Responsive UI"] },
      { title: "Data", items: ["SQL", "PostgreSQL", "Supabase", "Power BI", "Excel", "KPIs"] },
      { title: "AI", items: ["AI agents", "MCP concepts", "Tools", "Skills", "Prompt engineering", "Workflow design"] },
      { title: "Delivery", items: ["Git", "GitHub", "Vercel", "Testing", "Documentation", "Fast iteration"] },
    ],
    education: [
      "Computer Engineering - completed coursework, Universitat de Catalunya",
      "Web programming bootcamp - HTML, CSS, JavaScript, Python, Talento Tech Oriente, 2025",
      "Technical labor program in IT systems - Centro Educativo San Pablo",
      "DataCamp SQL Associate - May 1, 2024, ID SQA0015271926392",
    ],
    contact: {
      title: "Let's connect.",
      description:
        "For applications and opportunities, connect through LinkedIn or email. CV variants will be finalized after this portfolio is published.",
      primary: "Open LinkedIn",
      secondary: "Send Email",
    },
  },
  es: {
    nav: ["Sobre mi", "Proyectos", "Sistemas IA", "Skills", "Contacto"],
    profile: {
      name: "Daniel Martinez",
      fullName: "Daniel Josue Martinez Lopez",
      role: "Desarrollador Web, Analista de Datos y Creador de Automatizaciones IA",
      location: "Bucaramanga, Santander, Colombia",
      email: "leinadgalaxy@gmail.com",
      phone: "+57 300 205 3165",
      githubUrl: "https://github.com/rolito240",
      linkedinUrl: "https://www.linkedin.com/in/daniel-martinez-381034228/",
      headline:
        "Estudiante de Ingenieria Informatica cerca de graduarse, construyendo productos web, analitica y flujos asistidos por agentes.",
      summary:
        "Conecto desarrollo frontend, analisis de datos y automatizacion con IA para convertir ideas de negocio en sistemas digitales utiles. Mi trabajo combina interfaces con React y TypeScript, analitica SQL/Postgres, productos con Supabase y flujos agenticos modernos con tools, skills, conceptos MCP y subagentes.",
      availability:
        "Abierto a oportunidades junior, practicas, freelance, remoto y automatizacion con IA.",
    },
    hero: {
      eyebrow: "Portafolio bilingue con prioridad en ingles",
      title: "Construyo sistemas digitales utiles entre web, datos y automatizacion con IA.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Abrir enlaces de contacto",
    },
    metrics: [
      { value: "3", label: "Lineas profesionales: web, datos, automatizacion IA" },
      { value: "20+", label: "Herramientas de desarrollo, analitica y entrega" },
      { value: "2026", label: "Portafolio reconstruido desde cero con Next.js 15" },
    ],
    tracks: [
      {
        title: "Desarrollo Front-End",
        description:
          "Interfaces responsivas con React, Next.js, TypeScript, Tailwind CSS y sistemas de componentes reutilizables.",
      },
      {
        title: "Analisis de Datos",
        description:
          "SQL, PostgreSQL/Supabase, Power BI, Excel, KPIs, reporting, limpieza de datos y dashboards para decision.",
      },
      {
        title: "Automatizacion IA",
        description:
          "Flujos agenticos con agentes personalizados, tools, skills, integraciones con conceptos MCP y coordinacion de subagentes.",
      },
    ],
    projects: [
      {
        slug: "ttc-time-task-control",
        title: "TTC - Time & Task Control",
        category: "App de Productividad",
        description:
          "Sistema mobile-first de productividad para organizar el dia con calendario, tareas, metas, habitos y sesiones de foco.",
        impact:
          "Muestra pensamiento de producto completo para UX de productividad personal, incluyendo onboarding, resumen diario, progreso y dark mode.",
        tech: ["Flutter", "Diseno UX", "State management", "Pomodoro", "Seguimiento de habitos"],
        repoUrl: "https://github.com/rolito240/Ttc.git",
        liveUrl: "https://vercel.com/leinadgalaxy-gmailcoms-projects/ttc/3QXAqi77i6ab6GoZbiaVJw8uxmHS",
        images: [
          "/projects/focusday/Screenshot_1778107270.png",
          "/projects/focusday/Screenshot_1778107381.png",
          "/projects/focusday/Screenshot_1778107287.png",
          "/projects/focusday/Screenshot_1778107388.png",
          "/projects/focusday/Screenshot_1778107484.png",
          "/projects/focusday/Screenshot_1778107464.png",
          "/projects/focusday/Screenshot_20260506_154919.png",
          "/projects/focusday/Screenshot_1778107394.png",
          "/projects/focusday/Screenshot_1778107475.png",
          "/projects/focusday/Screenshot_1778107493.png",
          "/projects/focusday/Screenshot_1778107504.png",
          "/projects/focusday/Screenshot_1778107470.png",
        ],
        captions: [
          "Pantalla de onboarding para planear el dia y el flujo de tareas.",
          "Onboarding de pomodoro para entrar en sesiones profundas.",
          "Onboarding de habitos con check-ins diarios y rachas.",
          "Onboarding de recompensas con niveles, logros y puntos.",
          "Panel de perfil con progreso XP y estadisticas rapidas.",
          "Modulo de metas con proposito y plan por periodos.",
          "Vista de calendario con progreso diario y pendientes clave.",
          "Resumen de hoy con tareas, habitos, foco y metas diarias.",
          "Modulo de foco con controles pomodoro y metricas.",
          "Vista de perfil en modo oscuro para sesiones nocturnas.",
          "Timer de foco en dark mode con controles segmentados.",
          "Pantalla vacia de habitos con accion principal clara.",
        ],
      },
      {
        slug: "horus-optic-ecommerce",
        title: "Horus Optic",
        category: "Plataforma E-commerce",
        description:
          "Plataforma digital para una optica, con catalogo, integracion con Supabase y ruta hacia dashboards de analitica.",
        impact:
          "Muestra pensamiento de producto real entre frontend, base de datos y operaciones comerciales medibles.",
        tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
        repoUrl: "https://github.com/Mariamm240/Horus",
        liveUrl: "https://www.horusoptic.com.co/",
      },
      {
        slug: "santa-rosa-institutional",
        title: "Colegio Santa Rosa de Lima",
        category: "Sitio Institucional",
        description:
          "Presencia web institucional y organizacion de informacion para un entorno educativo, con apoyo en Excel para seguimiento interno.",
        impact:
          "Demuestra trabajo con interfaces de contenido, informacion estructurada y mantenimiento para uso organizacional real.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Arquitectura de contenido", "UX institucional"],
        repoUrl: "https://github.com/Mariamm240/santarosa-web-legacy",
        liveUrl: "https://www.colegiosantarosadelimasoacha.edu.co/",
      },
      {
        slug: "calendar-task-manager",
        title: "Calendar Task Manager",
        category: "App de Productividad",
        description:
          "Producto de planificacion con calendario, timeline, prioridades y rutinas rapidas para organizar el dia.",
        impact:
          "Resalta pensamiento UX, diseno de aplicaciones con varias vistas y flujos de productividad practicos.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "date-fns", "Local Storage"],
        repoUrl: "https://github.com/Mariamm240/My-app-Calendary",
        images: [
          "/projects/task-manager-timeline.png",
          "/projects/task-manager-calendar.png",
          "/projects/task-manager-list.png",
        ],
        captions: [
          "Interfaz timeline para planificar bloques de tiempo.",
          "Dashboard de calendario con visibilidad entre dias.",
          "Vista de lista para ejecutar pendientes y prioridades.",
        ],
      },
      {
        slug: "portfolio-rebuild",
        title: "Reconstruccion del Portafolio",
        category: "Portafolio Profesional",
        description:
          "Portafolio bilingue, prioridad en ingles, enfocado en claridad profesional, evidencia de proyectos y ejecucion frontend pulida.",
        impact:
          "Convierte la presentacion del perfil en una narrativa de contratacion mas clara para oportunidades frontend y de producto.",
        tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Playwright"],
        repoUrl: "https://github.com/rolito240/Portafolio",
      },
    ],
    aiSystems: {
      title: "Automatizacion IA y Flujos Agenticos",
      description:
        "Mi nueva linea profesional se enfoca en sistemas IA practicos que ayudan a investigar, planear, construir, verificar y entregar trabajo mas rapido.",
      items: [
        "Agentes personalizados disenados para flujos y resultados concretos.",
        "Integraciones con conceptos MCP que conectan herramientas y contexto de forma segura.",
        "Orquestacion de tools para desarrollo, documentos, investigacion y QA.",
        "Skills y prompts reutilizables para estandarizar trabajo repetible.",
        "Colaboracion con subagentes para investigar, implementar y revisar en paralelo.",
      ],
    },
    skills: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "UI responsiva"] },
      { title: "Datos", items: ["SQL", "PostgreSQL", "Supabase", "Power BI", "Excel", "KPIs"] },
      { title: "IA", items: ["Agentes IA", "Conceptos MCP", "Tools", "Skills", "Prompt engineering", "Diseno de flujos"] },
      { title: "Entrega", items: ["Git", "GitHub", "Vercel", "Testing", "Documentacion", "Iteracion rapida"] },
    ],
    education: [
      "Ingenieria Informatica - materias finalizadas, Universitat de Catalunya",
      "Bootcamp programacion web - HTML, CSS, JavaScript, Python, Talento Tech Oriente, 2025",
      "Tecnico laboral en sistemas informaticos - Centro Educativo San Pablo",
      "DataCamp SQL Associate - May 1, 2024, ID SQA0015271926392",
    ],
    contact: {
      title: "Conectemos.",
      description:
        "Para aplicaciones y oportunidades, conecta por LinkedIn o correo. Las versiones finales de CV se cierran despues de publicar este portfolio.",
      primary: "Abrir LinkedIn",
      secondary: "Enviar correo",
    },
  },
} as const;

export type PortfolioCopy = (typeof portfolioContent)[Language];
