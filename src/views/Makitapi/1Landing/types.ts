import type { ImageType, LinkType } from '@/types'

export type CaseStudyType = {
  image: string
  title: string
  description: string
  highlights: {
    value: string
    label: string
  }[]
}

export type ClientType = {
  image: ImageType
  name?: string
}

interface CompanyImageType extends ImageType {
  width: number
  imageSwap: string
}

type CompanyType = {
  name?: string
  image: CompanyImageType
}

export type AuthorType = {
  image: string
  name: string
  designation: string
  company: CompanyType
}

export type TestimonialType = {
  author: AuthorType
  comment: string
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
