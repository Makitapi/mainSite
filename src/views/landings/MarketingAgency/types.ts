import type { DateType, ImageType, LinkType } from '@/types'

export type CaseStudyType = {
  image: string
  title: string
  description: string
  highlights: {
    value: string
    label: string
  }[]
}

export type AuthorType = {
  image: string
  name: string
  designation?: string
}

type ResourceCategoryType = 'inspiration' | 'other'

export type ResourceType = {
  publishedOn: DateType
  category: ResourceCategoryType
  title: string
  description: string
  author: AuthorType
}

export type MemberType = {
  image: string
  name: string
  designation: string
  socialMedia: {
    icon: string
    link?: LinkType
  }[]
}

export type ToolType = {
  image: ImageType
  alt: string
  delay: number
}

interface CompanyImageType extends ImageType {
  width: number
}

export type CompanyType = {
  image: CompanyImageType
  name?: string
}

export type BenefitType = {
  title: string
  description: string
  icon: string
  svgPath: string
}

export type TestimonialType = {
  comment: string
  author: AuthorType
}
