import type { LinkType } from '@/types'

export type GuidePricingType = {
  title: string
  programs: number
  exercises: number
  price: number
  features: string[]
  image: string
  link?: LinkType
}

export type SocialMediaPhotoType = {
  likes: number
  comments: number
  image: string
  link?: LinkType
}

export type TestimonialType = {
  name: string
  image: string
  comment: string
}
