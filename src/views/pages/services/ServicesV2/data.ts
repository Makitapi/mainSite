import { businessCopywriting, communication, emailMarketing, strategDevelopment } from '@/assets/icons'
import type { ApproachType, AuthorType, ServiceType, TestimonialType } from '@/views/pages/services/ServicesV2/types'

export const approach: ApproachType[] = [
  {
    number: '01',
    title: 'Individual approach',
    description: 'Hac erat leo proin odio est sed sit in felis facilisi integer sed congue neque turpis dictumst.'
  },
  {
    number: '02',
    title: 'Integrated analytics',
    description: 'Find aute irure dolor in enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque.'
  },
  {
    number: '03',
    title: 'Step by step work',
    description: 'More erat leo proin odio est sed sit felis facilisi integer sed sit congue neque turpis dictumst.'
  },
  {
    number: '04',
    title: 'Full range of services',
    description: 'Adipiscing posuere dui, amet, augue nisl dictum justo, enim sed neque congue non quam.'
  }
]

export const services: ServiceType[] = [
  {
    id: 1,
    title: 'Development',
    icon: emailMarketing,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas nulla pariatur.'
  },
  {
    id: 2,
    title: 'Business copywriting',
    icon: businessCopywriting,
    content: 'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.'
  },
  {
    id: 3,
    title: 'Design and branding',
    icon: strategDevelopment,
    content: 'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non aute irure dolor in reprehenderit in posuere dui amet augue nisl dictum.'
  },

  {
    id: 4,
    title: 'Consulting',
    icon: communication,
    content: 'Ut eu amet ac blandit nisl malesuada lectus viverra arcu in rhoncus egestas lorem consequat sollicitudin risus, in pellentesque tellus tincidunt purus viverra dignissim.'
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
    title: 'Thanks to your talented team for the strategy we dreamed about!',
    content: 'Suspendisse mauris elit, pellentesque nec purus sed, finibus finibus ipsum. Proin posuere, metus sed porttitor pellentesque, ante magna tincidunt mi, nec fermentum dui ligula vel massa. Praesent ultrices iaculis arcu iaculis ultrices. Maecenas vitae nulla odio. In laoreet, lectus in tempus ultricies.',
    author: authorData[0]
  },
  {
    title: 'Exceptional work, delivery and flexibility. An excellent result.',
    content: 'Leo vitae sem eget eget at in vivamus placerat sodales tristique risusiis senectusic quisque faucibus est justo egetert lobortis ultrices eu dignissim etiamier turpis tincidunt eget placerat feugiat senectusic quisque faucibus placerat sodales vitae tempor morbi tellus pulvinar tristique in turpis.',
    author: authorData[1]
  },
  {
    title: 'Thanks to you, we have created a unique branding that is our pride!',
    content: 'Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, nisi tellus iaculis quam, eget egestas mi felis eu urna. Quisque id nisl commodo, egestas eros ac, cursus odio. Ut nec rutrum magna, vel tempor erat. Vivamus nec tempus purus.',
    author: authorData[2]
  }
]
