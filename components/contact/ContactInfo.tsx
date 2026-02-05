import Link from 'next/link'
import { Mail, MapPin, Github, Linkedin, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

// Contact methods configuration
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me an email directly',
    value: 'rahilshukla3122@gmail.com',
    href: 'mailto:rahilshukla3122@gmail.com',
    primary: true
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    value: 'linkedin.com/in/rahil-shukla-bb8184204/',
    href: 'https://www.linkedin.com/in/rahil-shukla-bb8184204/',
    primary: false
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Check out my code and projects',
    value: 'github.com/Rahil312',
    href: 'https://github.com/Rahil312',
    primary: false
  }
]

const availability = {
  status: 'Available for opportunities',
  description: 'Currently open to full-time positions',
  preferredContact: 'Email or LinkedIn',
  responseTime: 'Within 24-48 hours',
  timezone: 'EST (Eastern Time)'
}

export function ContactInfo() {
  return (
    <Section>
      <Reveal>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground">
              I&apos;m always interested in discussing new opportunities, innovative projects, 
              or just connecting with fellow developers and engineers. Let&apos;s build something amazing together!
            </p>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Methods</h2>
            <Stagger className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <StaggerItem key={index}>
                    <Card className={`card-hover ${method.primary ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg ${method.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                            <IconComponent className={`h-6 w-6 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{method.title}</h3>
                            <p className="text-muted-foreground mb-2">{method.description}</p>
                            <Link href={method.href} target="_blank" rel="noopener noreferrer">
                              <Button variant={method.primary ? "default" : "outline"}>
                                {method.value}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>

          {/* Availability Status */}
          <Reveal delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>{availability.status}</span>
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  {availability.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span>Preferred contact: {availability.preferredContact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Response time: {availability.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Timezone: {availability.timezone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Additional Info */}
          <Reveal delay={0.4}>
            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s Discuss</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                    Full-time software engineering opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                    AI/ML and data engineering projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                    Open source collaborations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1.5 block h-1 w-1 rounded-full bg-current" />
                    Technical discussions and knowledge sharing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Reveal>
    </Section>
  )
}