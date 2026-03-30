import { projects } from '@/content/projects'

export function getProjects() {
  return projects
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string) {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, 2)
}
