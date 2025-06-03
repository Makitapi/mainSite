import { dashboardFlip, dashboardFlipBack, reliableFlip, reliableFlipBack, supportFlip, supportFlipBack } from '@/assets/icons'

import fosterColor from '@/assets/img/landing/saas-1/brands/foster-color.svg'
import fosterGray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import fosterLight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import klinosColor from '@/assets/img/landing/saas-1/brands/klinos-color.svg'
import klinosGray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import klinosLight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import championColor from '@/assets/img/landing/saas-1/brands/champion-color.svg'
import championGray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'
import championLight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import airbnbColor from '@/assets/img/landing/saas-1/brands/airbnb-color.svg'
import airbnbGray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import airbnbLight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import starcraftColor from '@/assets/img/landing/saas-1/brands/starcraft-color.svg'
import starcraftGray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import starcraftLight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import alpineColor from '@/assets/img/landing/saas-1/brands/alpine-color.svg'
import alpineGray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import alpineLight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import type { ImageType, LinkType } from '@/types'

interface ClientImageType extends ImageType {
  swapTo: string
  width: number
}
export type ClientType = {
  name: string
  image: ClientImageType
  link?: LinkType
}

export type BenefitType = {
  cardFront: {
    heading: string
    paragraph: string
    icon: any
  }
  cardBack: {
    heading: string
    paragraph: string
    color: string
    icon: any
  }
}

export const benefits: BenefitType[] = [
  {
    cardFront: {
      heading: 'Support',
      paragraph: 'Around users and partners can count on 24/7 technical assistance, as well as the help of the technical analytics department and teams of specialized experts.',
      icon: supportFlip
    },
    cardBack: {
      heading: '24/7',
      paragraph: 'Around users and partners can count on 24/7 technical assistance, as well as the help of the technical analytics department and teams of specialized experts.',
      color: 'primary',
      icon: supportFlipBack
    }
  },
  {
    cardFront: {
      heading: 'Individual dashboard',
      paragraph: 'You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems.',
      icon: dashboardFlip
    },
    cardBack: {
      heading: '136',
      paragraph: 'You can easily identify interdependencies between different indicators, identify tendencies and prevent potential difficulties and problems.',
      color: 'danger',
      icon: dashboardFlipBack
    }
  },
  {
    cardFront: {
      heading: 'Reliable data',
      paragraph: 'Thanks to our platform, developed using advanced data management methods, data quality reaches 100%, which is 20% better than other platforms.',
      icon: reliableFlip
    },
    cardBack: {
      heading: '100%',
      paragraph: 'Thanks to our platform, developed using advanced data management methods, data quality reaches 100%, which is 20% better than other platforms.',
      color: 'info',
      icon: reliableFlipBack
    }
  }
]

export const clients: ClientType[] = [
  {
    name: 'Foster',
    image: {
      swapTo: fosterColor,
      dark: fosterGray,
      light: fosterLight,
      width: 145
    }
  },
  {
    name: 'Klinos',
    image: {
      swapTo: klinosColor,
      dark: klinosGray,
      light: klinosLight,
      width: 140
    }
  },
  {
    name: 'Champion',
    image: {
      swapTo: championColor,
      dark: championGray,
      light: championLight,
      width: 160
    }
  },
  {
    name: 'Airbnb',
    image: {
      swapTo: airbnbColor,
      dark: airbnbGray,
      light: airbnbLight,
      width: 130
    }
  },
  {
    name: 'Starcraft',
    image: {
      swapTo: starcraftColor,
      dark: starcraftGray,
      light: starcraftLight,
      width: 160
    }
  },
  {
    name: 'Alpine',
    image: {
      swapTo: alpineColor,
      dark: alpineGray,
      light: alpineLight,
      width: 150
    }
  }
]
