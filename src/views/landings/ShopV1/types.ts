import type { LinkType } from '@/types'

export type BlogType = {
  image: string
  title: string
  caption: string
  link?: LinkType
}

export type FeatureType = {
  icon: string
  title: string
  description: string
}
