import type { ImageType, LinkType } from '@/types'

export type StatsType = {
  title: string
  description: string
}

export type ClientType = {
  image: ImageType
  name?: string
}

export type IndustryType = {
  image: string
  title: string
  description: string[]
}

export type AuthorType = {
  image: string
  name: string
  designation: string
}

export type TestimonialType = {
  comment: string
  author: AuthorType
}

export type TestimonialsSliderType = {
  slides: TestimonialType[]
}

export type StepType = {
  title: string
  description: string
  delay: number
}

export type ServiceType = {
  icon: string
  title: string
  description: string
  link?: LinkType
}
