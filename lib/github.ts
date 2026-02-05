import { githubRepoSchema, type GitHubRepo } from './validators'

const GITHUB_USERNAME = 'Rahil312'
const GITHUB_API_BASE = 'https://api.github.com'

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add token if available in environment
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Validate and parse the response
    const repos = data.map((repo: any) => {
      try {
        return githubRepoSchema.parse(repo)
      } catch (error) {
        console.warn(`Failed to parse repo ${repo.name}:`, error)
        return null
      }
    }).filter(Boolean)

    return repos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export async function fetchGitHubRepo(repoName: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 }
      }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return githubRepoSchema.parse(data)
  } catch (error) {
    console.error(`Error fetching repo ${repoName}:`, error)
    return null
  }
}

export function filterRepos(
  repos: GitHubRepo[],
  search: string,
  language?: string,
  includeForks: boolean = true
): GitHubRepo[] {
  return repos.filter(repo => {
    // Search filter
    const searchLower = search.toLowerCase()
    const matchesSearch = !search || 
      repo.name.toLowerCase().includes(searchLower) ||
      repo.description?.toLowerCase().includes(searchLower) ||
      repo.topics?.some(topic => topic.toLowerCase().includes(searchLower))

    // Language filter
    const matchesLanguage = !language || repo.language === language

    // Fork filter
    const matchesForks = includeForks || !repo.fork

    return matchesSearch && matchesLanguage && matchesForks
  })
}

export function sortRepos(repos: GitHubRepo[], sortBy: 'updated' | 'stars' | 'name'): GitHubRepo[] {
  return [...repos].sort((a, b) => {
    switch (sortBy) {
      case 'updated':
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      case 'stars':
        return b.stargazers_count - a.stargazers_count
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })
}