'use client'

import { useState } from 'react'
import { Download, FileText, ExternalLink, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Section } from '@/components/ui/Layout'
import { Reveal } from '@/components/motion/Reveal'

export function ResumeViewer() {
  const [showPreview, setShowPreview] = useState(true)
  const resumeUrl = '/Rahil_Resume_1.pdf'

  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Rahil_Shukla_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewInNewTab = () => {
    window.open(resumeUrl, '_blank')
  }

  return (
    <Section className="min-h-screen py-16">
      <Reveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete resume highlighting my experience in AI/ML engineering, 
            full-stack development, and software engineering.
          </p>
        </div>
      </Reveal>

      {/* Action Buttons */}
      <Reveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg" onClick={handleDownload}>
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
          
          <Button size="lg" variant="outline" onClick={handleViewInNewTab}>
            <ExternalLink className="mr-2 h-5 w-5" />
            Open in New Tab
          </Button>

          <Button 
            size="lg" 
            variant="ghost" 
            onClick={() => setShowPreview(!showPreview)}
          >
            {showPreview ? (
              <>
                <EyeOff className="mr-2 h-5 w-5" />
                Hide Preview
              </>
            ) : (
              <>
                <Eye className="mr-2 h-5 w-5" />
                Show Preview
              </>
            )}
          </Button>
        </div>
      </Reveal>

      {/* Resume Preview */}
      {showPreview && (
        <Reveal delay={0.2}>
          <Card className="mx-auto max-w-4xl">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Resume Preview</span>
              </CardTitle>
              <CardDescription>
                Interactive PDF viewer - scroll to view the complete document
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                <iframe
                  src={resumeUrl}
                  className="w-full h-[800px] md:h-[1000px] lg:h-[1200px]"
                  title="Rahil Shukla Resume"
                />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      )}

      {/* Alternative Download Options */}
      <Reveal delay={0.3}>
        <div className="mt-12 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                This resume is regularly updated to reflect my latest experience and skills. 
                Last updated: February 2026
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="outline" asChild>
                  <a href="/experience">
                    <FileText className="mr-2 h-4 w-4" />
                    View Experience Details
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="/projects">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Explore Projects
                  </a>
                </Button>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Having trouble viewing the PDF? Try downloading it directly or 
                  <Button variant="link" onClick={handleViewInNewTab} className="p-0 h-auto ml-1">
                    opening in a new tab
                  </Button>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </Section>
  )
}