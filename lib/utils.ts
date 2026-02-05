import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateRange(start: Date | string, end?: Date | string | null): string {
  const startFormatted = formatDate(start)
  if (!end || end === 'Present') return `${startFormatted} - Present`
  return `${startFormatted} - ${formatDate(end)}`
}