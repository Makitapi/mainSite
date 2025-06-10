import grid11Img from '@/assets/img/portfolio/grid/11.jpg'
import grid10Img from '@/assets/img/portfolio/grid/10.jpg'
import singleImg02 from '@/assets/img/portfolio/single/v2/02.png'
import singleImg04 from '@/assets/img/portfolio/single/v2/04.png'
import singleImg03 from '@/assets/img/portfolio/single/v2/03.png'
import singleImg05 from '@/assets/img/portfolio/single/v2/05.png'
import singleImg06 from '@/assets/img/portfolio/single/v2/06.png'
import singleImg07 from '@/assets/img/portfolio/single/v2/07.png'
import singleImg08 from '@/assets/img/portfolio/single/v2/08.png'
import singleImg09 from '@/assets/img/portfolio/single/v2/09.png'
import singleImg10 from '@/assets/img/portfolio/single/v2/10.png'
import type { LinkType } from '@/types'

export { singleImg02, singleImg03, singleImg04, singleImg05, singleImg06, singleImg07, singleImg08, singleImg09, singleImg10 }

const services = ['Email marketing', 'Content marketing', 'Social networks']

export type Single2DescriptionType = {
  content: string
  title: string
  id?: boolean
}

export type PortfolioSingle2Type = {
  author: AuthorType
  testimonial: string
  details: string
}

export type NextProjectType = {
  id: number
  name: string
  image: string
  category: string
  width: number
  link: LinkType
}

type AuthorType = {
  name: string
  position: string
}

export const singleDescriptions: Single2DescriptionType[] = [
  {
    title: 'About the client',
    content: 'A major retail distribution center handling 50 million hanging garments annually decided to implement RFID portals, they expected sizeable improvements.',
    id: true
  },
  {
    title: 'The challenge',
    content: 'How to implement an RFID program to maximize its impact with the least effort/investment? What should be done to get the most out of the tech?'
  },
  {
    title: 'The solution',
    content:
      "It's all on the implementation method, RFID is not plug and play, it's a journey. Hence, a stage-gate aproach to ensure success at every step as well as onboarding all stakeholders to future proof the overal supply chain resilience, accuracy, and speed."
  }
]

export type Single2CounterType = {
  number: string
  description: string
}

export const single2counter: Single2CounterType[] = [
  {
    number: '30+',
    description: 'Different templates'
  },
  {
    number: '150',
    description: 'Happy clients all over the world'
  }
]

export const singlev2Result: Single2CounterType[] = [
  {
    number: '50M',
    description: 'items/year'
  },
  {
    number: '$200k',
    description: 'savings in labour'
  },
  {
    number: '250%',
    description: 'speed increase inbound goods'
  }
]

const author: AuthorType[] = [
  {
    name: 'Lilia Bocouse',
    position: 'Head of Marketing'
  },
  {
    name: 'Lilia ',
    position: 'Head of Marketing'
  },
  {
    name: 'Lilia Bocouse',
    position: 'Head of Marketing'
  }
]

export const portfolioSingle2: PortfolioSingle2Type[] = [
  {
    author: author[0],
    testimonial: 'Awesome experience with a professional team. Thank you :)',
    details: 'Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.'
  },
  {
    author: author[1],
    testimonial: 'Thanks to your talented team for the banding we dreamed about',
    details: 'Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.'
  },
  {
    author: author[2],
    testimonial: 'Thanks to you, we have created a unique branding that is our pride!',
    details: 'Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.'
  }
]

export const nextProjectData: NextProjectType[] = [
  {
    id: 1,
    name: 'Doe design',
    image: grid11Img,
    category: 'Branding, Stationery',
    width: 550,
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    id: 2,
    name: 'D.G.Vent',
    image: grid10Img,
    category: 'Stationery design',
    width: 605,
    link: {
      name: 'portfolio.single-1'
    }
  }
]
