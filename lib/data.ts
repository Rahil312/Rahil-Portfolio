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
    title: 'WolfJobs (Forked)',
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
      { label: 'GitHub', url: 'https://github.com/Rahil312/WolfJobs' },
      { label: 'Live Demo', url: '#' }
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
      { label: 'Research Paper', url: '#' },
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
      { label: 'GitHub', url: '#' },
      { label: 'Documentation', url: '#' }
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
      { label: 'GitHub', url: '#' },
      { label: 'Benchmark Results', url: '#' }
    ]
  }
]

// Experience data
export const experiences: Experience[] = [
  {
    company: 'LiveKit',
    role: 'AI Engineer Intern',
    location: 'Remote',
    startDate: '2025-05',
    endDate: '2025-07',
    bullets: [
      'Orchestrated WebRTC sessions supporting 30+ concurrent LLM interactions',
      'Implemented real-time WebSocket communication for streaming STT/TTS',
      'Developed automated LLM evaluation system reducing manual review effort',
      'Deployed scalable solutions using Docker and Kubernetes'
    ],
    tech: ['WebRTC', 'WebSockets', 'STT/TTS', 'Docker', 'Kubernetes', 'LLM APIs'],
    metrics: [
      { label: 'Concurrent Sessions', value: '30+' },
      { label: 'Latency', value: '<1s' }
    ]
  },
  {
    company: 'Tech Company',
    role: 'Python Intern Developer / ML Intern',
    location: 'Remote',
    startDate: '2024-01',
    endDate: '2024-06',
    bullets: [
      'Built multilingual document processing pipeline with embeddings generation',
      'Implemented Postgres vector storage handling 50k+ document chunks',
      'Developed top-k semantic search with sub-second response times',
      'Optimized vector similarity search algorithms for large-scale retrieval'
    ],
    tech: ['Python', 'PostgreSQL', 'Vector Embeddings', 'Semantic Search', 'NLP'],
    metrics: [
      { label: 'Documents Processed', value: '50k+' },
      { label: 'Search Response Time', value: '<1s' }
    ]
  },
  {
    company: 'Software Company',
    role: 'Software Engineer Intern',
    location: 'Remote',
    startDate: '2023-05',
    endDate: '2023-07',
    bullets: [
      'Developed comprehensive dashboards for metadata consolidation',
      'Implemented data deduplication algorithms reducing duplicates by 25%',
      'Built automated reporting system for data quality metrics',
      'Optimized database queries improving dashboard load times'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Data Analytics', 'Dashboard Development'],
    metrics: [
      { label: 'Duplicate Reduction', value: '25%' },
      { label: 'Load Time Improvement', value: '40%' }
    ]
  },
  {
    company: 'North Carolina State University',
    role: 'Teaching Assistant',
    location: 'Raleigh, NC',
    startDate: '2023-08',
    endDate: '2024-01',
    bullets: [
      'Assisted students with software engineering coursework and projects',
      'Conducted lab sessions for data structures and algorithms',
      'Provided mentorship on coding best practices and problem-solving',
      'Graded assignments and provided detailed feedback for improvement'
    ],
    tech: ['Java', 'Python', 'Data Structures', 'Algorithms', 'Teaching']
  }
]

// Education data
export const education: Education[] = [
  {
    institution: 'North Carolina State University',
    degree: 'Master of Computer Science',
    field: 'Computer Science',
    startDate: '2024-08',
    endDate: null,
    gpa: '4.0',
    location: 'Raleigh, NC'
  },
  {
    institution: 'DA-IICT',
    degree: 'Bachelor of Technology',
    field: 'Information and Communication Technology',
    startDate: '2020-08',
    endDate: '2024-05',
    location: 'India'
  }
]