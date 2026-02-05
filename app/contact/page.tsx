import { Metadata } from 'next'
import { PageTransition } from '@/components/motion/PageTransition'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rahil Shukla for opportunities, collaborations, or just to connect.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  )
}