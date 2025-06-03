import type { ImageType } from '@/types'
import type { ColorVariant } from 'bootstrap-vue-next'

export type StatType = {
  stat: string
  title: string
  variant: string
}

export type BrandType = {
  image: ImageType
  name?: string
}

export type AuthorType = {
  image: string
  name: string
  occupation?: string
}

export type TestimonialType = {
  author: AuthorType
  comment: string
  variant: ColorVariant
}

export type FaqType = {
  question: string
  answer: string
}

export type FeatureSliderType = {
  title: string
  description: string
}
