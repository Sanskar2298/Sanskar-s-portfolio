export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  category: 'AI/ML' | 'Full-Stack' | 'Systems';
  image: string;
  technologies: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureHighlights: string[];
}

export interface SkillDomain {
  id: string;
  name: string;
  tagline: string;
  description: string;
  competencies: {
    title: string;
    description: string;
    tools: string[];
    focus: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Leadership' | 'Open Source';
  description: string[];
  skills: string[];
  current?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  link?: string;
  metric?: string;
}

export const PERSONAL_DATA = {
  name: 'Sanskar',
  fullName: 'Sanskar Srivastava',
  title: 'Software Engineer & AI Systems Architect',
  college: 'National Institute of Technology Hamirpur (NIT Hamirpur)',
  degree: 'B.Tech in Electronics and Communication Engineering',
  cgpa: '8.46',
  expectedGraduation: '2028',
  location: 'Hamirpur, Himachal Pradesh',
  phone: '+91-6393883934',
  email: 'sanskarsrivastava89@gmail.com',
  github: 'https://github.com/Sanskar2298',
  linkedin: 'https://www.linkedin.com/in/sanskar-srivastava-9986b030b/',
  leetcode: 'https://leetcode.com/u/Sanskar009/',
  tagline: 'Building scalable distributed systems, production AI pipelines, and high-throughput backend architectures.',
  bio: 'Pre-Final Year B.Tech student at NIT Hamirpur focused on distributed systems engineering, production RAG pipelines, and full-stack architecture. Builder of Atlas and Lexora — AI-powered platforms for collaborative work and document intelligence.',
  stats: [
    { label: 'Academic CGPA', value: '8.46', suffix: '/ 10', highlight: 'NIT Hamirpur' },
    { label: 'DSA Solved', value: '450', suffix: '+', highlight: 'LeetCode & GFG' },
    { label: 'Projects Built', value: '10', suffix: '+', highlight: 'AI & Full-Stack' },
    { label: 'Users Served', value: '1K', suffix: '+', highlight: 'Live Platforms' }
  ]
};

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'core-languages',
    name: 'Languages',
    tagline: 'Strong foundations across systems, scripting, and web languages',
    description: 'Working fluency across compiled, scripting, typed, and browser-native languages for full-stack and AI systems.',
    competencies: [
      {
        title: 'C++ & Python',
        description: 'Systems programming, data structures, backend services, automation, and machine learning workflows.',
        tools: ['C++', 'Python'],
        focus: 'Systems & Computation'
      },
      {
        title: 'JavaScript & TypeScript',
        description: 'Typed and modern JavaScript development for reactive interfaces, APIs, and Node.js services.',
        tools: ['JavaScript', 'TypeScript'],
        focus: 'Typed Application Logic'
      },
      {
        title: 'Web Foundations',
        description: 'Semantic markup and maintainable styling foundations for accessible, responsive product interfaces.',
        tools: ['HTML', 'CSS'],
        focus: 'Accessible Interfaces'
      }
    ]
  },
  {
    id: 'web-backend',
    name: 'Web',
    tagline: 'Responsive interfaces, backend services, and production APIs',
    description: 'Engineering product interfaces and resilient backend services with clear API boundaries and maintainable architecture.',
    competencies: [
      {
        title: 'Frontend Engineering',
        description: 'Component-driven interfaces, responsive layouts, accessible design systems, and client-side performance.',
        tools: ['ReactJS', 'NextJS', 'TailwindCSS'],
        focus: 'Zero-Lag Interfaces'
      },
      {
        title: 'Backend & API Architecture',
        description: '50+ RESTful APIs with JWT & RBAC auth, rate-limiting middlewares, BullMQ job queues, and ACID-compliant transactions.',
        tools: ['Node.js', 'ExpressJS', 'FastAPI'],
        focus: '50+ APIs Shipped'
      },
      {
        title: 'REST API Design',
        description: 'Resource-oriented API design, validation, authentication flows, and maintainable service boundaries.',
        tools: ['REST APIs'],
        focus: 'Reliable Service Contracts'
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI / ML',
    tagline: 'Data science, deep learning, and retrieval-augmented systems',
    description: 'Building practical machine learning and generative AI systems from data preparation through explainable, production-ready inference.',
    competencies: [
      {
        title: 'Data Science Foundations',
        description: 'Data preparation, analysis, feature engineering, and classical machine learning workflows.',
        tools: ['NumPy', 'Pandas', 'Scikit-learn'],
        focus: 'Data to Decisions'
      },
      {
        title: 'Deep Learning',
        description: 'Neural architectures for vision, time-series forecasting, representation learning, and intelligent automation.',
        tools: ['PyTorch', 'Deep Learning'],
        focus: 'Neural Systems'
      },
      {
        title: 'RAG & LLM Systems',
        description: 'Retrieval-augmented generation, semantic search, prompt orchestration, and agentic workflows for grounded AI products.',
        tools: ['RAG', 'LangChain', 'LangGraph'],
        focus: 'Grounded AI Systems'
      }
    ]
  },
  {
    id: 'databases-devops',
    name: 'Databases, Cloud & Tools',
    tagline: 'Data modeling, infrastructure, and engineering workflow tools',
    description: 'Designing reliable data layers and reproducible development workflows for maintainable, deployable systems.',
    competencies: [
      {
        title: 'Databases & ORM',
        description: 'Relational, document, cache, and local data stores with schema design and type-safe persistence.',
        tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
        focus: 'Reliable Data Layers'
      },
      {
        title: 'Infrastructure & Delivery',
        description: 'Containerized development and deployment workflows for reproducible, portable applications.',
        tools: ['AWS (S3)', 'Docker'],
        focus: 'Reproducible Delivery'
      },
      {
        title: 'Developer Workflow',
        description: 'Version control, collaboration, API testing, and practical engineering workflows for dependable delivery.',
        tools: ['Git', 'GitHub', 'Postman'],
        focus: 'Maintainable Delivery'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'atlas',
    title: 'Atlas — AI-Powered Multi-Tenant Engineering Workspace',
    tagline: 'Full-stack collaborative workspace with AI-driven code generation, RBAC, and real-time sync',
    description: 'A full-stack engineering workspace with AI-powered code generation, multi-tenant isolation, and role-based access control. Features REST APIs with JWT authorization, BullMQ background job processing, and semantic code search.',
    featured: false,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Prisma', 'LangChain', 'BullMQ', 'Docker'],
    metrics: ['AI code generation', 'REST APIs', 'Multi-tenant workspace'],
    githubUrl: 'https://github.com/Sanskar2298/atlas',
    architectureHighlights: [
      'Multi-tenant isolation with JWT & RBAC authorization across 50+ REST endpoints',
      'BullMQ background job processing with Redis-backed distributed task queues',
      'LangChain-powered semantic code search',
      'Prisma ORM with PostgreSQL — ACID-compliant transactions and schema migrations'
    ]
  },
  {
    id: 'lexora',
    title: 'Lexora — AI Document Intelligence Platform',
    tagline: 'RAG-powered document workspace with contextual chat, source citations & AI study tools',
    description: 'A full-stack document intelligence platform that lets users upload, analyze, and interact with multiple documents using Gemini-powered AI. Semantic retrieval with Qdrant grounds responses in document content and provides source citations alongside summaries, topic extraction, concept analysis, and an AI-powered study mode.',
    featured: true,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'Node.js', 'Gemini API', 'Qdrant', 'RAG', 'Tailwind CSS'],
    metrics: ['Multi-document workspace', 'Source-grounded answers', 'AI study mode'],
    liveUrl: 'https://lexora-ai-document.vercel.app/landing',
    githubUrl: 'https://github.com/Sanskar2298/AI-Document-Assistant',
    architectureHighlights: [
      'RAG pipeline using Qdrant vector search for semantic retrieval across uploaded documents',
      'Gemini API integration for contextual document chat, summarization, topic extraction, and study assistance',
      'Multi-document AI workspace with conversation history and document-aware interactions',
      'Full-stack Next.js and Node.js architecture with dedicated chat controller and LLM service layers',
      'Source-grounded responses with document citations to improve traceability and reduce hallucinations'
    ]
  },
  {
    id: 'scaffold',
    title: 'Scaffold — Explainable AI Personalization System',
    tagline: 'Auditable content and product structuring shaped by a living user profile',
    description: 'Built at the Slab Hackathon organized by WebCMD and the NIT Hamirpur Chapter of GDG Ludhiana, Scaffold turns raw ideas, video concepts, article drafts, and product sketches into personalized structures based on how each person thinks. Every structuring decision includes a clear explanation, while user corrections update the profile live and visibly.',
    featured: false,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['AI Personalization', 'Profile Learning', 'Explainable AI', 'Next.js', 'Node.js'],
    metrics: ['Hackathon-built prototype', 'Auditable decisions', 'Live profile updates'],
    githubUrl: 'https://github.com/Sanskar2298/SignalDesk',
    architectureHighlights: [
      'Structures the same raw idea differently for each user using a profile of pace, tone, interests, and preferences',
      'Explains why each structuring decision was made instead of treating personalization as a black box',
      'Updates the user profile in real time when corrections such as “too formal” are submitted',
      'Supports both digital content scaffolds and physical product specifications through one steerable system'
    ]
  },
  {
    id: 'mail-allotment',
    title: 'Mail-Allotment — Full-Stack Authentication System',
    tagline: 'Secure OTP authentication and role-based panels with JWT, Prisma, and Redis',
    description: 'A secure, scalable authentication platform with separate Admin, Student, and SuperUser panels. It combines OTP-based login, JWT access and refresh tokens, Redis for temporary OTP storage, and PostgreSQL through Prisma for persistent refresh-token management.',
    featured: false,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'JWT'],
    metrics: ['OTP-based login', '3 role-based panels', 'Refresh-token security'],
    githubUrl: 'https://github.com/Sanskar2298/emailAllotment',
    architectureHighlights: [
      'OTP authentication with temporary code storage in Redis and email/password validation',
      'JWT access and refresh-token flows with persistent refresh-token storage through Prisma and PostgreSQL',
      'Separated Admin, Student, and SuperUser panels with modular frontend and backend concerns',
      'Zod and express-validator input validation with environment-based configuration and Kubernetes-ready structure'
    ]
  },
  {
    id: 'sih-6038',
    title: 'Nayan — Explainable AI for Diabetic Retinopathy Screening',
    tagline: 'MATLAB-based, explainable retinal screening for rural healthcare workflows',
    description: 'A clinically focused retinal image analysis pipeline for diabetic retinopathy screening in rural India. The system combines image quality assessment, adaptive enhancement, retinal structure and lesion analysis, severity grading, explainable AI, and Simulink-based telemedicine workflow simulation.',
    featured: false,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop',
    technologies: ['MATLAB', 'Simulink', 'Computer Vision', 'Deep Learning', 'Grad-CAM', 'Medical Imaging'],
    metrics: ['DR severity Levels 0–4', '>90% sensitivity target'],
    githubUrl: 'https://github.com/Sanskar2298/SIH_26',
    architectureHighlights: [
      'Automated fundus-image quality assessment with enhancement and recapture feedback for ungradeable images',
      'Retinal structure and lesion analysis covering optic disc, vessels, microaneurysms, exudates, and hemorrhages',
      'Explainable grading with Grad-CAM maps, lesion-level evidence, calibrated confidence, and annotated reports',
      'Simulink telemedicine workflow simulation for bandwidth, throughput, review capacity, and district-scale screening'
    ]
  },
  {
    id: 'epicast',
    title: 'EpiCast — LSTM-Based Disease Outbreak Prediction',
    tagline: 'Deep learning time-series forecasting with 87% accuracy and real-time risk dashboards',
    description: 'A predictive analytics platform leveraging LSTM neural networks for disease outbreak forecasting with 87% prediction accuracy. Features automated sequence generation, temporal pattern analysis, and a real-time REST API risk dashboard built with React and Node.js.',
    featured: false,
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Python', 'Keras', 'LSTM', 'Node.js', 'React', 'REST API'],
    metrics: ['87% prediction accuracy', 'Real-time forecasting', 'REST API dashboard'],
    githubUrl: 'https://github.com/Altammash-alty/DiseaseOutbreakPredictor',
    architectureHighlights: [
      'Bi-directional LSTM with temporal attention for sequence prediction',
      'Automated feature engineering and sequence generation pipeline',
      'Real-time risk dashboard with Node.js REST API and React frontend',
      'Model versioning and reproducible training with Keras callbacks'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-2',
    role: 'Web Development Coordinator',
    organization: 'Indian Society for Technical Education (ISTE), NIT Hamirpur',
    location: 'NIT Hamirpur, HP',
    period: 'Aug 2024 – Present',
    current: true,
    type: 'Leadership',
    description: [
      'Lead web development for PRODYOGIKI 2026 — the flagship technical fest portal serving 800+ active users with real-time event registration and scheduling.',
      'Architected and deployed the Hult Prize 2026 campus event platform, managing participant workflows and automated email routing across 3+ departments.',
      'Coordinated cross-team web infrastructure, ensuring zero-downtime deployments and responsive design across all ISTE digital properties.'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'Leadership', 'System Architecture', 'Event Management']
  },
  {
    id: 'exp-3',
    role: 'Junior Training and Placement Cell Representative',
    organization: 'Training & Placement Cell, NIT Hamirpur',
    location: 'NIT Hamirpur, HP',
    period: 'Apr 2026 – Present',
    current: true,
    type: 'Leadership',
    description: [
      'Act as a student liaison for the Training & Placement Cell, communicating recruitment updates, eligibility criteria, and deadlines to peers.',
      'Support the coordination of placement drives, pre-placement talks, company interactions, and interview logistics for participating students.',
      'Assist with student placement records, feedback collection, and career-readiness initiatives to improve the campus recruitment experience.'
    ],
    skills: ['Recruitment Coordination', 'Student Communication', 'Event Management', 'Career Development', 'Leadership']
  },
  {
    id: 'exp-1',
    role: 'Hacktoberfest 2026 — MLH Hack Day Host (SPOC)',
    organization: 'Major League Hacking (MLH)',
    location: 'NIT Hamirpur, HP',
    period: 'Oct 2026',
    type: 'Open Source',
    description: [
      'Served as the Single Point of Contact (SPOC) for Hacktoberfest 2026 at NIT Hamirpur, coordinating with Major League Hacking for campus-wide open source events.',
      'Organized and hosted MLH Hack Day — a full-day open source contribution marathon with workshops on Git workflows, pull request etiquette, and OSS project discovery.',
      'Mentored 100+ participants through their first open source contributions, resulting in 200+ merged pull requests across community repositories.'
    ],
    skills: ['Open Source', 'Git', 'GitHub', 'Community Building', 'Event Management', 'Mentorship']
  },
  {
    id: 'exp-4',
    role: 'Finance and Treasury Team Member',
    organization: 'NIMBUS Technical Fest, NIT Hamirpur',
    location: 'NIT Hamirpur, HP',
    period: 'Jan 2025 – Aug 2025',
    type: 'Leadership',
    description: [
      'Contacted companies and prospective partners to explore sponsorship opportunities for NIMBUS, NIT Hamirpur\'s technical fest.',
      'Supported event budgeting by estimating requirements, tracking expenses, and maintaining clear financial records across organizing teams.',
      'Coordinated sponsorship follow-ups, payment documentation, and vendor-related finance tasks to keep event operations on schedule.'
    ],
    skills: ['Budgeting', 'Sponsorship Outreach', 'Financial Tracking', 'Vendor Coordination', 'Event Management']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Place — Computer Vision Maze-Solving Robotics',
    issuer: 'National-Level Technical Competition',
    date: '2025',
    description: 'Secured 1st place among 100+ competing teams in a national computer vision robotics challenge, developing an autonomous maze-solving system with real-time path planning and obstacle avoidance.',
    badge: '1st Place Winner',
    metric: 'Rank 1 / 100+ Teams'
  },
  {
    id: 'ach-2',
    title: '3rd Place — AlgoWars Competitive Programming',
    issuer: 'Google Developer Group (GDG), NIT Hamirpur',
    date: '2025',
    description: 'Achieved 3rd place in AlgoWars — the premier competitive programming contest hosted by Google Developer Group at NIT Hamirpur, competing against top algorithmic programmers.',
    badge: '3rd Place',
    metric: 'AlgoWars Top 3'
  },
  {
    id: 'ach-3',
    title: '450+ DSA Problems Solved',
    issuer: 'LeetCode & GeeksforGeeks',
    date: '2024 – Present',
    description: 'Solved 450+ algorithmic problems across LeetCode and GeeksforGeeks, practicing Dynamic Programming, Graph Algorithms, Trees, and advanced data structures in C++ and Python.',
    badge: 'Consistent Solver',
    metric: '450+ Solved'
  },
  {
    id: 'ach-4',
    title: 'Core Organizer — Hult Prize 2026 & PRODYOGIKI 2025',
    issuer: 'ISTE, NIT Hamirpur',
    date: '2025 – 2026',
    description: 'Core organizer for two of NIT Hamirpur\'s largest events — Hult Prize 2026 (global social entrepreneurship competition) and PRODYOGIKI 2025 (flagship technical fest with 800+ participants).',
    badge: 'Core Organizer',
    metric: '800+ Participants'
  },
  {
    id: 'ach-5',
    title: 'Training & Placement Cell Representative',
    issuer: 'NIT Hamirpur',
    date: '2025 – Present',
    description: 'Selected as the Training & Placement Cell Representative, serving as the liaison between the student body and the placement office — coordinating recruitment drives, company interactions, and career development initiatives.',
    badge: 'T&P Representative',
    metric: 'Official Representative'
  },
  {
    id: 'ach-6',
    title: 'Ranked 2nd Overall — Class 12 Board Examinations',
    issuer: 'School Academic Achievement',
    date: '2023',
    description: 'Ranked 2nd overall in my school in the Class 12 Board Examinations, reflecting consistent academic performance and strong subject fundamentals.',
    badge: 'School Rank 2',
    metric: '2nd Overall'
  }
];
