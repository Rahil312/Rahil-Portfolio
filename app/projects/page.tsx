import { Metadata } from 'next'
import { PageTransition } from '@/components/motion/PageTransition'
import { FeaturedProjectsSection } from '@/components/projects/FeaturedProjectsSection'
import { AllProjectsSection } from '@/components/projects/AllProjectsSection'
import { ExtraProjectsSection } from '@/components/projects/ExtraProjectsSection'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects including AI/ML systems, full-stack applications, and open-source contributions.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-16">
        <FeaturedProjectsSection />
        <AllProjectsSection />
        <ExtraProjectsSection />
      </div>
    </PageTransition>
  )
}