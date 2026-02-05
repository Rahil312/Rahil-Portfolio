import Link from 'next/link'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { experiences } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'

export function ExperiencePreview() {
  // Show only the first 2 experiences for preview
  const previewExperiences = experiences.slice(0, 2)

  return (
    <Section id="experience-preview" className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems and delivering measurable impact across AI, backend services, and data engineering.
          </p>
        </div>
      </Reveal>

      <Stagger className="space-y-6">
        {previewExperiences.map((experience, index) => (
          <StaggerItem key={index}>
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{experience.role}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDateRange(experience.startDate, experience.endDate)}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Key Achievements */}
                <ul className="space-y-2 mb-6">
                  {experience.bullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-3 mt-2 block h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {experience.metrics && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {metric.label}: {metric.value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.3}>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/experience">
              View Full Experience
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}