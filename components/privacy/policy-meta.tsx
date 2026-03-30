import { Container } from '@/components/layout/container'
import type { PrivacyPolicy } from '@/types/policy'

export function PolicyMeta({ policy }: { policy: PrivacyPolicy }) {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-3xl border border-border bg-surface p-6 text-sm text-muted">
          <p>Product: {policy.productName}</p>
          <p className="mt-2">Effective date: {policy.effectiveDate}</p>
          <p className="mt-2">Contact: {policy.contactEmail}</p>
        </div>
      </Container>
    </section>
  )
}
