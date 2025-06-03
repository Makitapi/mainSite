import slider1Img from '@/assets/img/portfolio/slider/01.png'
import slider2Img from '@/assets/img/portfolio/slider/02.png'
import slider3Img from '@/assets/img/portfolio/slider/03.png'
import slider4Img from '@/assets/img/portfolio/slider/04.png'
import vuejsDarkImg from '@/assets/img/portfolio/brands/vuejs-dark.svg'
import vuejsLightImg from '@/assets/img/portfolio/brands/vuejs-light.svg'
import deloitteDarkImg from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloitteLightImg from '@/assets/img/portfolio/brands/deloitte-light.svg'
import clutchDark from '@/assets/img/portfolio/brands/clutch-dark.svg'
import clutchLight from '@/assets/img/portfolio/brands/clutch-light.svg'
import championDark from '@/assets/img/portfolio/brands/champion-blue-dark.svg'
import championLight from '@/assets/img/portfolio/brands/champion-blue-light.svg'
import boost from '@/assets/img/portfolio/brands/boost.svg'
import fostreGreen from '@/assets/img/portfolio/brands/foster-green.svg'
import championPurpleDark from '@/assets/img/portfolio/brands/champion-purple-dark.svg'
import championPurpleLight from '@/assets/img/portfolio/brands/champion-purple-light.svg'
import type { LinkType } from '@/types'

export type SwiperType = {
  title: string
  image: string
  logo?: string
  description?: string
  awards?: {
    lightImg: string
    darkImg: string
  }[]
  variant?: string
  features?: string[]
  bgColor?: string
  logoDark?: string
  logoLight?: string
  link: LinkType
}

export const swiperData: SwiperType[] = [
  {
    title: 'An application for a national bank',
    image: slider1Img,
    logoDark: championDark,
    logoLight: championLight,
    description: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.',
    awards: [
      {
        lightImg: vuejsLightImg,
        darkImg: vuejsDarkImg
      },
      {
        lightImg: deloitteLightImg,
        darkImg: deloitteDarkImg
      }
    ],
    variant: 'bg-info',
    link: { name: 'portfolio.single-1' }
  },
  {
    title: 'Landing page for a marketing agency',
    image: slider2Img,
    logo: boost,
    features: ['Faucibus sit est dui id gravida', 'Lectus in sem eu facilisis ornare', 'Massa maecenas cras vivamus'],
    variant: 'bg-danger',
    link: { name: 'portfolio.single-1' }
  },
  {
    title: 'Design and dev of a dashboard',
    image: slider3Img,
    logo: fostreGreen,
    description: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.',
    variant: 'bg-success',
    link: { name: 'portfolio.single-1' }
  },
  {
    title: 'An application for a task tracker',
    image: slider4Img,
    logoDark: championPurpleDark,
    logoLight: championPurpleLight,
    description: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis.',
    awards: [
      {
        lightImg: clutchLight,
        darkImg: clutchDark
      },
      {
        lightImg: deloitteLightImg,
        darkImg: deloitteDarkImg
      }
    ],
    bgColor: '#d7e4f4',
    link: { name: 'portfolio.single-1' }
  }
]
