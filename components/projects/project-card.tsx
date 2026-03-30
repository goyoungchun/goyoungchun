import Link from 'next/link'
import { Badge } from '@/components/shared/badge'
import type { Project } from '@/types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight transition group-hover:text-accent">{project.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{project.tagline}</p>
        </div>
        <Badge>{project.status}</Badge>
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
        <Badge>{project.category}</Badge>
        {project.platforms.map((platform) => <Badge key={platform}>{platform}</Badge>)}
      </div>
      <div className="mt-8 text-sm font-medium text-foreground/80 transition group-hover:text-accent">View project →</div>
    </Link>
  )
}
