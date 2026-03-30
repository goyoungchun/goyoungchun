import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { ContactBlock } from '@/components/contact/contact-block'
import { LinkCard } from '@/components/shared/link-card'
import { PageHero } from '@/components/shared/page-hero'

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Support, privacy, and product inquiries." description="Use this page as the main contact point for product questions, support requests, or privacy-related communication." />
      <section className="pb-8"><Container><ContactBlock /><div className="mt-6 grid gap-6 md:grid-cols-2"><LinkCard href="/projects" title="Browse Projects" description="View the current list of products and concepts." /><LinkCard href="/privacy" title="Privacy Policies" description="Open the privacy policy hub for all listed products." /></div></Container></section>
      <SiteFooter />
    </main>
  )
}
