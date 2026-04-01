import Link from 'next/link'
import type { PrivacyPolicy } from '@/types/policy'

export function PolicyList({ policies }: { policies: PrivacyPolicy[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {policies.map((policy) => (
        <Link key={policy.slug} href={`/privacy/${policy.slug}`} className="block rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <h3 className="break-keep text-lg font-semibold tracking-tight">{policy.productName}</h3>
          <p className="mt-3 break-keep text-sm leading-6 text-muted">해당 제품에 적용되는 개별 개인정보처리방침을 확인할 수 있습니다.</p>
          <p className="mt-4 text-xs text-muted">시행일: {policy.effectiveDate}</p>
        </Link>
      ))}
    </div>
  )
}
