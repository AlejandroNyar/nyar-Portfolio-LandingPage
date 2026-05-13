import type { Skill } from '@/types/skill'

export const skills: Skill[] = [
  // Frontend Core
  { name: 'TypeScript', group: 'frontend', level: 'expert', years: 4 },
  { name: 'JavaScript', group: 'frontend', level: 'expert', years: 6 },
  { name: 'HTML / CSS', group: 'frontend', level: 'expert', years: 6 },
  { name: 'React', group: 'frontend', level: 'advanced', years: 3 },

  // Frameworks
  { name: 'Angular', group: 'frameworks', level: 'expert', years: 4 },
  { name: 'Next.js', group: 'frameworks', level: 'advanced', years: 1 },
  { name: 'RxJS', group: 'frameworks', level: 'advanced', years: 4 },

  // Styling
  { name: 'Tailwind CSS', group: 'styling', level: 'advanced', years: 2 },
  { name: 'SCSS / Sass', group: 'styling', level: 'expert', years: 5 },
  { name: 'Framer Motion', group: 'styling', level: 'intermediate', years: 1 },

  // Tooling
  { name: 'Git', group: 'tooling', level: 'advanced', years: 5 },
  { name: 'Webpack / Vite', group: 'tooling', level: 'advanced', years: 3 },
  { name: 'REST APIs', group: 'tooling', level: 'advanced', years: 5 },
  { name: 'Figma', group: 'tooling', level: 'intermediate', years: 2 },

  // Currently Learning
  { name: 'Node.js', group: 'learning', level: 'learning' },
  { name: 'Supabase', group: 'learning', level: 'learning' },
  { name: 'Three.js', group: 'learning', level: 'learning' },
]

export const skillGroupLabels: Record<Skill['group'], string> = {
  frontend: 'Frontend Core',
  frameworks: 'Frameworks',
  styling: 'Styling',
  tooling: 'Tooling',
  learning: 'Currently Learning',
}

export const skillLevelLabels: Record<Skill['level'], string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  intermediate: 'Intermediate',
  learning: 'Learning',
}
