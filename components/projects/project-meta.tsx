import { Container } from '@/components/layout/container'
import { Badge } from '@/components/shared/badge'
import type { Project } from '@/types/project'

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
          <h2 className="text-lg font-semibold">Project Details</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Status: {project.status}</Badge>
            <Badge>Category: {project.category}</Badge>
            {project.platforms.map((platform) => <Badge key={platform}>Platform: {platform}</Badge>)}
          </div>
        </div>
      </Container>
    </section>
  )
}
