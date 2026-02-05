import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { experiences } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'

export function ExperienceTimeline() {
  return (
    <Section>
      <Reveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey through internships and roles in AI engineering, software development, 
            and teaching, with a focus on building scalable systems and delivering measurable impact.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <Stagger className="space-y-12">
          {experiences.map((experience, index) => (
            <StaggerItem key={index}>
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                <Card className="w-full ml-0 md:ml-16 card-hover">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{experience.role}</CardTitle>
                        <p className="text-lg font-semibold text-primary mt-1">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDateRange(experience.startDate, experience.endDate)}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {experience.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start text-sm">
                            <span className="text-primary mr-3 mt-2 block h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics */}
                    {experience.metrics && experience.metrics.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3">Impact Metrics</h3>
                        <div className="flex flex-wrap gap-2">
                          {experience.metrics.map((metric, metricIndex) => (
                            <div 
                              key={metricIndex}
                              className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                            >
                              {metric.label}: <span className="font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}