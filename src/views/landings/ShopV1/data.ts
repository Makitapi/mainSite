import blog01 from '@/assets/img/landing/shop-1/blog/01.jpg'
import blog02 from '@/assets/img/landing/shop-1/blog/02.jpg'
import blog03 from '@/assets/img/landing/shop-1/blog/03.jpg'

import { delivery, moneyBack, support, payment } from '@/assets/icons'

import type { BlogType, FeatureType } from '@/views/landings/ShopV1/types'

export const blogs: BlogType[] = [
  {
    image: blog01,
    title: 'Paintings for home decor',
    caption: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem'
  },
  {
    image: blog02,
    title: 'How to keep flowers fresh longer',
    caption: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem'
  },
  {
    image: blog03,
    title: 'Bedroom decoration explained',
    caption: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem'
  }
]

export const features: FeatureType[] = [
  {
    icon: delivery,
    title: 'Fast and free delivery',
    description: 'Free delivery for all orders over $200 honcus egestas lorem honcus egestas'
  },
  {
    icon: moneyBack,
    title: 'Money back guarantee',
    description: 'We return money within 30 days honcus egestas lorem honcus egestas'
  },
  {
    icon: support,
    title: '24/7 customer support',
    description: 'Friendly 24/7 customer support honcus egestas lorem honcus egestas'
  },
  {
    icon: payment,
    title: 'Secure online payment',
    description: 'We possess SSL / Secure сertificate honcus egestas lorem honcus egestas'
  }
]
