import Link from 'next/link'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Section, Container } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const impactMetrics = [
  { label: 'Concurrent WebRTC + LLM Sessions', value: '30+' },
  { label: 'Streaming STT/TTS Latency', value: '<1s' },
  { label: 'Document Chunks Processed', value: '50k+' },
  { label: 'Duplicate Data Reduction', value: '25%' }
]

const techStack = [
  'Python', 'C++', 'Go', 'JavaScript', 'Java', 'Django', 'React.js', 'Node.js', 'Express.js', 
  'PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'WebRTC', 'REST APIs', 'PyTest'
]

export function Hero() {
  return (
    <Section className="relative min-h-screen flex items-center gradient-bg">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Applied AI</span>{' '}
              <span className="text-foreground">&</span>{' '}
              <span className="text-gradient">Full-Stack Engineer</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl lg:text-2xl">
              Building real-time LLM systems, retrieval pipelines, scalable backend services, and GenAI workflows with expertise in Python microservices.
            </p>
          </Reveal>

          {/* Impact Metrics */}
          <Reveal delay={0.3}>
            <div className="mt-8 text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                Impact Delivered
              </h2>
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {impactMetrics.map((metric, index) => (
                  <StaggerItem key={index}>
                    <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 card-hover">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          {/* Tech Stack */}
          <Reveal delay={0.4}>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
                <Link href="/projects" className="inline-flex items-center justify-center">
                  View My Projects
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
                <Link href="/resume" className="inline-flex items-center justify-center">
                  Download Resume
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.6}>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/Rahil312" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://www.linkedin.com/in/rahil-shukla-bb8184204/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </Reveal>

          {/* Scroll Indicator */}
          <Reveal delay={0.7}>
            <div className="mt-16 flex justify-center">
              <div className="animate-bounce-gentle">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}