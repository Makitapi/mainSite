import type { LinkType } from '@/types'

export type ApproachType = {
  number: string
  title: string
  description: string
}

export type ServiceType = {
  id: number
  title: string
  icon: any
  content: string
  link?: LinkType
}

export type AuthorType = {
  image?: string
  name: string
  designation: string
}

export type TestimonialType = {
  title: string
  content: string
  author: AuthorType
}
