'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, SortAsc, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal } from '@/components/motion/Reveal'
import { RepoCard } from './RepoCard'
import type { GitHubRepo } from '@/lib/validators'

interface AllProjectsSectionProps {
  initialRepos?: GitHubRepo[]
}

interface ApiResponse {
  repos: GitHubRepo[]
  languages: string[]
  total: number
  totalAll: number
}

export function AllProjectsSection({ initialRepos = [] }: AllProjectsSectionProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos)
  const [languages, setLanguages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  
  // Filters
  const [search, setSearch] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated')
  const includeForks = true // Always include forks

  const fetchRepos = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        search,
        ...(selectedLanguage && { language: selectedLanguage }),
        includeForks: includeForks.toString(),
        sort: sortBy
      })

      const response = await fetch(`/api/github/repos?${params}`)
      if (response.ok) {
        const data: ApiResponse = await response.json()
        setRepos(data.repos)
        setLanguages(data.languages)
      }
    } catch (error) {
      console.error('Error fetching repos:', error)
    } finally {
      setLoading(false)
    }
  }

  // Initial load
  useEffect(() => {
    fetchRepos()
  }, [])

  // Refetch when filters change
  useEffect(() => {
    const debounce = setTimeout(fetchRepos, 300)
    return () => clearTimeout(debounce)
  }, [search, selectedLanguage, includeForks, sortBy])

  return (
    <Section id="all-projects" className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">All GitHub Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through all my repositories, from major projects to experimental code and contributions.
          </p>
        </div>
      </Reveal>

      {/* Filters */}
      <Reveal delay={0.1}>
        <Card className="p-6 mb-8">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search repositories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Language Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="border border-input bg-background rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">All Languages</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <SortAsc className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars' | 'name')}
                  className="border border-input bg-background rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="updated">Recently Updated</option>
                  <option value="stars">Most Stars</option>
                  <option value="name">Name</option>
                </select>
              </div>

              {loading && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </div>
              )}
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Results */}
      <Reveal delay={0.2}>
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {repos.length} repositories
          </p>
        </div>
      </Reveal>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <Reveal key={repo.id} delay={0.05 * (index % 6)}>
            <RepoCard repo={repo} />
          </Reveal>
        ))}
      </div>

      {repos.length === 0 && !loading && (
        <Reveal>
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No repositories found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch('')
                setSelectedLanguage('')
                setIncludeForks(true)
                setSortBy('updated')
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        </Reveal>
      )}
    </Section>
  )
}