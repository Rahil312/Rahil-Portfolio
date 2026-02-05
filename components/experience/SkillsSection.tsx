import { Code, Database, Cloud, Brain, Wrench, Globe } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Go', 'SQL'],
    description: 'Proficient in multiple programming languages for different use cases'
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Vector Embeddings'],
    description: 'Machine learning, deep learning, and data analysis tools'
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'HTML/CSS', 'Tailwind CSS', 'REST APIs'],
    description: 'Modern web technologies and frameworks'
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector Databases', 'Elasticsearch'],
    description: 'Relational and NoSQL databases, vector storage'
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Git', 'Linux'],
    description: 'Cloud platforms, containerization, and deployment'
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['WebRTC', 'WebSockets', 'GraphQL', 'Nginx', 'RabbitMQ', 'Elasticsearch', 'Monitoring'],
    description: 'Specialized tools and technologies for system design'
  }
]

const proficiencyLevels = [
  { name: 'Expert', color: 'bg-green-500', count: 8 },
  { name: 'Proficient', color: 'bg-blue-500', count: 15 },
  { name: 'Familiar', color: 'bg-yellow-500', count: 12 }
]

export function SkillsSection() {
  return (
    <Section>
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, 
            frameworks, tools, and technologies.
          </p>
        </div>
      </Reveal>

      {/* Proficiency Legend */}
      <Reveal delay={0.1}>
        <div className="flex justify-center mb-12">
          <Card className="p-4">
            <div className="flex items-center space-x-6 text-sm">
              <span className="font-medium">Proficiency Levels:</span>
              {proficiencyLevels.map((level) => (
                <div key={level.name} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${level.color}`} />
                  <span>{level.name} ({level.count})</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Reveal>

      {/* Skills Grid */}
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <StaggerItem key={index}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* Additional Skills Note */}
      <Reveal delay={0.4}>
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Continuous Learning:</strong> I'm always exploring new technologies 
              and expanding my skill set. Currently diving deeper into advanced AI/ML architectures, 
              distributed systems, and cloud-native development patterns.
            </p>
          </Card>
        </div>
      </Reveal>
    </Section>
  )
}