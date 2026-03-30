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
        actions={
          <>
            <ButtonLink href="/projects">View Projects</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </>
        }
      />

      <section className="pb-10 md:pb-14">
        <Container>
          <SectionHeading
            title="Featured Projects"
            description="A small set of example products used to shape the studio structure and future expansion model."
          />
          <ProjectGrid projects={featuredProjects} />
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container>
          <div className="rounded-[2rem] border border-border/80 bg-white/80 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] md:p-8">
            <SectionHeading
              title="Studio Overview"
              description="This site is designed to present independently built apps in a calm, credible, and reusable format."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <LinkCard
                href="/about"
                title="About the Studio"
                description="Learn how the site frames independent digital products with a clean product-first structure."
              />
              <LinkCard
                href="/privacy"
                title="Privacy Policies"
                description="Browse product-specific privacy documents that can be linked directly from app listings."
              />
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  )
}
