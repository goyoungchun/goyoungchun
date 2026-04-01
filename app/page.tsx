import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { ProjectGrid } from '@/components/projects/project-grid'
import { ButtonLink } from '@/components/shared/button-link'
import { LinkCard } from '@/components/shared/link-card'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'
import { siteConfig } from '@/content/site'
import { getFeaturedProjects } from '@/lib/projects'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <main>
      <PageHero
        eyebrow="Personal Product Studio"
        title={siteConfig.heroTitle}
        description={siteConfig.heroSubtitle}
        actions={<><ButtonLink href="/projects">프로젝트 보기</ButtonLink><ButtonLink href="/privacy" variant="secondary">정책 보기</ButtonLink></>}
      />
      <section className="pb-10 md:pb-14"><Container><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><SectionHeading title="현재 만들고 있는 제품" description="지금은 디아리오를 중심으로, 기록의 허들을 낮추고 회고의 가치를 높이는 경험을 만드는 데 집중하고 있습니다." /><div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>이 사이트는 개인적으로 만들고 운영하는 디지털 제품과 기본 운영 정책, 문의 정보를 함께 정리하는 공간입니다.</p><p>현재 소개되는 대표 제품은 디아리오이며, 사용자가 더 쉽게 기록을 시작하고 쌓인 기록을 다시 돌아볼 수 있도록 돕는 경험을 만드는 데 집중하고 있습니다.</p><p>프로젝트 소개와 정책 문서를 분리해 두어, 제품 정보와 개인정보 처리 기준을 각각 명확하게 확인할 수 있도록 구성했습니다.</p></div><div className="mt-8"><ProjectGrid projects={featuredProjects} /></div></div></Container></section>
      <section className="py-10 md:py-14"><Container><div className="rounded-[2rem] border border-border/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><SectionHeading title="이 스튜디오가 중요하게 생각하는 것" description="생활 속에서 바로 쓸 수 있고, 실제로 도움이 되며, 신뢰할 수 있는 디지털 제품을 만듭니다." /><div className="grid gap-6 md:grid-cols-2"><LinkCard href="/about" title="만드는 방향" description="사용자 경험, 보안, 신뢰를 중심으로 어떤 기준으로 제품을 만들고 있는지 소개합니다." /><LinkCard href="/privacy/diario" title="디아리오 정책 보기" description="디아리오 : AI 일기의 개인정보처리방침과 운영 관련 정보를 확인할 수 있습니다." /></div></div></Container></section>
      <SiteFooter />
    </main>
  )
}
