import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Layout'
import { Button } from '@/components/ui/Button'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container>
        <div className="py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Rahil Shukla</h3>
              <p className="text-sm text-muted-foreground">
                Applied AI / Full-Stack Engineer building real-time LLM systems,
                retrieval, and scalable backend services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="https://github.com/Rahil312" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://linkedin.com/in/rahil-shukla" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/Rahil312" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://linkedin.com/in/rahil-shukla" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rahil Shukla. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
              Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}