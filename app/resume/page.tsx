import { Metadata } from 'next'
import { PageTransition } from '@/components/motion/PageTransition'
import { ResumeViewer } from '@/components/resume/ResumeViewer'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download and view Rahil Shukla\'s resume showcasing experience in AI/ML, full-stack development, and software engineering.',
}

export default function ResumePage() {
  return (
    <PageTransition>
      <ResumeViewer />
    </PageTransition>
  )
}