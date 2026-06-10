import {
  Project,
  Skill,
  TimelineItem,
  Service,
  Testimonial,
  Certificate,
  BlogArticle,
  Stat,
} from "./types";

export const PERSONAL_INFO = {
  name: "Doha Ali",
  title: "Frontend Developer",
  subTitle: "Crafting High-Performance & Visually Stunning Digital Experiences",
  location: "Cairo, Egypt",
  email: "dodoa9249@gmail.com",
  phone: "+20 102 875 7002",
  whatsapp: "https://wa.me/201028757002",
  github: "https://github.com/Doha-33",
  linkedin: "https://www.linkedin.com/in/doha-ali-412017267/",
  twitter: "https://x.com/DohaAli1689594",
  resumeUrl:
    "https://drive.google.com/file/d/1ZfAw5SarNkYeSdlEXfPCt72X3WjYoqpB/view?usp=drive_link",
  bio: "I am a passionate and detail-oriented Frontend Developer with 1+ years of professional experience crafting visually stunning, ultra-fast, and highly accessible user interfaces. I specialize in building complex single-page applications, interactive dashboards, and pixel-perfect design systems using modern React, Next.js, and Tailwind CSS. My focus is always on high performance, smooth fluid animations, and providing an incredible, cohesive user experience from the first paint to the final click.",
  shortBio:
    "Passionate Frontend Developer focused on creating fluid, user-centric, and exceptionally designed web applications.",
  avatar:
    "/assets/WhatsApp_Image_2026-06-10_at_5.51.48_PM-removebg-preview.png", // High-quality professional female tech headshot
};

export const STATS: Stat[] = [
  {
    id: "projects",
    label: "Completed Projects",
    value: 8,
    suffix: "+",
    iconName: "Code",
    description: "Production web applications delivered worldwide",
  },
  {
    id: "clients",
    label: "Happy Clients",
    value: 10,
    suffix: "",
    iconName: "Smile",
    description: "Long-term relationships custom-built on trust",
  },
  {
    id: "experience",
    label: "Years of Experience",
    value: 2,
    suffix: "+",
    iconName: "Briefcase",
    description: "Building production-ready software",
  },
  {
    id: "contributions",
    label: "Open Source PRs",
    value: 15,
    suffix: "+",
    iconName: "GitMerge",
    description: "Contributing back to the developer community",
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", iconName: "Atom", level: 92 },
  { name: "Next.js", category: "frontend", iconName: "Layers", level: 85 },
  { name: "TypeScript", category: "frontend", iconName: "Shield", level: 88 },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    iconName: "Flame",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    iconName: "Palette",
    level: 98,
  },
  {
    name: "Bootstrap / scss",
    category: "frontend",
    iconName: "Wind",
    level: 98,
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    iconName: "Workflow",
    level: 75,
  },
  {
    name: "UI/UX Implementation",
    category: "frontend",
    iconName: "PenTool",
    level: 95,
  },

  // Backend
  // { name: "Node.js Basics", category: "backend", iconName: "Server", level: 65 },
  // { name: "Laravel Basics", category: "backend", iconName: "Cpu", level: 60 },
  // { name: "REST API Integration", category: "backend", iconName: "ArrowLeftRight", level: 92 },

  // Tools & Workflows
  { name: "Git & GitHub", category: "tools", iconName: "Github", level: 95 },
  { name: "Vite / Webpack", category: "tools", iconName: "Zap", level: 88 },
  { name: "Framer Motion", category: "tools", iconName: "Activity", level: 97 },
  {
    name: "Chrome DevTools & Perf",
    category: "tools",
    iconName: "Gauge",
    level: 89,
  },

  // Soft Skills
  {
    name: "Communication & Collaboration",
    category: "soft",
    iconName: "MessageSquareText",
    level: 85,
  },
  {
    name: "Problem Solving",
    category: "soft",
    iconName: "Lightbulb",
    level: 88,
  },
  { name: "Time Management", category: "soft", iconName: "Clock", level: 90 },
  {
    name: "Adaptability & Learning",
    category: "soft",
    iconName: "BookOpen",
    level: 98,
  },
];

export const SERVICES: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Developing robust, typing-safe, and highly responsive single-page applications with clean component trees using React, Next.js, and TypeScript.",
    iconName: "Monitor",
  },
  {
    id: "responsive",
    title: "Responsive Web Development",
    description:
      "Designing layouts that dynamically morph perfectly to any viewport — mobile, tablets, laptops, and ultra-wide displays — with optimized load speeds.",
    iconName: "Smartphone",
  },
  {
    id: "dashboards",
    title: "Modern Interactive Dashboards",
    description:
      "Creating highly intuitive, data-driven administrative interfaces integrated with beautiful, real-time charts, metrics sorting, and tables.",
    iconName: "LayoutDashboard",
  },
  {
    id: "landing",
    title: "High-Converting Landing Pages",
    description:
      "Iterating sleek showcase splash pages utilizing beautiful typography, optimized assets, micro-interactions, and visual storytelling.",
    iconName: "Sparkles",
  },
  {
    id: "apis",
    title: "Seamless API Integration",
    description:
      "Connecting frontend modules securely and gracefully to third-party endpoints, RESTful microservices, and GraphQL APIs with advanced state hydration.",
    iconName: "Link2",
  },
  {
    id: "performance",
    title: "Performance & SEO Tuning",
    description:
      "Auditing page weight, lazy loading resources, improving Core Web Vitals score, and arranging semantic layouts to score maximum on Google search engines.",
    iconName: "Gauge",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "erp-system",
    title: "ERP System Dashboard",
    category: "Dashboards",
    description:
      "Developed a comprehensive Enterprise Resource Planning (ERP) system designed to streamline and manage core business operations through a modern, scalable, and fully integrated architecture. The platform was built using React 19, TypeScript, Tailwind CSS, featuring a responsive bilingual interface (Arabic & English).",
    image: "/assets/erp.PNG",
    tech: ["React", "TypeScript", "REST APIs"],
    demoUrl: "https://fintosoft.net/",
    githubUrl: "https://github.com/Doha-33/ERP",
    featured: true,
  },
  {
    id: "asna-site",
    title: "ASNA AVL Site",
    category: "Websites",
    description:
      "A production-level website for ASNA, a leading AVL company, built with Next.js. The site features a modern UI, full responsiveness, SEO optimization, and bilingual support (Arabic & English) to effectively showcase the company's services and projects.",
    image: "/assets/asna.PNG",
    tech: ["Next.js", "React", "TypeScript", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Doha-33/elodan",
    featured: true,
  },
  {
    id: "asna-dashboard",
    title: "ASNA AVL Dashboard",
    category: "Dashboards",
    description:
      "A modern, interactive dashboard for managing and visualizing data from the ASNA AVL system. Built with React and TypeScript, the dashboard features real-time data updates, dynamic charts, and a responsive design to provide an intuitive user experience for monitoring and controlling AVL operations.",
    image: "/assets/asna-dashboard.PNG",
    tech: ["React", "TypeScript", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Doha-33/elodan",
    featured: true,
  },
  {
    id: "elodan-ai",
    title: "Elodan AI Generator Platform",
    category: "Web Apps",
    description:
      "AI-powered web platform that allows users to generate multimedia content (images, videos, audio), apply AI-driven video effects, and interact with an intelligent chat assistant.",
    image: "/assets/elodan.PNG",
    tech: ["Next.js", "React", "TypeScript", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Doha-33/elodan",
    featured: true,
  },
  {
    id: "regt-dashboard",
    title: "REGT Dashboard – Advertisement Management System",
    category: "Dashboards",
    description:
      "A React & TypeScript-based admin dashboard connected to an advertisement platform for managing campaigns, users, and analytics.",
    image: "/assets/regt.PNG",
    tech: ["React", "TypeScript", "REST APIs"],
    demoUrl: "https://regt-dashboard.netlify.app/",
    githubUrl: "https://github.com/Doha-33/regt-dashboard",
    featured: true,
  },
  {
    id: "arkan-blockchain",
    title: "Arkan Blockchain Platform",
    category: "Web Apps",
    description:
      "A blockchain-based web platform with a secure and responsive interface supporting multilingual experience and real-time data interaction.",
    image: "/assets/zayam.PNG",
    tech: ["React", "TypeScript", "REST APIs"],
    demoUrl: "https://dev.zayamrock.com/",
    githubUrl: "https://github.com/Ahmed11711/doha-arkan-front",
    featured: false,
  },
  {
    id: "cannata-shipping",
    title: "Cannata Shipping Services Website – Dubai Version",
    category: "Websites",
    description:
      "Two production-level websites built with Next.js featuring modern UI, full responsiveness, SEO optimization, and bilingual support (Arabic & English).",
    image: "/assets/cannata.PNG",
    tech: ["Next.js", "TypeScript", "SEO Optimization"],
    demoUrl: "https://cannata.ae",
    githubUrl: "https://github.com/Doha-33/cannata-next",
    featured: false,
  },
  {
    id: "css-generator",
    title: "CSS Generator Tool",
    category: "Web Apps",
    description:
      "An interactive CSS generator tool that allows developers to create styles visually with live preview and exportable CSS code.",
    image: "/assets/cssgenerator.PNG",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://css-generator-x.netlify.app/",
    githubUrl: "https://github.com/Doha-33/CSS-Generator",
    featured: false,
  },
  {
    id: "jumia-clone",
    title: "Jumia Clone Web App",
    category: "E-Commerce",
    description:
      "A responsive e-commerce frontend clone with product listings, filtering system, cart UI, and smooth user experience.",
    image: "/assets/jumia.PNG",
    tech: ["Angular", "React", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/AhmedAli300/Jumia",
    featured: true,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "t1",
    years: "2025 - Present",
    role: "Freelance Frontend Developer",
    company: "Remote / Freelance",
    description:
      "Delivering modern client-based web applications using React.js, Next.js, and TypeScript with focus on scalability, performance optimization, and seamless user experience.",
    type: "experience",
    highlights: [
      "Built AI-powered platforms and production-ready admin dashboards",
      "Implemented multilingual support (i18n) and SEO optimization strategies",
      "Managed project requirements and delivered responsive modern interfaces",
    ],
  },
  {
    id: "t2",
    years: "Jun 2025 - Oct 2025",
    role: "Frontend Developer",
    company: "Core Brackets – Egypt",
    description:
      "Worked on scalable frontend solutions using React.js and Next.js while collaborating with designers and backend teams to deliver production-ready applications.",
    type: "experience",
    highlights: [
      "Developed reusable and maintainable UI components",
      "Integrated REST APIs and handled asynchronous data efficiently",
      "Optimized UI performance and participated in feature implementation",
    ],
  },
  {
    id: "t3",
    years: "Dec 2024 - Apr 2025",
    role: "Full Stack Web Development – MEARN Track",
    company: "ITI – Qena Branch",
    description:
      "Professional intensive training program covering full stack web development technologies and modern software engineering practices.",
    type: "education",
  },
  {
    id: "t4",
    years: "Feb 2022",
    role: "Web Development Fundamentals",
    company: "ITI – Qena Branch",
    description:
      "Completed foundational training in modern web development concepts, frontend technologies, and responsive design principles.",
    type: "education",
  },
  {
    id: "t5",
    years: "2020 - 2024",
    role: "Bachelor’s in Computer Science",
    company: "Faculty of Computers and Information, South Valley University",
    description:
      "Graduated with GPA 2.8 / 4.0 (B). Graduation Project: Clean & Green – Grade: Excellent.",
    type: "education",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    title: "Full Stack Web Development – MEARN Track",
    issuer: "ITI – Qena Branch",
    date: "Apr 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#",
  },
  {
    id: "c2",
    title: "Web Development Fundamentals",
    issuer: "ITI – Qena Branch",
    date: "Feb 2022",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#",
  },
  {
    id: "c3",
    title: "Frontend Development & Modern React Applications",
    issuer: "Self Learning & Practical Projects",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#",
  },
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "te1",
    name: "Sarah Jenkins",
    role: "CEO & Co-Founder",
    company: "Aura Creative Studio",
    content:
      "Doha is a true rare talent in frontend engineering. Not only is her CSS/Tailwind work pixel-perfect, but her grasp of smooth animations through Framer Motion has elevated our brand to a global benchmark list. Communication was spotless, and delivery was 3 days ahead of schedule!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: "te2",
    name: "Marcus Aurelius",
    role: "Engineering Director",
    company: "Zenith SaaS Corp",
    content:
      "Working with Doha to implement our analytics dashboard was an outstanding experience. She wrote clean, highly structured, typed React components that integrated flawlessly with our APIs. She even fixed some existing layout bottlenecks before we noticed them.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: "te3",
    name: "Youssif Mansour",
    role: "Product Owner",
    company: "Nile Hub Marketplace",
    content:
      "Doha took our highly detailed Figma prototypes and turned them into ultra-fast interactive components within record time. The code is structured so neatly that our full-stack team has no trouble editing it. A brilliant engineer!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
];

export const BLOGS: BlogArticle[] = [
  {
    id: "b1",
    title: "Optimizing React hydration speeds with lazy component prefetching",
    summary:
      "A deep dive into Webpack and Vite code splitting patterns and prefetching routes on mouse-hover to establish sub-100ms transitions.",
    date: "May 14, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=500",
    category: "React",
  },
  {
    id: "b2",
    title: "Mastering Fluid Layouts in Tailwind: Beyond Grid and Flexbox",
    summary:
      "Exploring modern CSS functions like clamp(), container queries, and subgrids inside Tailwind templates to tackle complex responsive requests.",
    date: "April 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
    category: "Tailwind",
  },
  {
    id: "b3",
    title:
      "Designing for Motion: Best practices for performance-safe web animation",
    summary:
      "How to safely scale, rotate, and fade elements with Framer Motion on low-tier mobile devices by triggering GPU compositing layers.",
    date: "March 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500",
    category: "Animations",
  },
];
