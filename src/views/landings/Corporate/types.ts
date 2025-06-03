import type { DateType, ImageType, LinkType } from '@/types'

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

export type ServiceType = {
  icon: string
  image: string
  title: string
  description: string
  link?: LinkType
}

export type FAQType = {
  title: string
  description: string
}

export type PartnerType = {
  image: ImageType
  name?: string
}

export type MemberType = {
  image: string
  name: string
  designation: string
  socialMedia: {
    icon?: string
    name: string
    link?: LinkType
  }[]
}

export type BlogType = {
  publishedOn: DateType
  title: string
  description: string
  category: string
  link?: LinkType
}
