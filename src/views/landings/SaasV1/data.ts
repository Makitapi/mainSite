import clutchLight from '@/assets/img/landing/saas-1/brands/clutch-light.svg'
import clutchDark from '@/assets/img/landing/saas-1/brands/clutch-dark.svg'
import productHunt from '@/assets/img/landing/saas-1/brands/product-hunt.svg'
import capterra from '@/assets/img/landing/saas-1/brands/capterra.svg'
import fosterColor from '@/assets/img/landing/saas-1/brands/foster-color.svg'
import fosterLight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import fosterGray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import klinosColor from '@/assets/img/landing/saas-1/brands/klinos-color.svg'
import klinosLight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import klinosGray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import championColor from '@/assets/img/landing/saas-1/brands/champion-color.svg'
import championLight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import championGray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'
import airbnbColor from '@/assets/img/landing/saas-1/brands/airbnb-color.svg'
import airbnbLight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import airbnbGray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import starcraftColor from '@/assets/img/landing/saas-1/brands/starcraft-color.svg'
import starcraftLight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import starcraftGray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import alpineColor from '@/assets/img/landing/saas-1/brands/alpine-color.svg'
import alpineLight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import alpineGray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import industry1 from '@/assets/img/landing/saas-1/industries/01.png'
import industry2 from '@/assets/img/landing/saas-1/industries/02.png'
import industry3 from '@/assets/img/landing/saas-1/industries/03.png'
import industry4 from '@/assets/img/landing/saas-1/industries/04.png'
import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import avatar15 from '@/assets/img/avatar/15.jpg'
import avatar16 from '@/assets/img/avatar/16.jpg'
import avatar17 from '@/assets/img/avatar/17.jpg'
import avatar18 from '@/assets/img/avatar/18.jpg'

import type { AuthorType, IndustryType, RatingType, TestimonialType } from '@/views/landings/SaasV1/types'

export const swiperSlides: RatingType[] = [
  {
    stars: 5,
    quote: '“Around provides us with the detailed and accurate data we need.”',
    brand: 'Clutch',
    image: {
      light: clutchLight,
      dark: clutchDark
    }
  },
  {
    stars: 5,
    quote: '“Tools are constantly improved and contain a lot of useful information.”',
    brand: 'Product Hunt',
    image: {
      light: productHunt
    }
  },
  {
    stars: 4,
    quote: '“We can easily analyze our big data quickly and efficiently all the time.”',
    brand: 'Capterra',
    image: {
      light: capterra
    }
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

export const industries: IndustryType[] = [
  {
    label: 'Marketers',
    image: industry1,
    title: 'Track user journey from first interaction to conversion',
    description: 'Porttitor in mauris tellus ipsum commodo praesent nunc vel integer mi at tristique id faucibus pretium vestibulum massa nisl at massa sagittis congue ac uismod tortor dictum enim tincidunt gravida odio. Auctor arcu ante malesuada pharetra gravida nunc euismod egestas quam dolor ut vel venenatis quis egestas orci.',
    bgColor: 'primary'
  },
  {
    label: 'Agencies',
    image: industry2,
    title: 'Analyze your marketing activities quickly and efficiently',
    description: 'Phasellus sed orci, praesent sed integer egestas imperdiet morbi vitae vel diam risus in sed elit semper est malesuada venenatis egestas diam consequat sit scelerisque integer sit nisl nunc.',
    bgColor: 'info'
  },
  {
    label: 'E-Commerce',
    image: industry3,
    title: "Track the user's path to the order on all product interaction paths",
    description: 'Sollicitudin et donec tincidunt arcu cras felis ipsum dolor sollicitudin. Nec purus, lobortis tristique pellentesque venenatis. Varius nulla quis morbi lectus sit dui viverra mi. Amet in diam vitae non at euismod massa orci at dis libero facilisi lacus morbi. Magna vitae ac condimentum enim vitae cras egestas elementum.',
    bgColor: 'warning'
  },
  {
    label: 'Startups',
    image: industry4,
    title: 'Track fast growth with important data',
    description: '>Porttitor in mauris tellus ipsum commodo praesent nunc vel integer mi at tristique id faucibus pretium vestibulum massa nisl at massa sagittis congue ac uismod tortor dictum enim tincidunt gravida odio. Auctor arcu ante malesuada pharetra gravida nunc euismod egestas quam dolor ut vel venenatis quis egestas orci.',
    bgColor: 'danger'
  }
]
