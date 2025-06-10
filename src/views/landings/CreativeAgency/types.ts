import type { ImageType, LinkType } from '@/types'

export type ClientType = {
  image: ImageType
  name?: string
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

export type ProjectType = {
  title: string
  image: string
  category: string
  year: number
  link?: LinkType
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
export type ServiceType = {
  image: string
  title: string
  description: string
}


export type IndustryType = {
  image: string
  title: string
  description: string
  key: string
}
