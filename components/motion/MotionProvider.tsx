'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { createContext, useContext, ReactNode } from 'react'

interface MotionContextType {
  shouldReduceMotion: boolean
}

const MotionContext = createContext<MotionContextType>({ shouldReduceMotion: false })

export function MotionProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <MotionContext.Provider value={{ shouldReduceMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  return useContext(MotionContext)
}

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Transition presets
export const easeOut = [0.25, 0.46, 0.45, 0.94]
export const easeInOut = [0.4, 0, 0.2, 1]
export const spring = { type: 'spring', damping: 25, stiffness: 300 }