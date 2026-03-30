import type { Project } from '@/types/project'
import { PageHero } from '@/components/shared/page-hero'
import { Badge } from '@/components/shared/badge'

export function ProjectHero({ project }: { project: Project }) {
  return (
    <PageHero
      eyebrow="Project"
      title={project.name}
      description={project.description}
      actions={
        <>
          <Badge>{project.status}</Badge>
          <Badge>{project.category}</Badge>
          {project.platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
        </>
      }
    />
  )
}
