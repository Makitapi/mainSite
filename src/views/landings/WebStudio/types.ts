import type { ImageType, LinkType } from '@/types'

export type AwardType = {
  image: ImageType
  name?: string
}

export type ServiceType = {
  icon: string
  title: string
  description: string
  link?: LinkType
}

export type IndustryType = {
  image: string
  title: string
  description: string
  key: string
}

export type SkillCardType = {
  image: ImageType
  description: string
  canFlip?: boolean
}
