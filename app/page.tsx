import { PageTransition } from '@/components/motion/PageTransition'
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ExperiencePreview />
      <FeaturedProjects />
      <ContactCTA />
    </PageTransition>
  )
}