import { PageTransition } from '@/components/motion/PageTransition'
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { AllProjectsPreview } from '@/components/sections/AllProjectsPreview'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedProjects />
      <ExperiencePreview />
      <AllProjectsPreview />
      <ContactCTA />
    </PageTransition>
  )
}