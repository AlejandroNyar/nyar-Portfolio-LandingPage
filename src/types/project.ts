export type ProjectStatus = 'live' | 'in_progress' | 'nda' | 'coming_soon'
export type ProjectCategory = 'web_app' | 'landing' | 'ecommerce' | 'audit'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  status: ProjectStatus
  tags: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  featured?: boolean
}
