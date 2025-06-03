import fosterColor from '@/assets/img/landing/saas-1/brands/foster-color.svg'
import fosterLight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import fosterGray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import avatar13 from '@/assets/img/avatar/13.jpg'
import klinosColor from '@/assets/img/landing/saas-1/brands/klinos-color.svg'
import klinosLight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import klinosGray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import championColor from '@/assets/img/landing/saas-1/brands/champion-color.svg'
import championLight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import championGray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'
import avatar15 from '@/assets/img/avatar/15.jpg'
import airbnbColor from '@/assets/img/landing/saas-1/brands/airbnb-color.svg'
import airbnbLight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import airbnbGray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import avatar16 from '@/assets/img/avatar/16.jpg'
import starcraftColor from '@/assets/img/landing/saas-1/brands/starcraft-color.svg'
import starcraftLight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import starcraftGray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import avatar17 from '@/assets/img/avatar/17.jpg'
import alpineColor from '@/assets/img/landing/saas-1/brands/alpine-color.svg'
import alpineLight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import alpineGray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import avatar18 from '@/assets/img/avatar/18.jpg'

import type { AuthorType, FaqType, PricingType, TestimonialType } from '@/views/pages/Pricing/types'

export const pricingPlans: PricingType[] = [
  {
    title: 'Light',
    price: 8,
    description: 'Phasellus in hendrerit interdum lorem proin pretium dictum urna'
  },
  {
    title: 'Premium',
    price: 72,
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim aucibus'
  },
  {
    title: 'Medium',
    price: 36,
    description: 'Enim aenean phasellus in hendrerit interdum lorem proin pretium'
  }
]

export const faqData: FaqType[] = [
  {
    question: 'Is there a free trial?',
    answer: 'Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.'
  },
  {
    question: 'How do refunds work?',
    answer: 'Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.'
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Proin ac quam eget velit luctus tincidunt vel in nunc. Maecenas cursus erat lacus, id interdum elit accumsan in. Mauris placerat dapibus sem, condimentum interdum nulla varius ac. Mauris quam mauris, rhoncus et tortor vel, tempus dignissim libero. Curabitur sed odio in odio elementum cursus.'
  },
  {
    question: 'What happens if I run out of credit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum.'
  },
  {
    question: 'Do you have monthly and yearly billing options?',
    answer: 'Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit.'
  },
  {
    question: 'What happens when I change plans?',
    answer: 'Nunc non placerat mi, sit amet hendrerit lacus. Quisque cursus lorem vitae placerat ultrices. Morbi ut orci sit amet quam vulputate lobortis. Donec vulputate mi nec nisi tincidunt commodo. Nullam efficitur tincidunt tellus accumsan pellentesque. Suspendisse elementum blandit orci.'
  },
  {
    question: 'How do I cancel my paid plan?',
    answer: 'Morbi a consequat diam. Fusce sit amet faucibus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id est dictum, suscipit neque id, ornare nibh. Cras lacinia, est non ultrices porttitor, arcu orci rhoncus leo, egestas condimentum lorem.'
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar13,
    name: 'Lilianna Bocouse',
    designation: 'Head of Marketing',
    company: {
      image: {
        imageSwap: fosterColor,
        light: fosterLight,
        dark: fosterGray,
        width: 140
      }
    }
  },
  {
    image: avatar14,
    name: 'Darell Steward',
    designation: 'Project Manager',
    company: {
      image: {
        imageSwap: klinosColor,
        light: klinosLight,
        dark: klinosGray,
        width: 131
      }
    }
  },
  {
    image: avatar15,
    name: 'Annette Black',
    designation: 'Lead Designer',
    company: {
      image: {
        imageSwap: championColor,
        light: championLight,
        dark: championGray,
        width: 162
      }
    }
  },
  {
    image: avatar16,
    name: 'Ralph Edwards',
    designation: 'CEO, Co-Founder',
    company: {
      image: {
        imageSwap: airbnbColor,
        light: airbnbLight,
        dark: airbnbGray,
        width: 132
      }
    }
  },
  {
    image: avatar17,
    name: 'Jane Cooper',
    designation: 'Strategic Advisor',
    company: {
      image: {
        imageSwap: starcraftColor,
        light: starcraftLight,
        dark: starcraftGray,
        width: 158
      }
    }
  },
  {
    image: avatar18,
    name: 'Albert Flores',
    designation: 'Business Analyst',
    company: {
      image: {
        imageSwap: alpineColor,
        light: alpineLight,
        dark: alpineGray,
        width: 146
      }
    }
  }
]

export const testimonialData: TestimonialType[] = [
  {
    author: authorData[0],
    comment: `“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”`
  },
  {
    author: authorData[1],
    comment: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”`
  },
  {
    author: authorData[2],
    comment: `“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”`
  },
  {
    author: authorData[3],
    comment: `“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”`
  },
  {
    author: authorData[4],
    comment: `“Morbi at fermentum enim, pulvinar malesuada quam. Morbi sit amet tellus luctus, vulputate arcu nec, consectetur diam. Proin est lacus, interdum ac aliquam sit amet, aliquam eget leo. Donec condimentum erat quam, tincidunt tempus augue consectetur a. Donec quis purus dictum, iaculis mi fringilla.”`
  },
  {
    author: authorData[5],
    comment: `“Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla. Aliquam congue risus tortor, sed posuere leo faucibus sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut dui ante, rutrum eget vehicula sed.”`
  }
]
