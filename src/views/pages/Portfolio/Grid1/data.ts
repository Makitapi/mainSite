import grid1Img from '@/assets/img/portfolio/grid/01.jpg'
import grid2Img from '@/assets/img/portfolio/grid/02.jpg'
import grid3Img from '@/assets/img/portfolio/grid/03.jpg'
import grid4Img from '@/assets/img/portfolio/grid/04.jpg'
import grid5Img from '@/assets/img/portfolio/grid/05.jpg'
import grid6Img from '@/assets/img/portfolio/grid/06.jpg'
import type { LinkType } from '@/types'

export type ArticleType = {
  category: string
  image: string
  title: string
  tag: string
  link: LinkType
}

export const articles: ArticleType[] = [
  {
    category: 'branding',
    image: grid1Img,
    title: 'Strategy and design for a handmade tableware company',
    tag: 'Branding, Strategy',
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    category: 'product',
    image: grid2Img,
    title: 'Design for eco bags and merch',
    tag: 'Product design',
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    category: 'branding',
    image: grid4Img,
    title: 'Bottle for French perfume brand',
    tag: 'Packaging design',
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    category: 'ebook',
    image: grid3Img,
    title: 'Book cover design Twin Fish',
    tag: 'Cover design',
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    category: 'identity',
    image: grid6Img,
    title: 'Business cards and identity for Sen Jonson',
    tag: 'Identity design',
    link: {
      name: 'portfolio.single-1'
    }
  },
  {
    category: 'product',
    image: grid5Img,
    title: 'Toothbrushes made from eco materials',
    tag: 'Product design',
    link: {
      name: 'portfolio.single-1'
    }
  }
]
