import Link from 'next/link'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { featuredProjects } from '@/lib/data'

export function FeaturedProjectsSection() {
  return (
    <Section id="featured-projects">
      <Reveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, full-stack development, 
            system design, and software engineering. Each project demonstrates different technical 
            skills and problem-solving approaches.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <p className="text-muted-foreground mb-8">
            These are some of my most significant projects that highlight key achievements 
            and technical capabilities.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        <span>15</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1" />
                        <span>4</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Technology Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Impact Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {metric.label}: {metric.value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center flex-wrap gap-2 w-full">
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
    </Section>
  )
}