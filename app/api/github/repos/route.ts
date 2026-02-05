import { NextRequest, NextResponse } from 'next/server'
import { fetchGitHubRepos, filterRepos, sortRepos } from '@/lib/github'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search') || ''
    const language = searchParams.get('language') || undefined
    const includeForks = searchParams.get('includeForks') !== 'false'
    const sortBy = (searchParams.get('sort') as 'updated' | 'stars' | 'name') || 'updated'

    // Fetch all repositories
    const allRepos = await fetchGitHubRepos()

    // Apply filters and sorting
    const filteredRepos = filterRepos(allRepos, search, language, includeForks)
    const sortedRepos = sortRepos(filteredRepos, sortBy)

    // Get unique languages for filter options
    const languageSet = new Set(allRepos.map(repo => repo.language).filter(Boolean))
    const languages = Array.from(languageSet).sort()

    return NextResponse.json({
      repos: sortedRepos,
      languages,
      total: sortedRepos.length,
      totalAll: allRepos.length
    })
  } catch (error) {
    console.error('Error in GitHub API route:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}