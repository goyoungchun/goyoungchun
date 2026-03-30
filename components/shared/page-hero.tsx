import { ReactNode } from 'react'
import { Container } from '@/components/layout/container'

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-[2rem] border border-border/70 bg-white/80 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] backdrop-blur-sm md:px-10 md:py-14">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-full border border-border bg-accentSoft px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted md:max-w-2xl">{description}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
