import type { AuthorType, BenefitType, ServiceType, TestimonialsSliderType } from '@/views/pages/services/ServicesV1/types'
import { serviceIcon, serviceIcon2, serviceIcon3, serviceIcon4, serviceIcon5, serviceIcon6 } from '@/assets/icons'

import avatar22 from '@/assets/img/avatar/22.jpg'
import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar25 from '@/assets/img/avatar/25.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'
import avatar29 from '@/assets/img/avatar/29.jpg'

export const serviceGrid: ServiceType[] = [
  {
    title: 'Advertising communications',
    icon: serviceIcon,
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.'
  },
  {
    title: 'Marketing and branding',
    icon: serviceIcon2,
    description: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue.'
  },
  {
    title: 'Web and Internet marketing',
    icon: serviceIcon3,
    description: 'Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.'
  },
  {
    title: 'Email marketing',
    icon: serviceIcon4,
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam ultrices interdum vitae vestibulum.'
  },
  {
    title: 'Working on communication',
    icon: serviceIcon5,
    description: 'Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum orci habitasse eget malesuada platea.'
  },
  {
    title: 'Business copywriting',
    icon: serviceIcon6,
    description: 'Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in lacus in ullamcorper diam consequat.'
  }
]

export const benefits: BenefitType[] = [
  {
    number: '01',
    title: 'Individual approach',
    description: 'Hac erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.'
  },
  {
    number: '02',
    title: 'Integrated analytics',
    description: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do leo proin odio est sed sit felis facilisi integer.'
  },
  {
    number: '03',
    title: 'Step by step work',
    description: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.'
  },
  {
    number: '04',
    title: 'Full spectrum of services',
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam ultrices interdum vitae vestibulum. Hac erat leo proin odio est sed sit felis facilisi integer sed.'
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
