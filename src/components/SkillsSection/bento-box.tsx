import { ReactNode } from 'react'

interface BentoBoxProps {
  children: ReactNode
  className?: string
}

export function BentoBox({ children, className = '' }: BentoBoxProps) {
  return (
    <div className={`bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 rounded-xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

