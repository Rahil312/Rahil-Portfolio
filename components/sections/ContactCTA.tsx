import Link from 'next/link'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Layout'
import { Reveal } from '@/components/motion/Reveal'

export function ContactCTA() {
  return (
    <Section className="bg-muted/30">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            or just connecting with fellow developers and engineers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com/in/rahil-shukla" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}