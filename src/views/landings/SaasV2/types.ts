import type { LinkType } from '@/types'

export type AuthorType = {
  image: string
  name: string
  designation: string
}

export type TestimonialType = {
  author: AuthorType
  comment: string
}

export type ResourceType = {
  title: string
  description: string
  share: number
  comment: number
  time: string
  image: string
  category?: string
  link?: LinkType
}
