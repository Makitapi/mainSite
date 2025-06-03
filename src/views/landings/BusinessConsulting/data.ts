import clients01Light from '@/assets/img/landing/business-consulting/clients/01-light.svg'
import clients01Dark from '@/assets/img/landing/business-consulting/clients/01-dark.svg'
import clients02Light from '@/assets/img/landing/business-consulting/clients/02-light.svg'
import clients02Dark from '@/assets/img/landing/business-consulting/clients/02-dark.svg'
import clients03Light from '@/assets/img/landing/business-consulting/clients/03-light.svg'
import clients03Dark from '@/assets/img/landing/business-consulting/clients/03-dark.svg'
import clients04Light from '@/assets/img/landing/business-consulting/clients/04-light.svg'
import clients04Dark from '@/assets/img/landing/business-consulting/clients/04-dark.svg'
import clients05Light from '@/assets/img/landing/business-consulting/clients/05-light.svg'
import clients05Dark from '@/assets/img/landing/business-consulting/clients/05-dark.svg'
import clients06Light from '@/assets/img/landing/business-consulting/clients/06-light.svg'
import clients06Dark from '@/assets/img/landing/business-consulting/clients/06-dark.svg'
import clients05dark from '@/assets/img/landing/business-consulting/clients/05-dark.svg'

import industries01 from '@/assets/img/landing/business-consulting/industries/01.jpg'
import industries02 from '@/assets/img/landing/business-consulting/industries/02.jpg'
import industries03 from '@/assets/img/landing/business-consulting/industries/03.jpg'

import avatar22 from '@/assets/img/avatar/22.jpg'
import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar25 from '@/assets/img/avatar/25.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'
import avatar29 from '@/assets/img/avatar/29.jpg'

import { advertisingCommunication, marketingBusiness, webInternet, emailBusinessMarketing, workingCommunication, businessCopywrite } from '@/assets/icons'
import type { ClientType, IndustryType, StepType, ServiceType, StatsType, TestimonialsSliderType, AuthorType } from '@/views/landings/BusinessConsulting/types'

export const stats: StatsType[] = [
  {
    title: '540+',
    description: 'Happy clients'
  },
  {
    title: '1070',
    description: 'Projects completed'
  },
  {
    title: '30+',
    description: 'Full time specialists'
  },
  {
    title: '15',
    description: 'Awards won'
  }
]

export const services: ServiceType[] = [
  {
    title: 'Advertising communications',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.',
    icon: advertisingCommunication
  },
  {
    title: 'Marketing and branding',
    description: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue.',
    icon: marketingBusiness
  },
  {
    title: 'Web and Internet marketing',
    description: 'Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.',
    icon: webInternet
  },
  {
    title: 'Email marketing',
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam ultrices interdum vitae vestibulum.',
    icon: emailBusinessMarketing
  },
  {
    title: 'Working on communication',
    description: 'Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum orci habitasse eget malesuada platea.',
    icon: workingCommunication
  },
  {
    title: 'Business copywriting',
    description: ' Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in lacus in ullamcorper diam consequat.',
    icon: businessCopywrite
  }
]

export const industries: IndustryType[] = [
  {
    image: industries01,
    title: 'Services',
    description: ['Id habitasse dui habitant', 'Rutrum tempor sit tincidunt', 'Imperdiet est quis enim facilisis']
  },
  {
    image: industries02,
    title: 'Retail',
    description: ['Ultrices volutpat sit mattis', 'Egestas neque arcu duis', 'Metus magna viverra blandit']
  },
  {
    image: industries03,
    title: 'Technology',
    description: ['Diam diam nunc monte', 'Nulla egestas arcu proin sit', 'Nunc sapien turpis vulputate']
  }
]

export const clients: ClientType[] = [
  {
    image: {
      light: clients01Light,
      dark: clients01Dark
    }
  },
  {
    image: {
      light: clients02Light,
      dark: clients02Dark
    }
  },
  {
    image: {
      light: clients03Light,
      dark: clients03Dark
    }
  },
  {
    image: {
      light: clients04Light,
      dark: clients04Dark
    }
  },
  {
    image: {
      light: clients05Light,
      dark: clients05Dark
    }
  },
  {
    image: {
      light: clients06Light,
      dark: clients06Dark
    }
  },
  {
    image: {
      light: clients03Light,
      dark: clients03Dark
    }
  },
  {
    image: {
      light: clients05Light,
      dark: clients05Dark
    }
  },
  {
    image: {
      light: clients02Light,
      dark: clients02Dark
    }
  }
]

export const clientsRtl: ClientType[] = [
  {
    image: {
      light: clients06Light,
      dark: clients06Dark
    }
  },
  {
    image: {
      light: clients05Light,
      dark: clients05dark
    }
  },
  {
    image: {
      light: clients04Light,
      dark: clients04Dark
    }
  },
  {
    image: {
      light: clients02Light,
      dark: clients02Dark
    }
  },
  {
    image: {
      light: clients03Light,
      dark: clients03Dark
    }
  },
  {
    image: {
      light: clients01Light,
      dark: clients01Dark
    }
  },
  {
    image: {
      light: clients04Light,
      dark: clients04Dark
    }
  },
  {
    image: {
      light: clients02Light,
      dark: clients02Dark
    }
  },
  {
    image: {
      light: clients03Light,
      dark: clients03Dark
    }
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar22,
    name: 'Jane Cooper',
    designation: 'Medical Assistant'
  },
  {
    image: avatar25,
    name: 'Cameron Williamson',
    designation: 'Marketing Coordinator'
  },
  {
    image: avatar23,
    name: 'Wade Warren',
    designation: 'President of Sales'
  },
  {
    image: avatar26,
    name: 'Leslie Alexander',
    designation: 'CEO, Divi'
  },
  {
    image: avatar24,
    name: 'Esther Howard',
    designation: 'CEO, Slack'
  },
  {
    image: avatar27,
    name: 'Brooklyn Simmons',
    designation: 'Marketing Coordinator'
  },
  {
    image: avatar28,
    name: 'Fannie Summers',
    designation: 'VP of Sales'
  },
  {
    image: avatar29,
    name: 'Robert Fox',
    designation: 'Marketing Coordinator'
  }
]

export const testimonialsSlider: TestimonialsSliderType[] = [
  {
    slides: [
      {
        author: authorData[0],
        comment: 'Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.'
      },
      {
        author: authorData[1],
        comment: 'Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.'
      }
    ]
  },
  {
    slides: [
      {
        author: authorData[2],
        comment: 'Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.'
      },
      {
        author: authorData[3],
        comment: 'Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.'
      }
    ]
  },
  {
    slides: [
      {
        author: authorData[4],
        comment: 'Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.'
      },
      {
        author: authorData[5],
        comment: 'In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.'
      }
    ]
  },
  {
    slides: [
      {
        author: authorData[6],
        comment: 'In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.'
      },
      {
        author: authorData[7],
        comment: 'At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.'
      }
    ]
  }
]

export const steps: StepType[] = [
  {
    title: 'Formulation of the problem',
    description: 'Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.',
    delay: 0
  },
  {
    title: 'Assessment of the current state',
    description: 'Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.',
    delay: 250
  },
  {
    title: 'Business plan creation',
    description: 'A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.',
    delay: 500
  },
  {
    title: 'Strategy implementation',
    description: 'Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc vel nec risus.',
    delay: 700
  }
]
