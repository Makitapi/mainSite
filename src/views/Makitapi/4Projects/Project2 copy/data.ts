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
    content: 'Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur. Vel magna sit aliquet viverra morbi massa mattis urna, feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis dolor. Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.',
    id: true
  },
  {
    title: 'The challenge',
    content: 'Sit diam nunc, et pellentesque ornare elit, ut. Interdum feugiat id ut egestas tellus congue faucibus habitant semper nunc et etiam ultrices id nisi urna amet, odio mauris risus nam aliquam pharetra amet nunc, enim aliquet egestas purus penatibus ac, elit ultricies proin adipiscing suspendisse sit proin.'
  },
  {
    title: 'The solution',
    content:
      'Est enim mollis morbi vulputate egestas commodo vitae quis sed sit ultrices nulla habitant sit faucibus orci. Eu etiam ipsum porttitor morbi urna eget aliquet aenean tristique amet tempus, vestibulum vel montes, pellentesque sit. Cursus nulla viverra elit accumsan, vitae. Phasellus sed hac at pharetra urna. Imperdiet egestas ac eget porttitor ultrices morbi ornare. Libero, lectus eget adipiscing odio ornare non maecenas non vitae libero, at feugiat urna, risus augue fringilla. Venenatis quam.'
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
    number: '30+',
    description: 'Different templates'
  },
  {
    number: '160%',
    description: 'Revenue increase'
  },
  {
    number: '150',
    description: 'Happy clients all over the world'
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
