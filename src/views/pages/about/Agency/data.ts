import type { AuthorType, GalleryImageType, MemberType, MissionType, ServiceType, StepType, TestimonialType } from '@/views/pages/about/Agency/types'

import { businessCopywriting, communication, emailMarketing, marketingBranding, marketShares, strategDevelopment } from '@/assets/icons'

import team1 from '@/assets/img/landing/corporate/team/01.jpg'
import team2 from '@/assets/img/landing/corporate/team/02.jpg'
import team3 from '@/assets/img/landing/corporate/team/03.jpg'
import team4 from '@/assets/img/landing/corporate/team/04.jpg'
import team5 from '@/assets/img/landing/corporate/team/05.jpg'
import team6 from '@/assets/img/landing/corporate/team/06.jpg'

import gallery1 from '@/assets/img/about/agency/gallery/01.jpg'
import gallery2 from '@/assets/img/about/agency/gallery/02.jpg'
import gallery3 from '@/assets/img/about/agency/gallery/03.jpg'
import gallery4 from '@/assets/img/about/agency/gallery/04.jpg'
import gallery5 from '@/assets/img/about/agency/gallery/05.jpg'
import gallery6 from '@/assets/img/about/agency/gallery/06.jpg'

import avatar21 from '@/assets/img/avatar/21.jpg'
import avatar33 from '@/assets/img/avatar/33.jpg'
import avatar34 from '@/assets/img/avatar/34.jpg'
import avatar35 from '@/assets/img/avatar/35.jpg'

export const steps: StepType[] = [
  {
    stepNumber: '01',
    stepTitle: 'Formulation of the problem',
    stepDescription: 'Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.'
  },
  {
    stepNumber: '02',
    stepTitle: 'Assessment of the current state',
    stepDescription: 'Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.'
  },
  {
    stepNumber: '03',
    stepTitle: 'Business plan creation',
    stepDescription: 'A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.'
  },
  {
    stepNumber: '04',
    stepTitle: 'Strategy implementation',
    stepDescription: 'Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc vel nec risus.'
  }
]

export const teamMembers: MemberType[] = [
  {
    name: 'Jane Cooper',
    role: 'Head of PR department',
    image: team3,
    socialMedia: ['instagram', 'facebook', 'linkedin']
  },
  {
    name: 'Guy Hawkins',
    role: 'Head of marketing',
    image: team1,
    socialMedia: ['facebook', 'x', 'linkedin']
  },
  {
    name: 'Martha Winter',
    role: 'Data analyst',
    image: team2,
    socialMedia: ['instagram', 'facebook', 'linkedin']
  },
  {
    name: 'Robert Fox',
    role: 'CTO',
    image: team5,
    socialMedia: ['facebook', 'x', 'stack-overflow']
  },
  {
    name: 'Michelle Yang',
    role: 'CEO, Founder',
    image: team6,
    socialMedia: ['instagram', 'facebook', 'linkedin']
  },
  {
    name: 'Albert Flores',
    role: 'Art director',
    image: team4,
    socialMedia: ['facebook', 'behance', 'dribbble']
  }
]

export const services: ServiceType[] = [
  {
    title: 'Market shares analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.',
    icon: marketShares
  },
  {
    title: 'Marketing and branding',
    description: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia.',
    icon: marketingBranding
  },
  {
    title: 'Strategy development',
    description: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non aute irure dolor in reprehenderit in.',
    icon: strategDevelopment
  },
  {
    title: 'Email marketing',
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo enier sed neque congue non quam ultrices interdum vitae vestibulumaute irure dolor in reprehenderit in.',
    icon: emailMarketing
  },
  {
    title: 'Working on communication',
    description: 'Ut eu amet ac blandit nisl malesuada lectus viverra arcu in rhoncus egestas lorem consequat sollicitudin risus, in pellentesque tellus tincidunt purus viverra dignissim.',
    icon: communication
  },
  {
    title: 'Business copywriting',
    description: 'Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non turpis nibh turpis ullamcorper est porttitor.',
    icon: businessCopywriting
  }
]

export const missions: MissionType[] = [
  {
    title: 'Individual approach',
    content: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.',
    icon: businessCopywriting
  },
  {
    title: 'Integrated analytics',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas nulla pariatur.',
    icon: marketShares
  },
  {
    title: 'Step by step work',
    content: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.',
    icon: strategDevelopment
  }
]

export const gallery: GalleryImageType[] = [
  {
    image: gallery1,
    width: 416
  },
  {
    image: gallery2,
    width: 526
  },
  {
    image: gallery3,
    width: 306
  },
  {
    image: gallery4,
    width: 367
  },
  {
    image: gallery5,
    width: 526
  },
  {
    image: gallery6,
    width: 416
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar21,
    name: 'Lilianna Bocouse',
    role: 'Head of Marketing'
  },
  {
    image: avatar33,
    name: 'Darell Steward',
    role: 'Project Manager'
  },
  {
    image: avatar34,
    name: 'Annette Black',
    role: 'Lead Designer'
  },
  {
    image: avatar35,
    name: 'Ralph Edwards',
    role: 'CEO, Co-Founder'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment: '“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”',
    author: authorData[0]
  },
  {
    comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”',
    author: authorData[1]
  },
  {
    comment: '“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”',
    author: authorData[2]
  },
  {
    comment: '“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”',
    author: authorData[3]
  }
]
