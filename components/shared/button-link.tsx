import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2.5 text-sm font-medium transition duration-200',
        variant === 'primary'
          ? 'bg-foreground text-background shadow-sm hover:-translate-y-0.5 hover:opacity-95'
          : 'border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:bg-accentSoft',
      )}
    >
      {children}
    </Link>
  )
}
