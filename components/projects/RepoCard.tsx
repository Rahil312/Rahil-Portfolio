import Link from 'next/link'
import { Github, Star, GitFork, Calendar, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/lib/utils'
import type { GitHubRepo } from '@/lib/validators'

interface RepoCardProps {
  repo: GitHubRepo
}

const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    'C++': 'bg-blue-600',
    Java: 'bg-red-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-600',
    PHP: 'bg-purple-500',
    Ruby: 'bg-red-600',
    Swift: 'bg-orange-500',
    Kotlin: 'bg-purple-600',
  }
  return colors[language] || 'bg-gray-500'
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card className="h-full card-hover group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base group-hover:text-primary transition-colors">
              <Link 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{repo.name}</span>
              </Link>
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              {repo.fork && (
                <Badge variant="secondary" className="text-xs">
                  Fork
                </Badge>
              )}
              {repo.archived && (
                <Badge variant="outline" className="text-xs">
                  Archived
                </Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        {repo.description && (
          <CardDescription className="text-sm line-clamp-2 mt-2">
            {repo.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {/* Repository Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            {repo.language && (
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-1.5 ${getLanguageColor(repo.language)}`} />
                <span>{repo.language}</span>
              </div>
            )}
            <div className="flex items-center">
              <Star className="h-3 w-3 mr-1" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="h-3 w-3 mr-1" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Calendar className="h-3 w-3 mr-1" />
          <span>Updated {formatDate(repo.updated_at)}</span>
        </div>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {repo.topics.slice(0, 4).map((topic) => (
              <Badge key={topic} variant="outline" className="text-xs">
                {topic}
              </Badge>
            ))}
            {repo.topics.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{repo.topics.length - 4} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}