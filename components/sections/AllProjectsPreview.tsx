import Link from 'next/link'
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { formatDate } from '@/lib/utils'

// Mock data for preview - this will be replaced with actual GitHub API data
const previewRepos = [
  {
    id: 1,
    name: 'WolfJobs',
    description: 'MERN recruiting platform with ATS parsing and match scoring',
    language: 'JavaScript',
    stargazers_count: 15,
    forks_count: 3,
    updated_at: '2024-01-15',
    html_url: 'https://github.com/Rahil312/WolfJobs',
    fork: true,
    topics: ['react', 'nodejs', 'mongodb', 'ats-parser']
  },
  {
    id: 2,
    name: 'parallel-bfs',
    description: 'High-performance parallel breadth-first search implementation',
    language: 'C++',
    stargazers_count: 8,
    forks_count: 2,
    updated_at: '2023-12-10',
    html_url: 'https://github.com/Rahil312/parallel-bfs',
    fork: false,
    topics: ['cpp', 'parallel-computing', 'algorithms', 'performance']
  },
  {
    id: 3,
    name: 'ml-pipeline',
    description: 'End-to-end machine learning pipeline with MLOps best practices',
    language: 'Python',
    stargazers_count: 12,
    forks_count: 4,
    updated_at: '2024-02-01',
    html_url: 'https://github.com/Rahil312/ml-pipeline',
    fork: false,
    topics: ['python', 'machine-learning', 'mlops', 'docker']
  },
  {
    id: 4,
    name: 'real-time-chat',
    description: 'WebSocket-based real-time chat application with React and Node.js',
    language: 'TypeScript',
    stargazers_count: 6,
    forks_count: 1,
    updated_at: '2023-11-20',
    html_url: 'https://github.com/Rahil312/real-time-chat',
    fork: false,
    topics: ['typescript', 'websockets', 'react', 'realtime']
  },
  {
    id: 5,
    name: 'data-structures-algorithms',
    description: 'Comprehensive collection of data structures and algorithms implementations',
    language: 'Java',
    stargazers_count: 20,
    forks_count: 8,
    updated_at: '2023-10-15',
    html_url: 'https://github.com/Rahil312/data-structures-algorithms',
    fork: false,
    topics: ['java', 'algorithms', 'data-structures', 'leetcode']
  },
  {
    id: 6,
    name: 'microservices-demo',
    description: 'Microservices architecture demo with Docker and Kubernetes',
    language: 'Go',
    stargazers_count: 10,
    forks_count: 5,
    updated_at: '2023-09-30',
    html_url: 'https://github.com/Rahil312/microservices-demo',
    fork: false,
    topics: ['golang', 'microservices', 'docker', 'kubernetes']
  }
]

const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    'C++': 'bg-blue-600',
    Java: 'bg-red-500',
    Go: 'bg-cyan-500',
  }
  return colors[language] || 'bg-gray-500'
}

export function AllProjectsPreview() {
  return (
    <Section id="all-projects-preview">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">All Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my complete collection of projects, including open-source contributions, 
            personal experiments, and collaborative work.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {previewRepos.map((repo, index) => (
          <StaggerItem key={repo.id}>
            <Card className="h-full card-hover group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base group-hover:text-primary transition-colors truncate">
                      <Link 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                        {repo.name}
                        {repo.fork && <Badge variant="secondary" className="ml-2 text-xs">Fork</Badge>}
                      </Link>
                    </CardTitle>
                  </div>
                </div>
                {repo.description && (
                  <CardDescription className="text-sm line-clamp-2">
                    {repo.description}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent className="pt-0">
                {/* Repository Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-3">
                    {repo.language && (
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-1 ${getLanguageColor(repo.language)}`} />
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-3 w-3 mr-1" />
                      {repo.forks_count}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(repo.updated_at)}
                  </div>
                </div>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {repo.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{repo.topics.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.3}>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/projects">
              View All {previewRepos.length}+ Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}