import { Container } from '@/components/layout/container'
import type { PrivacyPolicy } from '@/types/policy'

export function PolicyMeta({ policy }: { policy: PrivacyPolicy }) {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] text-sm text-muted">
          <p>Product: {policy.productName}</p>
          <p className="mt-2">Effective date: {policy.effectiveDate}</p>
          <p className="mt-2">Contact: {policy.contactEmail}</p>
        </div>
      </Container>
    </section>
  )
}
