import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { ContactBlock } from '@/components/contact/contact-block'
import { LinkCard } from '@/components/shared/link-card'
import { PageHero } from '@/components/shared/page-hero'

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="문의 및 지원 안내" description="제품 문의, 개인정보 관련 문의, 기타 운영 문의는 이 페이지를 통해 확인하실 수 있습니다." />
      <section className="pb-8"><Container><ContactBlock /><div className="mt-6 grid gap-6 md:grid-cols-2"><LinkCard href="/projects/diario" title="디아리오 프로젝트 보기" description="디아리오 : AI 일기의 소개와 주요 기능을 확인할 수 있습니다." /><LinkCard href="/privacy/diario" title="디아리오 정책 보기" description="디아리오 : AI 일기의 개인정보처리방침을 확인할 수 있습니다." /></div></Container></section>
      <SiteFooter />
    </main>
  )
}
