import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { ProjectGrid } from '@/components/projects/project-grid'
import { PageHero } from '@/components/shared/page-hero'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const projects = getProjects()
  return (
    <main>
      <PageHero eyebrow="Projects" title="이 스튜디오에서 만들고 있는 프로젝트" description="각 프로젝트는 개별 상세 페이지를 가지며, 제품별 개인정보처리방침과 연결될 수 있도록 구성되어 있습니다." />
      <section className="pb-8"><Container><ProjectGrid projects={projects} /></Container></section>
      <SiteFooter />
    </main>
  )
}
