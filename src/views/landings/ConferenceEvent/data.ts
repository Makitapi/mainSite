import hero01 from '@/assets/img/landing/conference/hero/01.jpg'
import hero02 from '@/assets/img/landing/conference/hero/02.jpg'
import hero03 from '@/assets/img/landing/conference/hero/03.jpg'
import thumbnail1 from '@/assets/img/landing/conference/hero/th01.jpg'
import thumbnail2 from '@/assets/img/landing/conference/hero/th02.jpg'
import thumbnail3 from '@/assets/img/landing/conference/hero/th03.jpg'

import avatar23 from '@/assets/img/avatar/23.jpg'
import avatar26 from '@/assets/img/avatar/26.jpg'
import avatar27 from '@/assets/img/avatar/27.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'
import avatar28 from '@/assets/img/avatar/28.jpg'
import avatar24 from '@/assets/img/avatar/24.jpg'
import avatar22 from '@/assets/img/avatar/22.jpg'

import avatar36 from '@/assets/img/avatar/36.jpg'
import avatar37 from '@/assets/img/avatar/37.jpg'
import avatar38 from '@/assets/img/avatar/38.jpg'
import avatar39 from '@/assets/img/avatar/39.jpg'
import avatar40 from '@/assets/img/avatar/40.jpg'
import avatar41 from '@/assets/img/avatar/41.jpg'
import avatar42 from '@/assets/img/avatar/42.jpg'
import avatar43 from '@/assets/img/avatar/43.jpg'

import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar19 from '@/assets/img/avatar/19.jpg'

import envatoLight from '@/assets/img/landing/conference/sponsors/envato-light.svg'
import envatoDark from '@/assets/img/landing/conference/sponsors/envato-dark.svg'
import angularLight from '@/assets/img/landing/conference/sponsors/angular-light.svg'
import angularDark from '@/assets/img/landing/conference/sponsors/angular-dark.svg'
import pingdomLight from '@/assets/img/landing/conference/sponsors/pingdom-light.svg'
import pingdomDark from '@/assets/img/landing/conference/sponsors/pingdom-dark.svg'
import woocommerceLight from '@/assets/img/landing/conference/sponsors/woocommerce-light.svg'
import woocommerceDark from '@/assets/img/landing/conference/sponsors/woocommerce-dark.svg'
import magentoLight from '@/assets/img/landing/conference/sponsors/magento-light.svg'
import magentoDark from '@/assets/img/landing/conference/sponsors/magento-dark.svg'
import bootstrapLight from '@/assets/img/landing/conference/sponsors/bootstrap-light.svg'
import bootstrapDark from '@/assets/img/landing/conference/sponsors/bootstrap-dark.svg'
import laravelLight from '@/assets/img/landing/conference/sponsors/laravel-light.svg'
import laravelDark from '@/assets/img/landing/conference/sponsors/laravel-dark.svg'
import reactLight from '@/assets/img/landing/conference/sponsors/react-light.svg'
import reactDark from '@/assets/img/landing/conference/sponsors/react-dark.svg'
import type { AuthorType, ChiefGuestType, ScheduleType, SpeakerType, SponsorType, TargetAudienceType, TestimonialType } from '@/views/landings/ConferenceEvent/types'

export const chiefGuestData: ChiefGuestType[] = [
  {
    image: hero01,
    thumbnail: thumbnail1,
    name: 'Esther Howard',
    designation: 'VP of Strategy, Stretto Inc.'
  },
  {
    image: hero02,
    thumbnail: thumbnail2,
    name: 'Albert Flores',
    designation: 'Product Manager, Google'
  },
  {
    image: hero03,
    thumbnail: thumbnail3,
    name: 'Kathryn Murphy',
    designation: 'VP of Marketing, Glassdoor'
  }
]

export const targetAudience: TargetAudienceType[] = [
  {
    type: 'UI/UX Designers',
    description: 'Ipsum sed nascetur dolor accumsan integer phasellus tincidunt. Nulla quisque pellentesque adipiscing placerat integer feugiat facilisi elit mi. Dictum nunc lacinia vel molestie laoreet aliquet ridiculus diam justo viverra.',
    benefits: ['At donec auctor quam ut scelerisque dui.', 'Mollis sed fringilla placerat lobortis viverra aliquam ut nisl nisi.', 'Odio ullamcorper in praesent venenatis non non sed pharetra dipise.', 'Lobortis dui nibh at condimentum.']
  },
  {
    type: 'Developers',
    description: 'Etiam sed porta massa. In sapien metus, lobortis eu tortor id, maximus commodo enim. Phasellus feugiat mi vitae enim cursus, ut scelerisque augue scelerisque. Pellentesque habitant morbi tristique senectus et netus.',
    benefits: ['Donec imperdiet dolor at leo sodales.', 'Fringilla placerat lobortis viverra aliquam ut nisl nisi.', 'Lobortis ullamcorper in praesent venenatis non non sed pharetra dipise.', 'Mollis dui nibh at condimentum.']
  },
  {
    type: 'Managers',
    description: 'Ipsum sed nascetur dolor accumsan integer phasellus tincidunt. Nulla quisque pellentesque adipiscing placerat integer feugiat facilisi elit mi. Dictum nunc lacinia vel molestie laoreet aliquet ridiculus diam justo viverra.',
    benefits: ['At donec auctor quam ut scelerisque dui.', 'Mollis sed fringilla placerat lobortis viverra aliquam ut nisl nisi.', 'Odio ullamcorper in praesent venenatis non non sed pharetra dipise.', 'Lobortis dui nibh at condimentum.']
  },
  {
    type: 'Marketers',
    description: 'Etiam sed porta massa. In sapien metus, lobortis eu tortor id, maximus commodo enim. Phasellus feugiat mi vitae enim cursus, ut scelerisque augue scelerisque. Pellentesque habitant morbi tristique senectus et netus.',
    benefits: ['Donec imperdiet dolor at leo sodales.', 'Fringilla placerat lobortis viverra aliquam ut nisl nisi.', 'Lobortis ullamcorper in praesent venenatis non non sed pharetra dipise.', 'Mollis dui nibh at condimentum.']
  }
]

export const speakers: SpeakerType[] = [
  {
    image: avatar36,
    name: 'Marvin McKinney',
    designation: 'Founder & CEO, Uber'
  },
  {
    image: avatar37,
    name: 'Jenny Wilson',
    designation: 'Marketer, Glassdoor'
  },
  {
    image: avatar38,
    name: 'Albert Flores',
    designation: 'Product Manager, Google'
  },
  {
    image: avatar39,
    name: 'Anneta Nikson',
    designation: 'Founder & CEO, Perfecto'
  },
  {
    image: avatar40,
    name: 'Esther Howard',
    designation: 'VP of Strategy, Stretto Inc.'
  },
  {
    image: avatar41,
    name: 'Jerome Bell',
    designation: 'Strategic Advisor, Shopify'
  },
  {
    image: avatar42,
    name: 'Kathryn Murphy',
    designation: 'Marketing Coordinator'
  },
  {
    image: avatar43,
    name: 'Guy Hawkins',
    designation: 'President of Sales'
  }
]

export const sponsors: SponsorType[] = [
  {
    image: {
      light: envatoLight,
      dark: envatoDark
    },
    description: 'Faucibus amet cursus accumsan eleifend tempus diam id duis. Mi velit nulla purus commodo non.'
  },
  {
    image: {
      light: angularLight,
      dark: angularDark
    },
    description: 'Nulla consequat tincidunt ut aliquet quam dignissim. Sagittis, enim libero ultrices eleifend congue.'
  },
  {
    image: {
      light: pingdomLight,
      dark: pingdomDark
    },
    description: 'Ornare leo sed gravida quam volutpat vulputate massa aliquam. Sem lacus, quam tellus duis sit pellentesque.'
  },
  {
    image: {
      light: woocommerceLight,
      dark: woocommerceDark
    },
    description: 'Imperdiet nunc, mauris, sed at egestas. Massa laoreet facilisis turpis adipiscing semper venenatis ipsum.'
  },
  {
    image: {
      light: magentoLight,
      dark: magentoDark
    },
    description: 'Purus eu faucibus at vel, aliquam. Faucibus nibh odio sed elementum blandit ut sociis et.'
  },
  {
    image: {
      light: bootstrapLight,
      dark: bootstrapDark
    },
    description: 'Adipiscing ultrices risus maecenas libero donec nam. In sollicitudin nulla sagittis, neque sit ullamcorper.'
  },
  {
    image: {
      light: laravelLight,
      dark: laravelDark
    },
    description: 'Pharetra morbi id nibh ut at risus tortor consequat. Dictum urna vulputate quis ut facilisis turpis purus commodo.'
  },
  {
    image: {
      light: reactLight,
      dark: reactDark
    },
    description: 'Suspendisse luctus maecenas tristique urna turpis aenean est. Porttitor porta nec tincidunt ut aliquet quam.'
  }
]

export const eventScheduleDay1: ScheduleType[] = [
  {
    time: '9:30 - 10:30 am',
    topic: 'Opening party & registration',
    description: 'Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit amet metus turpis enim urna nec risus vehicula pharetra diam erat ac proin donec.',
    speakers: [{ image: avatar05 }, { image: avatar08 }, { image: avatar09 }, { image: avatar12 }]
  },
  {
    time: '10:30 - 11:30 am',
    topic: 'What are the top ideas for startup in 2023',
    description: 'Iaculis tellus morbi dui metus non leo pellentesque et euismod et tellus.',
    speakers: [{ image: avatar10 }, { image: avatar06 }]
  },
  {
    time: '11:30 - 12:00 am',
    topic: 'Coffee break'
  },
  {
    time: '12:00 - 15:00 pm',
    topic: 'Workshop: leading UI/UX design trends',
    description: 'Mi ullamcorper porttitor auctor nunc dui massa mattis fusce convallis. Aliquam quam nulla faucibus id. Eu cum quisque imperdiet semper ut ligula scelerisque.',
    speakers: [{ image: avatar19 }]
  },
  {
    time: '15:00 - 17:30 pm',
    topic: 'Group discussion: How to align and empower cross-team success',
    description: 'Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit amet metus.',
    speakers: [{ image: avatar08 }, { image: avatar06 }, { image: avatar09 }]
  }
]

export const eventScheduleDay2: ScheduleType[] = [
  {
    time: '12:00 - 15:00 am',
    topic: 'Workshop: How Blockchain affects modern IT market',
    description: 'Mi ullamcorper porttitor auctor nunc dui massa mattis fusce convallis. Aliquam quam nulla faucibus id. Eu cum quisque imperdiet semper ut ligula scelerisque.',
    speakers: [{ image: avatar19 }]
  },
  {
    time: '9:30 - 10:30 am',
    topic: 'The future of front-end frameworks',
    description: 'Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit amet metus turpis enim urna nec risus vehicula pharetra diam erat ac proin donec.',
    speakers: [{ image: avatar05 }, { image: avatar08 }, { image: avatar09 }, { image: avatar12 }]
  },
  {
    time: '11:30 - 12:00 am',
    topic: 'Coffee break'
  },
  {
    time: '15:00 - 17:30 pm',
    topic: 'Group discussion: How good UI design influences our perception',
    description: 'Vitae lectus metus non dolor mattis penatibus ultricies aliquet nunc sit amet metus.',
    speakers: [{ image: avatar08 }, { image: avatar06 }, { image: avatar09 }]
  },
  {
    time: '10:30 - 11:30 am',
    topic: 'What are the top ideas for startup in 2024',
    description: 'Iaculis tellus morbi dui metus non leo pellentesque et euismod et tellus.',
    speakers: [{ image: avatar10 }, { image: avatar06 }]
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar23,
    name: 'Wade Warren'
  },
  {
    image: avatar26,
    name: 'Jenny Wilson'
  },
  {
    image: avatar27,
    name: 'Bessie Cooper'
  },
  {
    image: avatar32,
    name: 'Ralph Edwards'
  },
  {
    image: avatar28,
    name: 'Cameron Williamson'
  },
  {
    image: avatar24,
    name: 'Annette Black'
  },
  {
    image: avatar22,
    name: 'Esther Howard'
  }
]

export const testimonials: TestimonialType[] = [
  {
    author: authorData[0],
    rating: 4.5,
    comment: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus.'
  },
  {
    author: authorData[1],
    rating: 5,
    comment: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.'
  },
  {
    author: authorData[2],
    rating: 4.5,
    comment: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.'
  },
  {
    author: authorData[3],
    rating: 4.5,
    comment: 'Odio viverra tristique id adipiscing varius. Leo vel tincidunt amet arcu. Auctor ipsum fames lacus vestibulum. Ultricies cras et at sed sed turpis.'
  },
  {
    author: authorData[4],
    rating: 4.5,
    comment: 'Mauris fermentum vitae volutpat orci mattis dolor malesuada porta id. Enim, dis nisi eget tincidunt bibendum leo pulvinar in. At justo hacsit diam.'
  },
  {
    author: authorData[5],
    rating: 5,
    comment: 'Nisi et venenatis vitae, purus arcu. Integer lacus maecenas rhoncus nibh aliquam, enim sollicitudin interdum hendrerit. Proin venenatis varius.'
  }
]

export const testimonialsRtl: TestimonialType[] = [
  {
    author: authorData[0],
    rating: 4.5,
    comment: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus.'
  },
  {
    author: authorData[6],
    rating: 5,
    comment: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.'
  },
  {
    author: authorData[2],
    rating: 4.5,
    comment: 'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.'
  },
  {
    author: authorData[3],
    rating: 4.5,
    comment: 'Odio viverra tristique id adipiscing varius. Leo vel tincidunt amet arcu. Auctor ipsum fames lacus vestibulum. Ultricies cras et at sed sed turpis.'
  },
  {
    author: authorData[4],
    rating: 4.5,
    comment: 'Mauris fermentum vitae volutpat orci mattis dolor malesuada porta id. Enim, dis nisi eget tincidunt bibendum leo pulvinar in. At justo hacsit diam.'
  },
  {
    author: authorData[5],
    rating: 5,
    comment: 'Nisi et venenatis vitae, purus arcu. Integer lacus maecenas rhoncus nibh aliquam, enim sollicitudin interdum hendrerit. Proin venenatis varius.'
  }
]
