import type { LinkType } from '@/types'

export type StepType = {
  stepNumber: string
  stepTitle: string
  stepDescription: string
}

export type ServiceType = {
  description: string
  title: string
  icon: string
  link?: LinkType
}

export type MemberType = {
  name: string
  role: string
  image: string
  socialMedia: string[]
}

export type MissionType = {
  title: string
  content: string
  icon: any
}

export type GalleryImageType = {
  image: string
  width: number
}

export type SwiperType = {
  bindedTo: string
  content: string
}

export type AuthorType = {
  image: string
  name: string
  role: string
}

export type TestimonialType = {
  author: AuthorType
  comment: string
}
