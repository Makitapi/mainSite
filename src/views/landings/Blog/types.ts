import type { LinkType } from '@/types'

export type FeaturePostType = {
  title: string
  description: string
  share: number
  comment: number
  time: string
  category: string
  image: string
  link?: LinkType
}

export type AuthorType = {
  image: string
  name: string
  designation?: string
}

export type ArticleType = {
  title: string
  description?: string
  share?: number
  comment?: number
  time: string
  author?: AuthorType
  category?: string
  link?: LinkType
  image?: string
}

export type LatestPost = {
  title: string
  description: string
  time: string
  category: string
  link?: LinkType
}
