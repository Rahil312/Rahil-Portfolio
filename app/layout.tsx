import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rahilshukla.com'),
  title: {
    default: 'Rahil Shukla - Applied AI & Full-Stack Engineer',
    template: '%s | Rahil Shukla'
  },
  description: 'Applied AI / Full-Stack Engineer building real-time LLM systems, retrieval, and scalable backend services. MCS @ NCSU with experience in Python microservices and GenAI workflows.',
  keywords: ['Rahil Shukla', 'Software Engineer', 'Applied AI', 'Full Stack', 'Machine Learning', 'Python', 'React', 'Node.js'],
  authors: [{ name: 'Rahil Shukla' }],
  creator: 'Rahil Shukla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rahil Shukla - Applied AI & Full-Stack Engineer',
    description: 'Applied AI / Full-Stack Engineer building real-time LLM systems, retrieval, and scalable backend services.',
    siteName: 'Rahil Shukla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahil Shukla - Applied AI & Full-Stack Engineer',
    description: 'Applied AI / Full-Stack Engineer building real-time LLM systems, retrieval, and scalable backend services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <MotionProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  )
}