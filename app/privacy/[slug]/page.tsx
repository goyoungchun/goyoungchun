import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PolicyMeta } from '@/components/privacy/policy-meta'
import { PolicySection } from '@/components/privacy/policy-section'
import { ButtonLink } from '@/components/shared/button-link'
import { PageHero } from '@/components/shared/page-hero'
import { buildMetadata } from '@/lib/metadata'
import { getPolicies, getPolicyBySlug } from '@/lib/policies'

export function generateStaticParams() { return getPolicies().map((policy) => ({ slug: policy.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const policy = getPolicyBySlug(slug); if (!policy) return buildMetadata({ title: 'Policy Not Found', description: 'The requested policy could not be found.' }); return buildMetadata({ title: `Privacy Policy — ${policy.productName}`, description: `Privacy policy for ${policy.productName}.` }) }
export default async function PrivacyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const policy = getPolicyBySlug(slug)
  if (!policy) notFound()
  return (
    <main>
      <PageHero eyebrow="Privacy Policy" title={policy.productName} description="This page contains product-specific privacy policy content for the current studio site." />
      <PolicyMeta policy={policy} />
      <section className="py-8 md:py-10"><Container className="max-w-prose"><div className="space-y-6">{policy.sections.map((section: { title: string; body: string; titleEn?: string; bodyEn?: string }) => <PolicySection key={section.title} title={section.title} body={section.body} titleEn={section.titleEn} bodyEn={section.bodyEn} />)}</div><div className="pt-6"><ButtonLink href="/contact" variant="secondary">Contact</ButtonLink></div></Container></section>
      <SiteFooter />
    </main>
  )
}
