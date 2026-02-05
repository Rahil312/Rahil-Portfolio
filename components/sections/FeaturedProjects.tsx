import Link from 'next/link'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { featuredProjects } from '@/lib/data'

export function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting key projects that demonstrate my expertise in AI, full-stack development, and system design.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <StaggerItem key={project.id}>
            <Card className="h-full card-hover group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.summary}
                    </CardDescription>
                  </div>
                  {project.type === 'github' && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        <span>12</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1" />
                        <span>3</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 5 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.stack.length - 5} more
                    </Badge>
                  )}
                </div>

                {/* Highlights */}
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {project.metrics && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {metric.label}: {metric.value}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center space-x-2 w-full">
                  {project.links.map((link) => (
                    <Button key={link.label} variant="outline" size="sm" asChild>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label === 'GitHub' ? (
                          <Github className="h-3 w-3 mr-1" />
                        ) : (
                          <ExternalLink className="h-3 w-3 mr-1" />
                        )}
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.3}>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}