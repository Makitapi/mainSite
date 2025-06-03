import type { LinkType } from '@/types'

export type FeatureType = {
  name: string
  description: string
  icon: string
  image: string
}

export type TrainerType = {
  image: string
  name: string
  specialistIn: string
  link?: LinkType
}

export type PricingType = {
  title: string
  price: number
  perClassPrice: number
  validFor: string
}

export type ClassType = {
  name: string
  description: string
  image: string
  services: {
    icon: string
    title: string
    description: string
  }[]
  link?: LinkType
}

export type InitialEventType = {
  title: string
  start: string
  end: string
  classNames: string[]
}
