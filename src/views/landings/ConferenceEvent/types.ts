import type { ImageType } from '@/types'

export type ChiefGuestType = {
  image: string
  thumbnail: string
  name: string
  designation: string
}

export type TargetAudienceType = {
  type: string
  description: string
  benefits: string[]
}

export type SpeakerType = {
  image: string
  name?: string
  designation?: string
}

export type SponsorType = {
  image: ImageType
  name?: string
  description: string
}

export type ScheduleType = {
  time: string
  topic: string
  description?: string
  speakers?: SpeakerType[]
}

export type AuthorType = {
  image: string
  name: string
}

export type TestimonialType = {
  comment: string
  rating: number
  author: AuthorType
}
