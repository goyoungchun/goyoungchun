import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'

export default function NotFound() {
  return (
    <main>
      <section className="py-24"><Container><div className="max-w-prose"><p className="text-sm font-medium text-muted">404</p><h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found.</h1><p className="mt-6 text-lg leading-8 text-muted">The page you requested does not exist in this studio structure.</p><Link href="/" className="mt-8 inline-block text-sm font-medium text-accent">Return home</Link></div></Container></section>
      <SiteFooter />
    </main>
  )
}
