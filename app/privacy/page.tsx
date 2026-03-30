import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PolicyList } from '@/components/privacy/policy-list'
import { PageHero } from '@/components/shared/page-hero'
import { getPolicies } from '@/lib/policies'

export default function PrivacyPage() {
  const policies = getPolicies()

  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policies for products published under this studio."
        description="Select a product below to view its product-specific privacy policy and contact information."
      />

      <section className="pb-8">
        <Container>
          <PolicyList policies={policies} />
        </Container>
      </section>

      <SiteFooter />
    </main>
  )
}
