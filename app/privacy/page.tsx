import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PolicyList } from '@/components/privacy/policy-list'
import { PageHero } from '@/components/shared/page-hero'
import { getPolicies } from '@/lib/policies'

export default function PrivacyPage() {
  const policies = getPolicies()
  return (
    <main>
      <PageHero eyebrow="Privacy" title="개인정보처리방침 및 운영 정책" description="이 페이지는 GOYOUNGCHUN — Personal Product Studio에서 운영하거나 준비 중인 디지털 제품의 개인정보처리방침과 정책 문서를 안내하는 허브입니다." />
      <section className="pb-8"><Container><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>구글 개발자 계정, 앱스토어 제출, 사용자 문의 대응을 위해 운영자 수준의 정책 허브를 제공하며, 각 제품은 필요 시 개별 상세 정책 페이지로 연결됩니다.</p><p>현재는 디아리오 : AI 일기를 중심으로 정책 문서를 제공하고 있으며, 향후 제품이 추가되면 동일한 구조 안에서 개별 정책을 계속 확장할 수 있습니다.</p><p>범용적인 운영 정보와 제품별 상세 정책을 함께 제공하는 것은 개발자 계정 등록과 앱 배포 과정에서 신뢰성과 일관성을 확보하는 데 도움이 됩니다.</p></div></div><div className="mt-8"><PolicyList policies={policies} /></div></Container></section>
      <SiteFooter />
    </main>
  )
}
