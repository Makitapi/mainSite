import spaArea from '@/assets/img/landing/yoga-studio/features/spa-area.jpg'
import changingRoom from '@/assets/img/landing/yoga-studio/features/changing-room.jpg'
import freeLessons from '@/assets/img/landing/yoga-studio/features/free-lessons.jpg'
import loungeCafe from '@/assets/img/landing/yoga-studio/features/lounge-cafe.jpg'
import brightHalls from '@/assets/img/landing/yoga-studio/features/bright-halls.jpg'
import freeRugs from '@/assets/img/landing/yoga-studio/features/free-rugs.jpg'

import trainer1 from '@/assets/img/landing/yoga-studio/trainers/01.jpg'
import trainer2 from '@/assets/img/landing/yoga-studio/trainers/02.jpg'
import trainer3 from '@/assets/img/landing/yoga-studio/trainers/03.jpg'
import trainer4 from '@/assets/img/landing/yoga-studio/trainers/04.jpg'
import trainer5 from '@/assets/img/landing/yoga-studio/trainers/05.jpg'
import trainer6 from '@/assets/img/landing/yoga-studio/trainers/06.jpg'
import trainer7 from '@/assets/img/landing/yoga-studio/trainers/07.jpg'
import trainer8 from '@/assets/img/landing/yoga-studio/trainers/08.jpg'

import beginners from '@/assets/img/landing/yoga-studio/classes/beginners.jpg'
import stretching from '@/assets/img/landing/yoga-studio/classes/stretching.jpg'
import flyYoga from '@/assets/img/landing/yoga-studio/classes/fly-yoga.jpg'
import pregnant from '@/assets/img/landing/yoga-studio/classes/for-pregnant.jpg'
import healthyBack from '@/assets/img/landing/yoga-studio/classes/healthy-back.jpg'
import relaxYoga from '@/assets/img/landing/yoga-studio/classes/relax-yoga.jpg'

import type { ClassType, FeatureType, InitialEventType, PricingType, TrainerType } from '@/views/landings/YogaStudio/types'

export const features: FeatureType[] = [
  {
    name: 'Spa area',
    description: 'Orci purus, in tellus sit bibendum scelerisque adipiscing venenatis.',
    icon: 'ai-spa',
    image: spaArea
  },
  {
    name: 'Changing room',
    description: 'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
    icon: 'ai-towel',
    image: changingRoom
  },
  {
    name: 'Free lessons',
    description: 'Nisi vestibulum quam amet, egestas aliquam cursus mauris dignissim tellus.',
    icon: 'ai-flower',
    image: freeLessons
  },
  {
    name: 'Lounge cafe',
    description: 'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
    icon: 'ai-cafe',
    image: loungeCafe
  },
  {
    name: 'Bright halls',
    description: 'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
    icon: 'ai-sofa',
    image: brightHalls
  },
  {
    name: 'Free rugs',
    description: 'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
    icon: 'ai-rug',
    image: freeRugs
  }
]

export const trainers: TrainerType[] = [
  { name: 'Alisa Black', specialistIn: 'Fly-yoga', image: trainer1 },
  { name: 'Michelle Yang', specialistIn: 'Fly-yoga and relaxation', image: trainer2 },
  { name: 'Robert Fox', specialistIn: 'Stretching', image: trainer3 },
  { name: 'Jane Cooper', specialistIn: 'Fly-yoga', image: trainer4 },
  { name: 'Cody Fisher', specialistIn: 'Fly-yoga and relaxation', image: trainer5 },
  { name: 'Jenny Wilson', specialistIn: "Women's practices", image: trainer6 },
  { name: 'Annette Black', specialistIn: 'Fly-yoga', image: trainer7 },
  { name: 'Ralph Edwards', specialistIn: 'Stretching, healthy back', image: trainer8 }
]

export const pricingPlans: PricingType[] = [
  {
    title: '4 lessons',
    price: 40,
    perClassPrice: 10,
    validFor: 'Valid for all types of classes'
  },
  {
    title: '8 lessons',
    price: 72,
    perClassPrice: 9,
    validFor: 'Valid for all types of classes'
  },
  {
    title: '16 lessons',
    price: 120,
    perClassPrice: 7.5,
    validFor: 'Valid for all types of classes'
  },
  {
    title: 'Yoga for pregnant',
    price: 12,
    perClassPrice: 4,
    validFor: 'Valid for all types of classes'
  }
]

export const yogaClasses: ClassType[] = [
  {
    name: 'Beginners',
    description: 'Purus magna lectus feugiat arcu tellus vitae urna neque, eu velit in vulputate sodales ut tellus amet lorem sit consectetur quisque justo laoreet proin.',
    services: [
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-cafe',
        title: 'Lounge cafe',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: beginners
  },
  {
    name: 'Stretching',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus nec nunc bibendum facilisis pellentesque ut eros. Praesent bibendum sed mi aliquet tempus.',
    services: [
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-cafe',
        title: 'Lounge cafe',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: stretching
  },
  {
    name: 'Fly-yoga',
    description: 'Varius purus dui nunc faucibus mauris iaculis tortor enim cursus quisque eu, vel amet massa suscipit cursus sit mattis quis magnis dignissim dui fames tortor amet quis.',
    services: [
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-rug',
        title: 'Free rugs',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: flyYoga
  },
  {
    name: 'For pregnant',
    description: 'At duis est ante tortor, dictum dictumst nisl erat. Tellus erat pharetra eget vestibulum. Netus eu sit cursus et vehicula porttitor nulla turpis a. In volutpat at orci.',
    services: [
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-cafe',
        title: 'Lounge cafe',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: pregnant
  },
  {
    name: 'Healthy back',
    description: 'Facilisi tempus pharetra, egestas dolor. Nulla lorem interdum cursus habitasse. Morbi aliquam, mauris, varius nulla tortor ut nullam. Est eu eu eget fames leo nisl est.',
    services: [
      {
        icon: 'ai-cafe',
        title: 'Lounge cafe',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: healthyBack
  },
  {
    name: 'Relax yoga',
    description: 'Aliquam risus, leo mattis commodo id pretium. In sapien, lacus, cursus id vulputate. Pellentesque quis et posuere maecenas sed aenean quisque ut. Pellentesque sed at.',
    services: [
      {
        icon: 'ai-towel',
        title: 'Changing rooms',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-cafe',
        title: 'Lounge cafe',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-sofa',
        title: 'Bright halls',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      },
      {
        icon: 'ai-spa',
        title: 'Spa area',
        description: 'Neque, blandit consectetur viverra placerat ante.'
      }
    ],
    image: relaxYoga
  }
]

export const INITIAL_EVENTS: InitialEventType[] = [
  {
    title: 'Stretching',
    start: '2022-08-01T16:30',
    end: '2022-08-01T18:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-purple']
  },
  {
    title: 'For pregnant',
    start: '2022-08-02T07:30',
    end: '2022-08-02T09:40',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-warning']
  },
  {
    title: 'Healthy back',
    start: '2022-08-02T12:00',
    end: '2022-08-02T13:30',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-info']
  },
  {
    title: 'Relax yoga',
    start: '2022-08-02T18:45',
    end: '2022-08-02T20:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-danger']
  },
  {
    title: 'Beginners',
    start: '2022-08-03T11:00',
    end: '2022-08-03T13:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-success']
  },
  {
    title: 'Relax yoga',
    start: '2022-08-03T12:35',
    end: '2022-08-03T14:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-danger']
  },
  {
    title: 'Fly yoga',
    start: '2022-08-04T09:00',
    end: '2022-08-04T11:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-primary']
  },
  {
    title: 'For pregnant',
    start: '2022-08-05T07:30',
    end: '2022-08-05T09:40',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-warning']
  },
  {
    title: 'Beginners',
    start: '2022-08-08T11:00',
    end: '2022-08-03T13:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-success']
  },
  {
    title: 'Relax yoga',
    start: '2022-08-08T12:35',
    end: '2022-08-03T14:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-danger']
  },
  {
    title: 'For pregnant',
    start: '2022-08-09T07:30',
    end: '2022-08-09T09:40',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-warning']
  },
  {
    title: 'Fly yoga',
    start: '2022-08-10T09:00',
    end: '2022-08-10T11:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-primary']
  },
  {
    title: 'Stretching',
    start: '2022-08-11T16:30',
    end: '2022-08-11T18:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-purple']
  },
  {
    title: 'Healthy back',
    start: '2022-08-11T12:00',
    end: '2022-08-11T13:30',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-info']
  },
  {
    title: 'Relax yoga',
    start: '2022-08-12T12:35',
    end: '2022-08-12T14:00',
    classNames: ['event-custom-style', 'bg-light', 'text-nav', 'border-0', 'rounded-1', 'p-2', 'ps-3', 'border-start', 'border-5', 'border-danger']
  }
]
