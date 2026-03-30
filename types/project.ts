export type ProjectStatus = 'live' | 'beta' | 'in-progress' | 'archived'

export type Project = {
  slug: string
  name: string
  tagline: string
  summary: string
  description: string
  status: ProjectStatus
  category: string
  platforms: string[]
  featured: boolean
  privacySlug: string
  features: string[]
  audience: string[]
  coverImage?: string
  screenshots?: string[]
  supportEmail?: string
  externalLinks?: {
    appStore?: string
    playStore?: string
    website?: string
  }
}
