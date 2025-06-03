import type { ImageType, LinkType } from '@/types'

export type PricingType = {
  title: string
  price: number
  description: string
  link?: LinkType
}
export type FaqType = {
  question: string
  answer: string
}

type CompanyImageType = ImageType & {
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
