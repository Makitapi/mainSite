import time from '@/assets/img/services/v3/icons/time-white.svg'
import cog from '@/assets/img/services/v3/icons/cog-white.svg'
import monitor from '@/assets/img/services/v3/icons/monitor-white.svg'
import sizeWhite from '@/assets/img/services/v3/icons/size-white.svg'

import auchan from '@/assets/img/brands/auchan.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import starcraftLight from '@/assets/img/brands/starcraft-light.svg'
import starcraftDark from '@/assets/img/brands/starcraft-dark.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import pumaLight from '@/assets/img/brands/puma-light.svg'
import pumaDark from '@/assets/img/brands/puma-dark.svg'
import airbnb from '@/assets/img/brands/airbnb.svg'
import philips from '@/assets/img/brands/philips.svg'

import figma from '@/assets/img/landing/web-studio/skills/figma.svg'
import foster from '@/assets/img/brands/foster.svg'
import css3 from '@/assets/img/landing/web-studio/skills/css3.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import bootstrap from '@/assets/img/landing/web-studio/skills/bootstrap.svg'
import alpine from '@/assets/img/brands/alpine.svg'
import python from '@/assets/img/landing/web-studio/skills/python.svg'
import deloitteDark from '@/assets/img/brands/deloitte-dark.svg'
import deloitteLight from '@/assets/img/brands/deloitte-light.svg'

import type { PartnerType, ServiceType, SkillCardType } from '@/views/pages/services/ServicesV3/types'

export const services: ServiceType[] = [
  {
    title: 'Individual approach',
    image: time
  },
  {
    title: 'Integrated analytics',
    image: cog
  },
  {
    title: 'Step by step work',
    image: monitor
  },
  {
    title: 'Full range of services',
    image: sizeWhite
  }
]

export const skills: SkillCardType[] = [
  {
    image: { light: figma, dark: figma },
    description: `Figma is convenient online service for interface development and prototyping with the ability to work together in real time.`,
    canFlip: true
  },
  {
    image: { light: foster, dark: foster },
    description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui. Sed condimentum felis at pretium."`
  },
  {
    image: { light: css3, dark: css3 },
    description: `Cascading Style Sheets Level 3 is the iteration of the CSS standard used in the styling and formatting of Web pages.`,
    canFlip: true
  },
  {
    image: { light: championLight, dark: championDark },
    description: `"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget, aliquet ut odio. Curabitur in vestibulum tellus."`
  },
  {
    image: { light: bootstrap, dark: bootstrap },
    description: `Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components.`,
    canFlip: true
  },
  {
    image: { light: alpine, dark: alpine },
    description: `"Nulla facilisi. Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem. Proin feugiat egestas dolor."`
  },
  {
    image: { light: python, dark: python },
    description: `Python is a programming language that lets you work quickly and integrate systems more effectively.`,
    canFlip: true
  },
  {
    image: { light: deloitteLight, dark: deloitteDark },
    description: `Suspendisse potenti. Nulla vel varius urna. Donec at libero ipsum. Nullam scelerisque tempus malesuada. Donec vehicula odio est, at faucibus purus sollicitudin ut. Fusce mollis ultrices ex sed pellentesque velit euismod.`
  }
]

export const partners: PartnerType[] = [
  {
    image: { light: auchan, dark: auchan },
    name: 'Auchan'
  },
  {
    image: { light: suzuki, dark: suzuki },
    name: 'Suzuki'
  },
  {
    image: { light: championLight, dark: championDark },
    name: 'Champion'
  },
  {
    image: { light: starcraftLight, dark: starcraftDark },
    name: 'Starcraft'
  },
  {
    image: { light: klinos, dark: klinos },
    name: 'Klinos'
  },
  {
    image: { light: pumaLight, dark: pumaDark },
    name: 'Puma'
  },
  {
    image: { light: airbnb, dark: airbnb },
    name: 'Airbnb'
  },
  {
    image: { light: philips, dark: philips },
    name: 'Philips'
  }
]
