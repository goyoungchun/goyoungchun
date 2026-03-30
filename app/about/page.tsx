import { Container } from '@/components/layout/container'
import { SiteFooter } from '@/components/layout/site-footer'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeading } from '@/components/shared/section-heading'

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="An independent studio for calm, useful digital products." description="This studio focuses on apps that help people reflect, organize their thoughts, and build better everyday routines through simpler software." />
      <section className="pb-8"><Container><SectionHeading title="What this studio is building" description="The current direction centers on private journaling, Korean-first AI interaction, and products that feel lightweight enough to return to every day." /><div className="max-w-prose space-y-4 text-base leading-7 text-muted"><p>The studio is currently building around a simple idea: people often want to keep a diary, but the blank page is harder to start than the desire to reflect.</p><p>Instead of making users structure everything alone, the product direction combines short AI-guided conversation, editable diary output, and weekly reflection so personal records become easier to create and more valuable to revisit.</p><p>This site works as both a public-facing studio homepage and an operations layer for app pages, privacy policies, and future product expansion.</p></div></Container></section>
      <SiteFooter />
    </main>
  )
}
