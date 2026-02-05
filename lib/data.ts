export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  type: 'github' | 'extra'
  featured: boolean
  stack: string[]
  highlights: string[]
  metrics?: { label: string; value: string }[]
  links: { label: string; url: string }[]
  images?: { src: string; alt: string }[]
  source?: {
    repoUrl: string
    stars: number
    forks: number
    language?: string
    updatedAt: string
    isFork: boolean
    isArchived: boolean
  }
}

export interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string | null
  bullets: string[]
  tech: string[]
  metrics?: { label: string; value: string }[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string | null
  gpa?: string
  location: string
}

// Featured projects data
export const featuredProjects: Project[] = [
  {
    id: 'wolfjobs',
    slug: 'wolfjobs',
    title: 'WolfJobs',
    summary: 'MERN recruiting platform with ATS parsing and match scoring, reducing screening time by 40%',
    type: 'github',
    featured: true,
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'ATS Parser'],
    highlights: [
      'Implemented ATS parsing for automated resume screening',
      'Built match scoring algorithm for candidate evaluation',
      'Reduced manual screening time by 40% in demo tests',
      'Added real-time notifications for job applications'
    ],
    metrics: [
      { label: 'Time Saved', value: '40%' },
      { label: 'Processing Speed', value: '<2s' }
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Rahil312/WolfJobs' }
    ]
  },
  {
    id: 'captcha-accessibility',
    slug: 'captcha-accessibility',
    title: 'Enhancing CAPTCHA Accessibility',
    summary: 'CNN-based solution to improve CAPTCHA accessibility for visually impaired users',
    type: 'extra',
    featured: true,
    stack: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Accessibility'],
    highlights: [
      'Developed CNN model for audio-visual CAPTCHA conversion',
      'Achieved 94% accuracy on CAPTCHA recognition',
      'Implemented accessibility features for screen readers',
      'Reduced completion time for visually impaired users'
    ],
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Accessibility Improvement', value: '60%' }
    ],
    links: [
      { label: 'GitHub', url: '#' }
    ]
  },
  {
    id: 'inventory-management',
    slug: 'inventory-management',
    title: 'Food Manufacturing Inventory System',
    summary: 'Comprehensive DBMS solution for food manufacturing inventory management',
    type: 'extra',
    featured: true,
    stack: ['MySQL', 'PHP', 'HTML/CSS', 'JavaScript', 'DBMS'],
    highlights: [
      'Designed normalized database schema for inventory tracking',
      'Built real-time inventory monitoring dashboard',
      'Implemented automated reorder point calculations',
      'Created comprehensive reporting system'
    ],
    links: [
      { label: 'GitHub', url: '#' }
    ]
  },
  {
    id: 'parallel-bfs',
    slug: 'parallel-bfs',
    title: 'Parallel BFS Implementation',
    summary: 'High-performance parallel breadth-first search with comprehensive benchmarking',
    type: 'github',
    featured: true,
    stack: ['C++', 'OpenMP', 'MPI', 'CUDA', 'Performance Analysis'],
    highlights: [
      'Implemented parallel BFS using OpenMP and MPI',
      'Achieved 85% efficiency on large graphs (>1M nodes)',
      'Comprehensive performance analysis and benchmarking',
      'GPU acceleration using CUDA for dense graphs'
    ],
    metrics: [
      { label: 'Speedup', value: '12x' },
      { label: 'Efficiency', value: '85%' }
    ],
    links: [
      { label: 'GitHub', url: '#' }
    ]
  }
]

// Experience data
export const experiences: Experience[] = [
  {
    company: 'Cogbee',
    role: 'AI Engineer Intern',
    location: 'North Carolina, USA',
    startDate: '2025-05',
    endDate: '2025-07',
    bullets: [
      'Designed, built, and shipped Python REST microservices to orchestrate LiveKit WebRTC sessions and LLM prompt-loop dialogues over WebSockets, supporting 30+ concurrent sessions with robust session lifecycle management',
      'Integrated OpenAI STT/TTS with asynchronous processing and streaming I/O, achieving sub-second transcription latency and real-time audio synthesis for conversational turn-taking',
      'Implemented automated LLM output evaluation (structured Q&A, composite scoring, soft-skill badges), reducing manual review by 60% and standardizing outputs for downstream product/analytics consumption',
      'Containerized services with Docker and deployed/managed them on Kubernetes, improving environment consistency and enabling reliable rollouts of backend microservices'
    ],
    tech: ['Python', 'REST APIs', 'LiveKit', 'WebRTC', 'WebSockets', 'LLM', 'OpenAI', 'STT/TTS', 'Docker', 'Kubernetes'],
    metrics: [
      { label: 'Concurrent Sessions', value: '30+' },
      { label: 'Latency', value: '<1s' },
      { label: 'Manual Review Reduction', value: '60%' }
    ]
  },
  {
    company: 'AVI – Web Solutions',
    role: 'Python Intern Developer',
    location: 'Gujarat, India',
    startDate: '2024-01',
    endDate: '2024-06',
    bullets: [
      'Built a multilingual document processing pipeline using Python, Pandoc, and LangChain: file conversion → chunking → embeddings → storage in PostgreSQL to enable fast retrieval for internal users',
      'Stored OpenAI embeddings in a PostgreSQL vector database and delivered top-k semantic search in 200ms over 50k+ chunks, improving search relevance and retrieval speed'
    ],
    tech: ['Python', 'Pandoc', 'LangChain', 'PostgreSQL', 'Vector Embeddings', 'OpenAI', 'Semantic Search'],
    metrics: [
      { label: 'Documents Processed', value: '50k+' },
      { label: 'Search Response Time', value: '200ms' }
    ]
  },
  {
    company: 'Vonly – Data Analytics Solutions',
    role: 'Software Engineer Intern',
    location: 'Gujarat, India',
    startDate: '2023-05',
    endDate: '2023-07',
    bullets: [
      'Built interactive Redash analytics dashboards for 10+ stakeholders, reducing recurring reporting turnaround from hours to minutes',
      'Developed a C# + Python system to map and consolidate metadata entities across platforms, improving ID consistency and reducing duplicate/incorrect mappings by 25%'
    ],
    tech: ['Redash', 'Analytics', 'Dashboards', 'C#', 'Python', 'Data Mapping', 'Metadata Management'],
    metrics: [
      { label: 'Stakeholders Served', value: '10+' },
      { label: 'Duplicate Reduction', value: '25%' },
      { label: 'Reporting Speed', value: 'Hours to Minutes' }
    ]
  },
  {
    company: 'DAIICT',
    role: 'Teaching Assistant - Calculus',
    location: 'Gujarat, India',
    startDate: '2023-08',
    endDate: '2024-01',
    bullets: [
      'Led weekly Calculus tutorials/office hours for 120+ students; graded 300+ submissions with a consistent rubric, improving grading consistency and course experience'
    ],
    tech: ['Calculus', 'Mathematics', 'Teaching', 'Academic Support'],
    metrics: [
      { label: 'Students Taught', value: '120+' },
      { label: 'Submissions Graded', value: '300+' }
    ]
  }
]

// Education data
export const education: Education[] = [
  {
    institution: 'North Carolina State University',
    degree: 'Master of Computer Science',
    field: 'Computer Science',
    startDate: '2024-08',
    endDate: '2026-05',
    gpa: '4.0',
    location: 'Raleigh, NC'
  },
  {
    institution: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    degree: 'Bachelor of Technology (Honors)',
    field: 'ICT, Computational Science',
    startDate: '2020-08',
    endDate: '2024-05',
    gpa: '8.25/10',
    location: 'India'
  }
]