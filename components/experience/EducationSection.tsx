import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { education } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'

export function EducationSection() {
  return (
    <Section className="bg-muted/30">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background in computer science with focus on software engineering, 
            algorithms, and system design.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <StaggerItem key={index}>
            <Card className="h-full card-hover">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.field}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>

                  {edu.gpa && (
                    <div className="mt-4">
                      <Badge variant="secondary" className="text-sm">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}