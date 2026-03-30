import type { Project } from '@/types/project'
import { ProjectCard } from '@/components/projects/project-card'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
}
