import list1Img from '@/assets/img/portfolio/list/01.jpg'
import list2Img from '@/assets/img/portfolio/list/02.jpg'
import list3Img from '@/assets/img/portfolio/list/03.jpg'
import list4Img from '@/assets/img/portfolio/list/04.jpg'
import list5Img from '@/assets/img/portfolio/list/05.jpg'

import type { LinkType } from '@/types'

export type PortfolioType = {
  image: string
  title: string
  description: string
  category: string
  link: LinkType
}

export const portfolioItems: PortfolioType[] = [
  {
    image: list1Img,
    title: 'Design for eco bags and merch',
    category: 'Branding, Strategy',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim vel.',
    link: { name: 'portfolio.single-1' }
  },
  {
    image: list2Img,
    title: 'Handmade tableware company',
    category: 'Branding',
    description: 'Feugiat elit tempor, malesuada rutrum amet quis duis facilisi viverra. Quam ut in gravida dignissim eget mauris pretium facilisi dui varius amet et quam massa auctor odio.',
    link: { name: 'portfolio.single-1' }
  },
  {
    image: list3Img,
    title: 'Bottle for French perfume brand',
    category: 'Identity, Packaging',
    description: 'Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec eu.',
    link: { name: 'portfolio.single-1' }
  },
  {
    image: list4Img,
    title: 'Book cover design Twin Fish',
    category: 'E-book, Branding',
    description: 'Sed feugiat tristique enim aenean netus cum adipiscing est sem eget nulla leo vestibulum. Cras urna, proin ut ut dictum risus porttitor nulla consequat et iaculis.',
    link: { name: 'portfolio.single-1' }
  },
  {
    image: list5Img,
    title: 'Business cards and identity for Sen Jonson',
    category: 'Branding, Strategy',
    description: 'Lectus lacus, ac justo, ullamcorper egestas at felis arcu arcu venenatis praesent odio. Odio vulputate purus placerat ultrices faucibus sem sed magna est elementum.',
    link: { name: 'portfolio.single-1' }
  }
]

export { list1Img, list2Img, list3Img, list4Img, list5Img }
