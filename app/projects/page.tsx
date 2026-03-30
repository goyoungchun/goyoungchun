import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { ProjectGrid } from '@/components/projects/project-grid'
import { PageHero } from '@/components/shared/page-hero'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Products and experiments under the studio."
        description="Each project has its own detail page and can be connected to a product-specific privacy policy page."
      />

      <section className="pb-8">
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </section>

      <SiteFooter />
    </main>
  )
}
