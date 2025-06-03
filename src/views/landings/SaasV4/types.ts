import type { ImageType } from '@/types'

export type CategoryType = {
  image: string
  title: string
  subTitle: string
}

type CompanyType = {
  name?: string
  image: ImageType
}

export type AuthorType = {
  image?: string
  name: string
  designation: string
  company: CompanyType
}

export type TestimonialType = {
  author: AuthorType
  comment: string
}
