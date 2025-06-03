import clutchRatingLight from '@/assets/img/brands/clutch-rating-light.svg'
import clutchRatingDark from '@/assets/img/brands/clutch-rating-dark.svg'
import deloitteLight from '@/assets/img/brands/deloitte-light.svg'
import deloitteDark from '@/assets/img/brands/deloitte-dark.svg'
import vuejsLight from '@/assets/img/brands/vuejs-light.svg'
import vuejsDark from '@/assets/img/brands/vuejs-dark.svg'
import awwwardsLight from '@/assets/img/brands/awwwards-light.svg'
import awwwardsDark from '@/assets/img/brands/awwwards-dark.svg'
import clutchLight from '@/assets/img/brands/clutch-light.svg'
import clutchDark from '@/assets/img/brands/clutch-dark.svg'

import industries01 from '@/assets/img/landing/web-studio/industries/01.jpg'
import industries02 from '@/assets/img/landing/web-studio/industries/02.jpg'
import industries03 from '@/assets/img/landing/web-studio/industries/03.jpg'
import industries04 from '@/assets/img/landing/web-studio/industries/04.jpg'

import figma from '@/assets/img/landing/web-studio/skills/figma.svg'
import foster from '@/assets/img/brands/foster.svg'
import css3 from '@/assets/img/landing/web-studio/skills/css3.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import bootstrap from '@/assets/img/landing/web-studio/skills/bootstrap.svg'
import alpine from '@/assets/img/brands/alpine.svg'
import python from '@/assets/img/landing/web-studio/skills/python.svg'

import { webDevelopment, mobileDevelopment, graphicDesign } from '@/assets/icons'

import type { AwardType, IndustryType, ServiceType, SkillCardType } from '@/views/landings/WebStudio/types'

export const awards: AwardType[] = [
  {
    image: {
      light: clutchRatingLight,
      dark: clutchRatingDark
    },
    name: 'Clutch'
  },
  {
    image: {
      light: deloitteLight,
      dark: deloitteDark
    },
    name: 'Deloitte'
  },
  {
    image: {
      light: vuejsLight,
      dark: vuejsDark
    },
    name: 'Vue.js'
  },
  {
    image: {
      light: awwwardsLight,
      dark: awwwardsDark
    },
    name: 'Awwwards'
  },
  {
    image: {
      light: clutchLight,
      dark: clutchDark
    },
    name: 'Clutch'
  }
]

export const services: ServiceType[] = [
  {
    icon: webDevelopment,
    title: 'Web development',
    description: 'Pellentesque bibendum congue massa urna. Tempus hendrerit non molestie nulla enim, est vitae nisl amet.'
  },
  {
    icon: mobileDevelopment,
    title: 'Mobile development',
    description: 'Amet, consectetur rhoncus, libero, morbi malesuada feugiat nulla feugiat mi vitae est pharetra nisi velit tincidunt.'
  },
  {
    icon: graphicDesign,
    title: 'Graphic design',
    description: 'Est, nisl, ornare augue maecenas dis vitae tincidunt interdum tincidunt donec ipsum pellentesque luctus justo.'
  }
]

export const industries: IndustryType[] = [
  {
    image: industries01,
    title: 'Finance and insurance',
    description: 'Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit.',
    key: 'finance'
  },
  {
    image: industries02,
    title: 'Startup and technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui.',
    key: 'tech'
  },
  {
    image: industries03,
    title: 'Medicine and beauty',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget.',
    key: 'medicine'
  },
  {
    image: industries04,
    title: 'E-commerce',
    description: 'Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem.',
    key: 'ecommerce'
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
