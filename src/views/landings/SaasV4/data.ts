import ecommerce from '@/assets/img/landing/saas-4/categories/ecommerce.jpg'
import transportation from '@/assets/img/landing/saas-4/categories/transportation.jpg'
import marketing from '@/assets/img/landing/saas-4/categories/marketing.jpg'
import robotics from '@/assets/img/landing/saas-4/categories/robotics.jpg'
import programming from '@/assets/img/landing/saas-4/categories/programming.jpg'

import envatoLight from '@/assets/img/landing/saas-4/integrations/envato-light.svg'
import envatoDark from '@/assets/img/landing/saas-4/integrations/envato-dark.svg'
import avatar50 from '@/assets/img/avatar/50.jpg'
import firefoxLight from '@/assets/img/landing/saas-4/integrations/firefox-light.svg'
import firefoxDark from '@/assets/img/landing/saas-4/integrations/firefox-dark.svg'
import magentoLight from '@/assets/img/landing/saas-4/integrations/magento-light.svg'
import magentoDark from '@/assets/img/landing/saas-4/integrations/magento-dark.svg'
import avatar51 from '@/assets/img/avatar/51.jpg'
import pingdomLight from '@/assets/img/landing/saas-4/integrations/pingdom-light.svg'
import pingdomDark from '@/assets/img/landing/saas-4/integrations/pingdom-dark.svg'
import avatar52 from '@/assets/img/avatar/52.jpg'
import woocommerceLight from '@/assets/img/landing/saas-4/integrations/woocommerce-light.svg'
import woocommerceDark from '@/assets/img/landing/saas-4/integrations/woocommerce-dark.svg'
import shopifyLight from '@/assets/img/landing/saas-4/integrations/shopify-light.svg'
import shopifyDark from '@/assets/img/landing/saas-4/integrations/shopify-dark.svg'
import laravel from '@/assets/img/landing/saas-4/integrations/laravel.svg'
import viteLight from '@/assets/img/landing/saas-4/integrations/vite-light.svg'
import viteDark from '@/assets/img/landing/saas-4/integrations/vite-dark.svg'
import angularLight from '@/assets/img/landing/saas-4/integrations/angular-light.svg'
import angularDark from '@/assets/img/landing/saas-4/integrations/angular-dark.svg'

import type { AuthorType, CategoryType, TestimonialType } from '@/views/landings/SaasV4/types'

export const categories: CategoryType[] = [
  {
    image: ecommerce,
    title: 'E-commerce',
    subTitle: 'Order processing, price suggestions, user research'
  },
  {
    image: transportation,
    title: 'Transportation',
    subTitle: 'Itinerary planning, freight pricing culculations, etc.'
  },
  {
    image: marketing,
    title: 'Marketing',
    subTitle: 'Market research, data visualization, user testing'
  },
  {
    image: robotics,
    title: 'Robotics',
    subTitle: 'Enhancing robot learning, improve robotic precision'
  },
  {
    image: programming,
    title: 'Programming',
    subTitle: 'Code generation, code debugging and optimization'
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar50,
    name: 'Emma Johnson',
    designation: 'CEO, Co-Founder',
    company: {
      image: {
        light: envatoLight,
        dark: envatoDark
      }
    }
  },
  {
    name: 'Robert Thompson',
    designation: 'Chief Information Officer',
    company: {
      image: {
        light: firefoxLight,
        dark: firefoxDark
      }
    }
  },
  {
    image: avatar51,
    name: 'Christopher Davis',
    designation: 'Network Administrator',
    company: {
      image: {
        light: magentoLight,
        dark: magentoDark
      }
    }
  },
  {
    image: avatar52,
    name: 'Samantha Grace',
    designation: 'Data Analyst',
    company: {
      image: {
        light: pingdomLight,
        dark: pingdomDark
      }
    }
  },
  {
    name: 'William Matthews',
    designation: 'Software Developer',
    company: {
      image: {
        light: woocommerceLight,
        dark: woocommerceDark
      }
    }
  },
  {
    name: 'Olivia Rodriguez',
    designation: 'Human Resources',
    company: {
      image: {
        light: shopifyLight,
        dark: shopifyDark
      }
    }
  },
  {
    name: 'Benjamin Smith',
    designation: 'Project Manager',
    company: {
      image: {
        light: laravel,
        dark: laravel
      }
    }
  },
  {
    name: 'Abigail Collins',
    designation: 'Chief Technology Officer',
    company: {
      image: {
        light: viteLight,
        dark: viteDark
      }
    }
  },
  {
    name: 'Elijah Brown',
    designation: 'Project Manager',
    company: {
      image: {
        light: angularLight,
        dark: angularDark
      }
    }
  }
]

export const testimonialData: TestimonialType[] = [
  {
    author: authorData[0],
    comment: "Streamline your workflow and save valuable time with this SaaS platform's powerful AI models, which takes care of the heavy lifting and delivers top-notch results."
  },
  {
    author: authorData[1],
    comment: "Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great service, and outstanding results."
  },
  {
    author: authorData[2],
    comment: "Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing AI models into your application."
  },
  {
    author: authorData[3],
    comment: 'Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an API for seamless integration.'
  },
  {
    author: authorData[4],
    comment: 'This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you to take your business to the next level.'
  },
  {
    author: authorData[5],
    comment: "Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success."
  },
  {
    author: authorData[6],
    comment: "Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and accurate, dependable results."
  },
  {
    author: authorData[7],
    comment: "Stay ahead of the curve and leverage cutting-edge technology with this SaaS platform's unparalleled performance and impressive results."
  },
  {
    author: authorData[8],
    comment: 'Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides excellent support and streamlines your processes.'
  }
]
