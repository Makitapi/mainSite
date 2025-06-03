import clientLight4 from '@/assets/img/landing/business-consulting/clients/04-light.svg'
import clientDark4 from '@/assets/img/landing/business-consulting/clients/04-dark.svg'
import clientLight1 from '@/assets/img/landing/business-consulting/clients/01-light.svg'
import clientDark1 from '@/assets/img/landing/business-consulting/clients/01-dark.svg'
import clientLight2 from '@/assets/img/landing/business-consulting/clients/02-light.svg'
import clientDark2 from '@/assets/img/landing/business-consulting/clients/02-dark.svg'
import clientLight3 from '@/assets/img/landing/business-consulting/clients/03-light.svg'
import clientDark3 from '@/assets/img/landing/business-consulting/clients/03-dark.svg'
import clientLight5 from '@/assets/img/landing/business-consulting/clients/05-light.svg'
import clientDark5 from '@/assets/img/landing/business-consulting/clients/05-dark.svg'
import clientLight6 from '@/assets/img/landing/business-consulting/clients/06-light.svg'
import clientDark6 from '@/assets/img/landing/business-consulting/clients/06-dark.svg'

import avatar1 from '@/assets/img/landing/mobile-app-showcase/testimonials/01.png'
import avatar2 from '@/assets/img/landing/mobile-app-showcase/testimonials/02.png'
import avatar3 from '@/assets/img/landing/mobile-app-showcase/testimonials/03.png'
import avatar4 from '@/assets/img/landing/mobile-app-showcase/testimonials/04.png'

import type { FaqType, FeatureSliderType, BrandType, StatType, TestimonialType, AuthorType } from '@/views/landings/MobileShowcase/types'

export const statData: StatType[] = [
  {
    stat: '1,000+',
    title: 'Downloads per day',
    variant: 'primary'
  },
  {
    stat: '1 Million',
    title: 'Users per month',
    variant: 'info'
  },
  {
    stat: '300+',
    title: 'Courses',
    variant: 'warning'
  },
  {
    stat: '134',
    title: 'Countries',
    variant: 'danger'
  }
]

export const brandData: BrandType[] = [
  {
    image: {
      light: clientLight4,
      dark: clientDark4
    }
  },
  {
    image: {
      light: clientLight1,
      dark: clientDark1
    }
  },
  {
    image: {
      light: clientLight2,
      dark: clientDark2
    }
  },
  {
    image: {
      light: clientLight3,
      dark: clientDark3
    }
  },
  {
    image: {
      light: clientLight5,
      dark: clientDark5
    }
  },
  {
    image: {
      light: clientLight6,
      dark: clientDark6
    }
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar1,
    name: 'Nick Williams',
    occupation: 'Student'
  },
  {
    image: avatar2,
    name: 'Lili Bocouse',
    occupation: 'Student'
  },
  {
    image: avatar3,
    name: 'Esther Howard',
    occupation: 'Student'
  },
  {
    image: avatar3,
    name: 'Jane Cooper',
    occupation: 'Student'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    author: authorData[0],
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero vitae sem ornare ornare. Aliquam ut sapien vitae quam blandit egestas. Quisque nulla elit, fermentum et tincidunt tempor, rutrum at leo. Curabitur massa quam, aliquam eu sapien sed.',
    variant: 'info'
  },
  {
    author: authorData[1],
    comment: 'Proin interdum purus non quam convallis, quis dignissim leo cursus. Praesent finibus elit nisl, sed ultrices elit lobortis in. Donec laoreet sit amet nulla quis hendrerit. Praesent venenatis mattis ante. Praesent justo elit, suscipit a libero sit amet, luctus posuere mi.',
    variant: 'warning'
  },
  {
    author: authorData[2],
    comment: 'Viverra aliquam interdum mauris facilisi commodo euismod sit est. Et auctor diam a ac vitae vestibulum, eu. Tortor id aliquet rhoncus at orci et tempus, dictum turpis. Purus sit porta lacus, velit. Bibendum at nunc et, ac id vitae nibh semper in dignissim ac nascetur lorem et.',
    variant: 'primary'
  },
  {
    author: authorData[3],
    comment: 'Nam arcu ut in bibendum tincidunt quam massa vitae viverra sem eget. Felis morbi augue cras praesent arcu purus non id consequat dignissim sollicitudin tincidunt dui, dui felis ut ultricies vestibulum ipsum ullamcorper nunc at massa a aliquam massa lacus enim.',
    variant: 'danger'
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

export const featureSlides: FeatureSliderType[] = [
  {
    title: 'Choose the courses you are interested in',
    description: 'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.'
  },
  {
    title: 'Track classes in progress and seek new knowledge',
    description: 'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.'
  },
  {
    title: 'Study with a teacher in video format at a time convenient for you',
    description: 'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.'
  }
]
