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
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return buildMetadata({ title: 'Project Not Found', description: 'The requested project could not be found.' })
  }

  return buildMetadata({
    title: `${project.name} — Personal Product Studio`,
    description: project.summary,
  })
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const policy = getPolicyBySlug(project.privacySlug)
  const relatedProjects = getRelatedProjects(project.slug)

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />

      <section className="py-8 md:py-10">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8">
            <FeatureList title="Key Features" items={project.features} />
          </div>
          <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8">
            <FeatureList title="Who it's for" items={project.audience} />
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-10">
        <Container>
          <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8">
            <SectionHeading
              title="Policy and Support"
              description="Use these links as the operational foundation for app listing, trust, and support communication."
            />
            <div className="flex flex-wrap gap-3">
              {policy ? <ButtonLink href={`/privacy/${policy.slug}`}>View Privacy Policy</ButtonLink> : null}
              <ButtonLink href="/contact" variant="secondary">
                Contact Support
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="py-8">
          <Container>
            <SectionHeading title="Related Projects" description="Additional examples within the same studio structure." />
            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
                  <div className="mt-5">
                    <ButtonLink href={`/projects/${item.slug}`} variant="secondary">
                      View Project
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  )
}
