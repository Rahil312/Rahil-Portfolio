import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

// Extra projects not on GitHub
const extraProjects = [
  {
    id: 'wildlife-database',
    title: 'Indian Wildlife Database',
    description: 'Comprehensive database system for tracking and managing Indian wildlife data with advanced search capabilities.',
    stack: ['MySQL', 'PHP', 'HTML/CSS', 'JavaScript'],
    highlights: [
      'Designed complex relational database schema',
      'Implemented advanced search and filtering',
      'Built admin panel for data management',
      'Created wildlife conservation reports'
    ],
    status: 'Private Repository'
  },
  {
    id: 'neural-captcha',
    title: 'Neural Network CAPTCHA Solver',
    description: 'Research project exploring neural network approaches to CAPTCHA solving for accessibility improvements.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
    highlights: [
      'Implemented CNN architecture for image recognition',
      'Achieved 92% accuracy on standard CAPTCHAs',
      'Developed data augmentation pipeline',
      'Created evaluation metrics and benchmarks'
    ],
    status: 'Research Project'
  },
  {
    id: 'blockchain-voting',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology with smart contracts.',
    stack: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    highlights: [
      'Developed smart contracts for vote recording',
      'Implemented cryptographic vote verification',
      'Built decentralized frontend interface',
      'Ensured voter anonymity and transparency'
    ],
    status: 'Academic Project'
  }
]

export function ExtraProjectsSection() {
  return (
    <Section id="extra-projects">
      <Reveal>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Additional Projects</h2>
          <p className="text-muted-foreground">
            Projects from academic work, research, and private repositories that showcase 
            additional technical skills and problem-solving capabilities.
          </p>
        </div>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extraProjects.map((project, index) => (
          <StaggerItem key={project.id}>
            <Card className="h-full card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-2">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
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
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}