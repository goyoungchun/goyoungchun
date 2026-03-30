import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { siteConfig } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/80">
      <Container className="flex flex-col gap-6 py-12 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-medium text-foreground">{siteConfig.siteName}</p>
          <p className="mt-2 leading-6">Independent products, placeholder content, and a reusable structure for future app pages and policy documents.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="transition hover:text-foreground">Projects</Link>
          <Link href="/privacy" className="transition hover:text-foreground">Privacy</Link>
          <Link href="/contact" className="transition hover:text-foreground">Contact</Link>
        </div>
      </Container>
    </footer>
  )
}
