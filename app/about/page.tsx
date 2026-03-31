import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="뭐든 해보며, 아이디어를 현실로 만드는 사람" description="생활 속에서 바로 쓰일 수 있는 앱을 만들고, 기술이 고도화되는 시대에 생기는 공백을 제품으로 메워갑니다." />
      <section className="pb-8"><Container><SectionHeading title="What this studio is building" description="생활 밀착형 디지털 제품을 만들며, 사용자 경험과 보안, 신뢰를 가장 중요한 기준으로 삼습니다." /><div className="max-w-prose space-y-4 text-base leading-7 text-muted"><p>이 스튜디오는 일상 속에서 떠오르는 아이디어를 실제로 구현하고, 그 결과물이 사람들의 생활 안에서 자연스럽게 쓰이도록 만드는 것을 목표로 합니다.</p><p>기술이 빠르게 발전하는 시대일수록 오히려 채워지지 않은 공백이 생긴다고 생각합니다. 저는 그 공백을 발견하고, 작지만 실제로 쓸 수 있는 제품으로 연결하는 작업에 집중합니다.</p><p>제품을 만들 때는 사용자 경험을 가장 먼저 생각하고, 그 위에 보안과 높은 신뢰도를 단단하게 쌓는 방식을 지향합니다.</p></div></Container></section>
      <SiteFooter />
    </main>
  )
}
