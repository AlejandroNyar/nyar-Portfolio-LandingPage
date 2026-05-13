export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'learning'
export type SkillGroup = 'frontend' | 'frameworks' | 'styling' | 'tooling' | 'learning'

export interface Skill {
  name: string
  group: SkillGroup
  level: SkillLevel
  years?: number
  icon?: string
}
