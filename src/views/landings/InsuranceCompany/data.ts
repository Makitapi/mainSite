import { bundleSave, consistencyTrsut, insuranceSolution } from '@/assets/icons'

import deloitteLight from '@/assets/img/landing/insurance/partners/deloitte-light.svg'
import deloitteDark from '@/assets/img/landing/insurance/partners/deloitte-dark.svg'
import championLight from '@/assets/img/landing/insurance/partners/champion-light.svg'
import championDark from '@/assets/img/landing/insurance/partners/champion-dark.svg'
import timesLight from '@/assets/img/landing/insurance/partners/times-light.svg'
import timesDark from '@/assets/img/landing/insurance/partners/times-dark.svg'
import clutchLight from '@/assets/img/landing/insurance/partners/clutch-light.svg'
import clutchDark from '@/assets/img/landing/insurance/partners/clutch-dark.svg'
import airbnb from '@/assets/img/landing/insurance/partners/airbnb.svg'

import type { BenefitType, PartnerType } from '@/views/landings/InsuranceCompany/types'

export const partners: PartnerType[] = [
  {
    image: {
      light: deloitteLight,
      dark: deloitteDark
    },
    name: 'Deloitte'
  },
  {
    image: { light: airbnb, dark: airbnb },
    name: 'Airbnb'
  },
  {
    image: {
      light: championLight,
      dark: championDark
    },
    name: 'Champion'
  },
  {
    image: {
      light: timesLight,
      dark: timesDark
    },
    name: 'Financial Times'
  },
  {
    image: {
      light: clutchLight,
      dark: clutchDark
    },
    name: 'Clutch'
  }
]

export const benefits: BenefitType[] = [
  {
    title: 'One-stop insurance solution',
    description: 'Gaining access to a comprehensive suite of insurance products, it saves you time and effort by managing all your insurance needs under one roof.',
    icon: insuranceSolution
  },
  {
    title: 'Bundle and Save',
    description: 'We offer attractive discounts and benefits when you bundle multiple insurance lines with us. Enjoy cost savings while ensuring comprehensive coverage for your well-being, your vehicle, and your adventures.',
    icon: bundleSave
  },
  {
    title: 'Consistency and Trust',
    description: 'We have a proven track record of financial stability and commitment to customer satisfaction. Our experience and expertise ensure that you receive reliable coverage and support.',
    icon: consistencyTrsut
  }
]
