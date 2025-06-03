import type { RouteParamsRaw } from 'vue-router'

export type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type ImageType = {
  light: string
  dark?: string
}

export type DateType = {
  date?: number
  month?: string | number
  year?: number
  hours?: number
  minute?: number
}
