import type { ImageType } from '@/types'

export type ServiceType = {
  title: string
  image: string
}

export type SkillCardType = {
  image: ImageType
  description: string
  canFlip?: boolean
}

export type PartnerType = {
  image: ImageType
  name?: string
}
