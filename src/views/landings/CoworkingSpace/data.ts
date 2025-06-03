import avatar30 from '@/assets/img/avatar/30.jpg'
import avatar31 from '@/assets/img/avatar/31.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'

import type { AboutType, AuthorType, TestimonialType } from '@/views/landings/CoworkingSpace/types'

export const abouts: AboutType[] = [
  {
    icon: 'ai-space',
    title: '362 m²'
  },
  {
    icon: 'ai-shower',
    title: '5 showers'
  },
  {
    icon: 'ai-clock',
    title: '24/7 access'
  },
  {
    icon: 'ai-parking',
    title: '2 parkings'
  },
  {
    icon: 'ai-stairs',
    title: '3 floors'
  },
  {
    icon: 'ai-canteen',
    title: '2 cafes'
  }
]

const authorData: AuthorType[] = [
  {
    name: 'Jenny Wilson',
    designation: 'Head of Marketing',
    image: avatar30
  },
  {
    name: 'Esther Howard',
    designation: 'CEO, Co-Founder',
    image: avatar31
  },
  {
    name: 'Nick Wenirten',
    designation: 'Web Developer',
    image: avatar32
  }
]

export const testimonials: TestimonialType[] = [
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, a vulputate dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus molestie massa sit amet dapibus. Cras pulvinar lacinia sollicitudin malesuada vestibulum.',
    author: authorData[0]
  },
  {
    comment: 'Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa.',
    author: authorData[1]
  },
  {
    comment: 'Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris.',
    author: authorData[2]
  }
]
