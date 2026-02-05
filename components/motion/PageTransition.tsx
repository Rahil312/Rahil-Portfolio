'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useMotion, fadeIn, easeOut } from './MotionProvider'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const { shouldReduceMotion } = useMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      transition={{
        duration: 0.3,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}