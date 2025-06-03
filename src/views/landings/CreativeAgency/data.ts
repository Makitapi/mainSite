import starcraftLight from '@/assets/img/brands/starcraft-light.svg'
import starcraftDark from '@/assets/img/brands/starcraft-dark.svg'
import auchan from '@/assets/img/brands/auchan.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import airbnb from '@/assets/img/brands/airbnb.svg'
import philips from '@/assets/img/brands/philips.svg'
import careem from '@/assets/img/brands/careem.svg'
import pumaLight from '@/assets/img/brands/puma-light.svg'
import pumaDark from '@/assets/img/brands/puma-dark.svg'
import alpine from '@/assets/img/brands/alpine.svg'
import heineken from '@/assets/img/brands/heineken.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
import foster from '@/assets/img/brands/foster.svg'

import grid07 from '@/assets/img/portfolio/grid/07.jpg'
import grid08 from '@/assets/img/portfolio/grid/08.jpg'
import grid09 from '@/assets/img/portfolio/grid/09.jpg'
import grid10 from '@/assets/img/portfolio/grid/10.jpg'
import grid11 from '@/assets/img/portfolio/grid/11.jpg'
import grid12 from '@/assets/img/portfolio/grid/12.jpg'

import team01 from '@/assets/img/landing/creative-agency/team/01.jpg'
import team02 from '@/assets/img/landing/creative-agency/team/02.jpg'
import team03 from '@/assets/img/landing/creative-agency/team/03.jpg'
import team04 from '@/assets/img/landing/creative-agency/team/04.jpg'
import team05 from '@/assets/img/landing/creative-agency/team/05.jpg'
import team06 from '@/assets/img/landing/creative-agency/team/06.jpg'

import type { AuthorType, ClientType, MemberType, ProjectType, TestimonialType } from '@/views/landings/CreativeAgency/types'

export const clients: ClientType[] = [
  {
    image: { light: starcraftLight, dark: starcraftDark },
    name: 'Starcraft'
  },
  {
    image: { light: auchan, dark: auchan },
    name: 'Auchan'
  },
  {
    image: { light: klinos, dark: klinos },
    name: 'Klinos'
  },
  {
    image: { light: suzuki, dark: suzuki },
    name: 'Suzuki'
  },
  {
    image: { light: airbnb, dark: airbnb },
    name: 'Airbnb'
  },
  {
    image: { light: philips, dark: philips },
    name: 'Philips'
  },
  {
    image: { light: careem, dark: careem },
    name: 'Careem'
  },
  {
    image: { light: pumaLight, dark: pumaDark },
    name: 'Puma'
  },
  {
    image: { light: alpine, dark: alpine },
    name: 'Alpine'
  }
]

export const clientsRtl: ClientType[] = [
  {
    image: { light: heineken, dark: heineken },
    name: 'Heineken'
  },
  {
    image: { light: championLight, dark: championDark },
    name: 'Champion'
  },
  {
    image: { light: auchan, dark: auchan },
    name: 'Auchan'
  },
  {
    image: { light: philips, dark: philips },
    name: 'Philips'
  },
  {
    image: { light: airbnb, dark: airbnb },
    name: 'Airbnb'
  },
  {
    image: { light: alpine, dark: alpine },
    name: 'Alpine'
  },
  {
    image: { light: pumaLight, dark: pumaDark },
    name: 'Puma'
  },
  {
    image: { light: foster, dark: foster },
    name: 'Foster'
  },
  {
    image: { light: starcraftLight, dark: starcraftDark },
    name: 'Starcraft'
  }
]

const authorData: AuthorType[] = [
  {
    name: 'Lilia Bocouse',
    designation: 'Head of Marketing'
  },
  {
    name: 'Robert Fox',
    designation: 'Marketing Coordinator'
  },
  {
    name: 'Jenny Wilson',
    designation: 'CEO, Co-Founder'
  }
]

export const testimonials: TestimonialType[] = [
  {
    title: 'Awesome experience with a professional team. Thank you :)',
    content: 'Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.',
    author: authorData[0]
  },
  {
    title: 'Thanks to your talented team for the banding we dreamed about',
    content: 'Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.',
    author: authorData[1]
  },
  {
    title: 'Thanks to you, we have created a unique branding that is our pride!',
    content: 'Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.',
    author: authorData[2]
  }
]

export const projects: ProjectType[] = [
  {
    title: 'Healthy Yellow',
    image: grid07,
    category: 'branding',
    year: 2022,
    link: { name: 'portfolio.single-2' }
  },
  {
    title: 'Sen Jonson',
    image: grid08,
    category: 'stationery',
    year: 2022,
    link: { name: 'portfolio.single-2' }
  },
  {
    title: 'Gradient',
    image: grid09,
    category: 'branding',
    year: 2022,
    link: { name: 'portfolio.single-2' }
  },
  {
    title: 'D.G.Vent',
    image: grid10,
    category: 'stationery',
    year: 2021,
    link: { name: 'portfolio.single-2' }
  },
  {
    title: 'Doe design',
    image: grid11,
    category: 'stationery',
    year: 2021,
    link: { name: 'portfolio.single-2' }
  },
  {
    title: 'The Studio',
    image: grid12,
    category: 'web',
    year: 2020,
    link: { name: 'portfolio.single-2' }
  }
]

export const teamData: MemberType[] = [
  {
    image: team01,
    name: 'Nick Black',
    designation: 'Web Designer',
    socialMedia: [
      {
        icon: 'ai-facebook',
        name: 'facebook'
      },
      {
        icon: 'ai-dribbble',
        name: 'dribbble'
      },
      {
        icon: 'ai-stack-overflow',
        name: 'stack-overflow'
      }
    ]
  },
  {
    image: team02,
    name: 'Emilia Denver',
    designation: 'Identity Designer',
    socialMedia: [
      {
        icon: 'ai-facebook',
        name: 'facebook'
      },
      {
        icon: 'ai-instagram',
        name: 'instagram'
      },
      {
        icon: 'ai-behance',
        name: 'behance'
      }
    ]
  },
  {
    image: team03,
    name: 'Jane Cooper',
    designation: 'Marketing Coordinator',
    socialMedia: [
      {
        icon: 'ai-facebook',
        name: 'facebook'
      },
      {
        icon: 'ai-x',
        name: 'x'
      },
      {
        icon: 'ai-google',
        name: 'google'
      }
    ]
  },
  {
    image: team04,
    name: 'Jenny Wilson',
    designation: 'Web Designer',
    socialMedia: [
      {
        icon: 'ai-facebook',
        name: 'facebook'
      },
      {
        icon: 'ai-dribbble',
        name: 'dribbble'
      },
      {
        icon: 'ai-behance',
        name: 'behance'
      }
    ]
  },
  {
    image: team05,
    name: 'Robert Fox',
    designation: 'Graphic Designer',
    socialMedia: [
      {
        icon: 'ai-instagram',
        name: 'instagram'
      },
      {
        icon: 'ai-dribbble',
        name: 'dribbble'
      },
      {
        icon: 'ai-behance',
        name: 'behance'
      }
    ]
  },
  {
    image: team06,
    name: 'Jacob Jones',
    designation: 'Branding Designer',
    socialMedia: [
      {
        icon: 'ai-facebook',
        name: 'facebook'
      },
      {
        icon: 'ai-x',
        name: 'x'
      },
      {
        icon: 'ai-behance',
        name: 'behance'
      }
    ]
  }
]
