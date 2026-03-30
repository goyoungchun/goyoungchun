import Link from 'next/link'
import type { PrivacyPolicy } from '@/types/policy'

export function PolicyList({ policies }: { policies: PrivacyPolicy[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {policies.map((policy) => (
        <Link
          key={policy.slug}
          href={`/privacy/${policy.slug}`}
          className="block rounded-3xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold tracking-tight">{policy.productName}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">Privacy policy and contact information.</p>
          <p className="mt-4 text-xs text-muted">Effective date: {policy.effectiveDate}</p>
        </Link>
      ))}
    </div>
  )
}
