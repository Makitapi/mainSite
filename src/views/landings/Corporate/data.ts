import auchan from '@/assets/img/brands/auchan.svg'
import suzuki from '@/assets/img/brands/suzuki.svg'
import championLight from '@/assets/img/brands/champion-light.svg'
import championDark from '@/assets/img/brands/champion-dark.svg'
import starcraftLight from '@/assets/img/brands/starcraft-light.svg'
import starcraftDark from '@/assets/img/brands/starcraft-dark.svg'
import klinos from '@/assets/img/brands/klinos.svg'
import pumaLight from '@/assets/img/brands/puma-light.svg'
import pumaDark from '@/assets/img/brands/puma-dark.svg'
import airbnb from '@/assets/img/brands/airbnb.svg'
import philips from '@/assets/img/brands/philips.svg'

import services01 from '@/assets/img/landing/corporate/services/01.jpg'
import services02 from '@/assets/img/landing/corporate/services/02.jpg'
import services03 from '@/assets/img/landing/corporate/services/03.jpg'
import services04 from '@/assets/img/landing/corporate/services/04.jpg'
import services05 from '@/assets/img/landing/corporate/services/05.jpg'
import services06 from '@/assets/img/landing/corporate/services/06.jpg'

import team01 from '@/assets/img/landing/corporate/team/01.jpg'
import team02 from '@/assets/img/landing/corporate/team/02.jpg'
import team03 from '@/assets/img/landing/corporate/team/03.jpg'
import team04 from '@/assets/img/landing/corporate/team/04.jpg'
import team05 from '@/assets/img/landing/corporate/team/05.jpg'
import team06 from '@/assets/img/landing/corporate/team/06.jpg'

import { marketShares, marketingBranding, strategDevelopment, emailMarketing, communication, businessCopywriting } from '@/assets/icons'

import type { AuthorType, BlogType, FAQType, MemberType, PartnerType, ServiceType, TestimonialType } from '@/views/landings/Corporate/types'

export const services: ServiceType[] = [
  {
    title: 'Market shares analysis',
    image: services01,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.',
    icon: marketShares
  },
  {
    title: 'Marketing and branding',
    image: services02,
    description: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia.',
    icon: marketingBranding
  },
  {
    title: 'Strategy development',
    image: services03,
    description: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non aute irure dolor in reprehenderit in.',
    icon: strategDevelopment
  },
  {
    title: 'Email marketing',
    image: services04,
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo enier sed neque congue non quam ultrices interdum vitae vestibulumaute irure dolor in reprehenderit in.',
    icon: emailMarketing
  },
  {
    title: 'Working on communication',
    image: services05,
    description: 'Ut eu amet ac blandit nisl malesuada lectus viverra arcu in rhoncus egestas lorem consequat sollicitudin risus, in pellentesque tellus tincidunt purus viverra dignissim.',
    icon: communication
  },
  {
    title: 'Business copywriting',
    image: services06,
    description: 'Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non turpis nibh turpis ullamcorper est porttitor.',
    icon: businessCopywriting
  }
]

export const partners: PartnerType[] = [
  {
    image: { light: auchan, dark: auchan },
    name: 'Auchan'
  },
  {
    image: { light: suzuki, dark: suzuki },
    name: 'Suzuki'
  },
  {
    image: { light: championLight, dark: championDark },
    name: 'Champion'
  },
  {
    image: { light: starcraftLight, dark: starcraftDark },
    name: 'Starcraft'
  },
  {
    image: { light: klinos, dark: klinos },
    name: 'Klinos'
  },
  {
    image: { light: pumaLight, dark: pumaDark },
    name: 'Puma'
  },
  {
    image: { light: airbnb, dark: airbnb },
    name: 'Airbnb'
  },
  {
    image: { light: philips, dark: philips },
    name: 'Philips'
  }
]

export const faqData: FAQType[] = [
  {
    title: 'Finance and insurance',
    description: 'Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit consectetur posuere suscipit.'
  },
  {
    title: 'Startup and technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui platea nunc semper auctor.'
  },
  {
    title: 'Medicine and beauty',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget etiam morbi orci et.'
  },
  {
    title: 'Real estate and catering',
    description: 'Aenean suscipit, lacus eu sagittis pretium, quam purus aliquet velit, in vestibulum eros massa et eros. Proin sed mollis tortor. Integer non felis condimentum, gravida metus nec, mollis mauris ultrices malesuada.'
  },
  {
    title: 'E-commerce',
    description: 'Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem tristique senectus et netus.'
  },
  {
    title: 'Educational and training',
    description: 'Sed sollicitudin interdum nunc ut pharetra. Proin vehicula volutpat mattis. Curabitur a ipsum leo. Praesent dapibus est ac risus maximus, sit amet placerat diam congue elit sem commodo justo scelerisque ipsum.'
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
    author: authorData[0],
    title: 'Thanks to your talented team for the strategy we dreamed about!',
    content: 'Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.'
  },
  {
    author: authorData[1],
    title: 'Exceptional work, delivery and flexibility. An excellent result.',
    content: 'Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.'
  },
  {
    author: authorData[2],
    title: 'Thanks to you, we have created a unique branding that is our pride!',
    content: 'Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.'
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

export const blogs: BlogType[] = [
  {
    publishedOn: {
      month: 'August',
      date: 13,
      year: 2022
    },
    title: 'Promotion from scratch to the first sales',
    category: 'strategy',
    description: 'Suscipit consectetur nam hac in enim, adipiscing aenean tortor ac commodo eu nibh a tempus sed...'
  },
  {
    publishedOn: {
      month: 'August',
      date: 2,
      year: 2022
    },
    title: 'New business strategies for 2022',
    category: 'business',
    description: 'Orci massa sapien varius odio et vel egestas ultricies commodo tristique ullamcorper sit vitae cursus...'
  },
  {
    publishedOn: {
      month: 'July',
      date: 27,
      year: 2022
    },
    title: 'Outgoing year results, the main news',
    category: 'analytics',
    description: 'Mauris suscipit in tempor, platea lobortis mollis rutrum aliquam pulvinar ultricies orci augue libero...'
  },
  {
    publishedOn: {
      month: 'July',
      date: 19,
      year: 2022
    },
    title: 'How to define goals and objectives',
    category: 'strategy',
    description: 'Sed convallis integer egestas sapien sapien purus enim massa porttitor vulputate metus purus in fringilla...'
  }
]
