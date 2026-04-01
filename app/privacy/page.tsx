import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PolicyList } from '@/components/privacy/policy-list'
import { PageHero } from '@/components/shared/page-hero'
import { getPolicies } from '@/lib/policies'

export default function PrivacyPage() {
  const policies = getPolicies()
  return (
    <main>
      <PageHero eyebrow="Privacy" title="개인정보처리방침 및 기본 운영 정책" description="GOYOUNGCHUN — Personal Product Studio에서 제공하거나 준비 중인 디지털 제품에 공통으로 적용되는 기본 개인정보 처리 원칙과 운영 기준을 안내합니다." />
      <section className="pb-8"><Container><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>이 사이트와 여기서 소개되는 디지털 제품은 서비스 제공에 필요한 범위 안에서만 개인정보를 수집하거나 처리하는 것을 원칙으로 합니다. 수집 또는 처리되는 정보의 종류와 범위는 제품의 기능, 로그인 방식, 저장 방식, 외부 서비스 연동 여부에 따라 달라질 수 있습니다.</p><p>각 제품은 필요에 따라 개별 개인정보처리방침을 가질 수 있으며, 특정 제품에 별도 정책이 존재하는 경우 해당 제품의 개별 정책이 우선 적용됩니다. 이 페이지는 제품 전반에 공통으로 적용되는 기본 원칙과 운영 기준을 설명하는 범용 정책 페이지입니다.</p><p>운영자는 서비스 제공, 계정 관리, 보안 유지, 오류 대응, 문의 처리, 법적 의무 이행을 위해 필요한 범위 안에서만 정보를 처리하며, 목적 달성 후에는 지체 없이 삭제 또는 파기를 검토합니다. 다만 관계 법령, 보안 대응, 분쟁 처리, 백업 등의 사유가 있는 경우에는 일정 기간 보관될 수 있습니다.</p><p>제품 운영 과정에서는 인증, 호스팅, 분석, 오류 추적, 푸시 알림, 결제, AI 처리 등 외부 서비스를 사용할 수 있으며, 개별 제품의 실제 외부 서비스 사용 내역은 해당 제품의 개별 정책 페이지에 반영됩니다. 이용자는 자신의 개인정보와 기록 데이터에 대해 문의, 정정, 삭제 요청을 할 수 있으며 관련 문의는 운영 이메일을 통해 접수할 수 있습니다.</p></div></div><div className="mt-8"><PolicyList policies={policies} /></div></Container></section>
      <SiteFooter />
    </main>
  )
}
