import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizes = {
    default: 'max-w-6xl',
    sm: 'max-w-4xl',
    lg: 'max-w-7xl',
  }

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      <Container>{children}</Container>
    </section>
  )
}