import type { ImageType } from '@/types'

export type RatingType = {
  stars: number
  quote: string
  brand: string
  image: ImageType
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

export type IndustryType = {
  label: string
  image: string
  title: string
  description: string
  bgColor: string
}
