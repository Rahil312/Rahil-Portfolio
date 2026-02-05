import { Metadata } from 'next'
import { PageTransition } from '@/components/motion/PageTransition'
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline'
import { EducationSection } from '@/components/experience/EducationSection'
import { SkillsSection } from '@/components/experience/SkillsSection'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience, education, and technical skills in software engineering, AI/ML, and full-stack development.',
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-16">
        <ExperienceTimeline />
        <EducationSection />
        <SkillsSection />
      </div>
    </PageTransition>
  )
}