import grid07 from '@/assets/img/portfolio/grid/07.jpg'
import grid08 from '@/assets/img/portfolio/grid/08.jpg'
import grid09 from '@/assets/img/portfolio/grid/09.jpg'
import grid10 from '@/assets/img/portfolio/grid/10.jpg'
import grid11 from '@/assets/img/portfolio/grid/11.jpg'
import grid12 from '@/assets/img/portfolio/grid/12.jpg'
import type { LinkType } from '@/types'

export type ArticleType = {
  category: string
  image: string
  title: string
  tag: string
  year: string
  height: string
  link: LinkType
}

const year: string[] = ['2022', '2021', '2020']

export const article: ArticleType[] = [
  {
    category: 'branding',
    image: grid07,
    title: 'Healthy Yellow',
    tag: 'Branding, Packaging',
    year: year[0],
    height: '512px',
    link: {
      name: 'portfolio.single-2'
    }
  },
  {
    category: 'stationery',
    image: grid08,
    title: 'Sen Jonson',
    tag: 'Stationery design',
    year: year[0],
    height: '704px',
    link: {
      name: 'portfolio.single-2'
    }
  },
  {
    category: 'branding',
    image: grid09,
    title: 'Gradient',
    tag: 'Branding, Packaging',
    year: year[0],
    height: '467px',
    link: {
      name: 'portfolio.single-2'
    }
  },
  {
    category: 'stationery',
    image: grid10,
    title: 'D.G.Vent',
    tag: 'Stationery design',
    year: year[1],
    height: '605px',
    link: {
      name: 'portfolio.single-2'
    }
  },
  {
    category: 'stationery',
    image: grid11,
    title: 'Doe design',
    tag: 'Branding, Stationery',
    year: year[1],
    height: '550px',
    link: {
      name: 'portfolio.single-2'
    }
  },
  {
    category: 'web',
    image: grid12,
    title: 'The Studio',
    tag: 'Web design',
    year: year[2],
    height: '470px',
    link: {
      name: 'portfolio.single-2'
    }
  }
]
