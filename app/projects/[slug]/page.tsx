import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { FeatureList } from '@/components/projects/feature-list'
import { ProjectHero } from '@/components/projects/project-hero'
import { ProjectMeta } from '@/components/projects/project-meta'
import { ButtonLink } from '@/components/shared/button-link'
import { SectionHeading } from '@/components/shared/section-heading'
import { getPolicyBySlug } from '@/lib/policies'
import { buildMetadata } from '@/lib/metadata'
import { getProjectBySlug, getProjects, getRelatedProjects } from '@/lib/projects'

export function generateStaticParams() { return getProjects().map((project) => ({ slug: project.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProjectBySlug(slug); if (!project) return buildMetadata({ title: 'Project Not Found', description: 'The requested project could not be found.' }); return buildMetadata({ title: `${project.name} — Personal Product Studio`, description: project.summary }) }
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  const policy = getPolicyBySlug(project.privacySlug)
  const relatedProjects = getRelatedProjects(project.slug)
  return (
    <main>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <section className="py-8 md:py-10"><Container><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><SectionHeading title="왜 디아리오인가" description="디아리오는 일기를 쓰고 싶지만 쉽게 시작하지 못했던 사람을 위해 만들어졌습니다." /><div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>기록은 남기고 싶지만 막상 일기를 쓰려고 하면 시간이 부족하거나, 무엇부터 써야 할지 몰라 멈추게 되는 경우가 많습니다.</p><p>디아리오는 바로 그 지점에서 시작합니다. 긴 글을 요구하기보다 대화로 진입하게 하고, 사용자의 말 속 맥락을 정리해 일기 초안으로 연결해주는 방식으로 기록의 부담을 낮춥니다.</p><p>단순히 오늘을 저장하는 것에서 끝나지 않고, 기록이 쌓이면 주간 회고를 통해 한 주를 다시 돌아볼 수 있게 만드는 것이 디아리오가 지향하는 핵심 경험입니다.</p></div></div></Container></section>
      <section className="py-8 md:py-10"><Container className="grid gap-6 lg:grid-cols-2"><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><FeatureList title="핵심 기능" items={project.features} /></div><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><FeatureList title="이런 분께 추천합니다" items={project.audience} /></div></Container></section>
      <section className="py-8 md:py-10"><Container><div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8"><SectionHeading title="정책 및 문의" description="스토어 제출, 신뢰, 지원 대응을 위해 필요한 정보를 바로 확인할 수 있습니다." /><div className="flex flex-wrap gap-3">{policy ? <ButtonLink href={`/privacy/${policy.slug}`}>개인정보처리방침 보기</ButtonLink> : null}<ButtonLink href="/contact" variant="secondary">문의하기</ButtonLink></div></div></Container></section>
      <SiteFooter />
    </main>
  )
}
