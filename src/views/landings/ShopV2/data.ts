import glutenfree from '@/assets/img/landing/shop-2/benefits/glutenfree.svg'
import vegan from '@/assets/img/landing/shop-2/benefits/vegan.svg'
import natural from '@/assets/img/landing/shop-2/benefits/natural.svg'
import love from '@/assets/img/landing/shop-2/benefits/love.svg'

import instagram01 from '@/assets/img/landing/shop-2/instagram/01.jpg'
import instagram02 from '@/assets/img/landing/shop-2/instagram/02.jpg'
import instagram03 from '@/assets/img/landing/shop-2/instagram/03.jpg'
import instagram04 from '@/assets/img/landing/shop-2/instagram/04.jpg'
import instagram05 from '@/assets/img/landing/shop-2/instagram/05.jpg'
import instagram06 from '@/assets/img/landing/shop-2/instagram/06.jpg'
import instagram07 from '@/assets/img/landing/shop-2/instagram/07.jpg'
import instagram08 from '@/assets/img/landing/shop-2/instagram/08.jpg'

import type { BenefitType, SocialPostType } from '@/views/landings/ShopV2/types'

export const benefits: BenefitType[] = [
  {
    title: 'Gluten-Free',
    description: 'Made without gluten, offer to savor taste and quality without limitations.',
    image: glutenfree
  },
  {
    title: 'Vegan',
    description: "Made without animal products, they're perfect for vegans.",
    image: vegan
  },
  {
    title: '100% Natural',
    description: 'We have no place for artificial additives and preservatives.',
    image: natural
  },
  {
    title: 'Made with Love',
    description: 'Each macaron is meticulously handcrafted with a deep passion for detail and quality.',
    image: love
  }
]

export const socialPosts: SocialPostType[] = [
  {
    likes: 2048,
    comments: 320,
    image: instagram01
  },
  {
    likes: 1764,
    comments: 283,
    image: instagram02
  },
  {
    likes: 4560,
    comments: 417,
    image: instagram03
  },
  {
    likes: 1505,
    comments: 274,
    image: instagram04
  },
  {
    likes: 3708,
    comments: 198,
    image: instagram05
  },
  {
    likes: 2925,
    comments: 409,
    image: instagram06
  },
  {
    likes: 1348,
    comments: 120,
    image: instagram07
  },
  {
    likes: 963,
    comments: 98,
    image: instagram08
  }
]
