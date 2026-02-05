import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    // Handle YYYY-MM format specifically
    const [year, month] = date.split('-')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = parseInt(month) - 1 // Convert to 0-indexed
    return `${monthNames[monthIndex]} ${year}`
  }
  
  const d = date
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