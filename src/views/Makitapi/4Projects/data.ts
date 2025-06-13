import list6Img from '@/assets/img/portfolio/Project1/Sorter_4.png'
import list7Img from '@/assets/img/portfolio/Project2/p1.png'
import list8Img from '@/assets/img/portfolio/list/08.png'
import list9Img from '@/assets/img/portfolio/list/09.png'
import list10Img from '@/assets/img/portfolio/list/10.png'
import vuejsDarkImg from '@/assets/img/portfolio/brands/vuejs-dark.svg'
import vuejsLightImg from '@/assets/img/portfolio/brands/vuejs-light.svg'
import deloitteDarkImg from '@/assets/img/portfolio/brands/deloitte-dark.svg'
import deloitteLightImg from '@/assets/img/portfolio/brands/deloitte-light.svg'
import fosterImg from '@/assets/img/portfolio/brands/foster-green.svg'
import boostImg from '@/assets/img/portfolio/brands/boost.svg'
import championDarkImg from '@/assets/img/portfolio/brands/NDA.svg'
import championLight from '@/assets/img/portfolio/brands/NDA.svg'
import clutchDark from '@/assets/img/portfolio/brands/clutch-dark.svg'
import clutchLight from '@/assets/img/portfolio/brands/clutch-light.svg'
import fosterYellow from '@/assets/img/portfolio/brands/foster-yellow.svg'
import type { ImageType, LinkType } from '@/types'

export { list6Img, list10Img, list7Img, list8Img, list9Img, vuejsDarkImg, vuejsLightImg, deloitteDarkImg, deloitteLightImg, fosterImg, fosterYellow, boostImg, championDarkImg, championLight, clutchDark, clutchLight }

type BrandType = {
  image: ImageType
}

export type ListType = {
  brand?: BrandType
  image: string
  title: string
  description?: string
  awards?: {
    image: ImageType
  }[]
  features?: string[]
  variant?: string
  bgColor?: string
  link?: LinkType
}

export const listData: ListType[] = [
  {
    image: list6Img,
    title: 'From 5 to 1 sec',
    description: 'More items, less labor, faster operations | How RFID transformation saved thousands of hours of scanning time per year',
    brand: { image: { light: championLight, dark: championDarkImg } },
    // awards: [ { image: { light: vuejsLightImg, dark: vuejsDarkImg } } , {image: { light: deloitteLightImg, dark: deloitteDarkImg }}],
    variant: 'primary',
    link: { name: 'portfolio.single-1' }
  },
  {
    image: list7Img,
    title: 'The RFID Journey',
    description: ' How One Retailer Transformed 1,400 Items/Hour into 4,900 Through Strategic Evolution',
    brand: { image: { light: fosterImg, dark: championLight } },
    variant: 'danger',
    link: { name: 'portfolio.single-2' }
  },
  // {
  //   image: list8Img,
  //   title: 'Landing page for a marketing agency Boost',
  //   features: ['Faucibus sit est dui id gravida', 'Lectus in sem eu facilisis ornare', 'Massa maecenas cras vivamus'],
  //   brand: { image: { light: boostImg, dark: boostImg } },
  //   variant: 'info',
  //   link: { name: 'portfolio.single-1' }
  // },
  // {
  //   image: list9Img,
  //   title: 'Development of an application for a task tracker',
  //   description: 'Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec.',
  //   // awards: [ { image: { light: clutchLight, dark: clutchDark } }, { image: { light: deloitteLightImg, dark: deloitteDarkImg  }}],
  //   brand: { image: { light: championLight, dark: championDarkImg } },
  //   bgColor: '#d7e4f4',
  //   link: { name: 'portfolio.single-1' }
  // },
  // {
  //   image: list10Img,
  //   title: 'Landing page for company for audience analysis',
  //   features: ['Faucibus sit est dui id gravida', 'Lectus in sem eu facilisis ornare', 'Massa maecenas cras vivamus'],
  //   brand: { image: { light: fosterYellow, dark: fosterYellow } },
  //   variant: 'warning',
  //   link: { name: 'portfolio.single-1' }
  // }
]
