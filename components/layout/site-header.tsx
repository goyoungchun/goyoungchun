import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { siteConfig } from '@/content/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-foreground/90">
          {siteConfig.siteName}
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted md:gap-3">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 transition hover:bg-surface hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
