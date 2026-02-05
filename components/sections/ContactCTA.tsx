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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
              <Link href="/contact" className="inline-flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
              <Link href="https://www.linkedin.com/in/rahil-shukla-bb8184204/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
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