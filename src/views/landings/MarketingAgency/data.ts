import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar07 from '@/assets/img/avatar/07.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'

import bing from '@/assets/img/landing/marketing-agency/tools/bing.svg'
import facebook from '@/assets/img/landing/marketing-agency/tools/facebook.svg'
import microsoftLight from '@/assets/img/landing/marketing-agency/tools/microsoft-light.svg'
import microsoftDark from '@/assets/img/landing/marketing-agency/tools/microsoft-dark.svg'
import google from '@/assets/img/landing/marketing-agency/tools/google.svg'
import googleAdsLight from '@/assets/img/landing/marketing-agency/tools/google-ads-light.svg'
import googleAdsDark from '@/assets/img/landing/marketing-agency/tools/google-ads-dark.svg'
import admitadLight from '@/assets/img/landing/marketing-agency/tools/admitad-light.svg'
import admitadDark from '@/assets/img/landing/marketing-agency/tools/admitad-dark.svg'
import googleAnalyticsLight from '@/assets/img/landing/marketing-agency/tools/google-analytics-light.svg'
import googleAnalyticsDark from '@/assets/img/landing/marketing-agency/tools/google-analytics-dark.svg'
import instagramLight from '@/assets/img/landing/marketing-agency/tools/instagram-light.svg'
import instagramDark from '@/assets/img/landing/marketing-agency/tools/instagram-dark.svg'
import tiktokLight from '@/assets/img/landing/marketing-agency/tools/tiktok-light.svg'
import tiktokDark from '@/assets/img/landing/marketing-agency/tools/tiktok-dark.svg'

import team02 from '@/assets/img/landing/creative-agency/team/02.jpg'
import team01 from '@/assets/img/landing/creative-agency/team/01.jpg'
import team06 from '@/assets/img/landing/creative-agency/team/06.jpg'
import team04 from '@/assets/img/landing/creative-agency/team/04.jpg'
import team03 from '@/assets/img/landing/creative-agency/team/03.jpg'
import team05 from '@/assets/img/landing/creative-agency/team/05.jpg'

import klinosLight from '@/assets/img/landing/saas-1/brands/klinos-light.svg'
import klinosGray from '@/assets/img/landing/saas-1/brands/klinos-gray.svg'
import starcraftLight from '@/assets/img/landing/saas-1/brands/starcraft-light.svg'
import starcraftGray from '@/assets/img/landing/saas-1/brands/starcraft-gray.svg'
import airbnbLight from '@/assets/img/landing/saas-1/brands/airbnb-light.svg'
import airbnbGray from '@/assets/img/landing/saas-1/brands/airbnb-gray.svg'
import alpineLight from '@/assets/img/landing/saas-1/brands/alpine-light.svg'
import alpineGray from '@/assets/img/landing/saas-1/brands/alpine-gray.svg'
import fosterLight from '@/assets/img/landing/saas-1/brands/foster-light.svg'
import fosterGray from '@/assets/img/landing/saas-1/brands/foster-gray.svg'
import championLight from '@/assets/img/landing/saas-1/brands/champion-light.svg'
import championGray from '@/assets/img/landing/saas-1/brands/champion-gray.svg'

import avatar13 from '@/assets/img/avatar/13.jpg'
import avatar14 from '@/assets/img/avatar/14.jpg'
import avatar15 from '@/assets/img/avatar/15.jpg'
import avatar16 from '@/assets/img/avatar/16.jpg'

import caseStudy1 from '@/assets/img/landing/marketing-agency/case-studies/01.jpg'
import caseStudy2 from '@/assets/img/landing/marketing-agency/case-studies/02.jpg'
import caseStudy3 from '@/assets/img/landing/marketing-agency/case-studies/03.jpg'

import { onlineSupport, guarnatee, workOnTime, consultation } from '@/assets/icons'

import type { AuthorType, BenefitType, CaseStudyType, CompanyType, MemberType, ResourceType, TestimonialType, ToolType } from '@/views/landings/MarketingAgency/types'

export const caseStudies: CaseStudyType[] = [
  {
    image: caseStudy1,
    title: 'Growth of subscribers and sales on social networks for the eco shoe brand',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.',
    highlights: [
      {
        value: '1000+',
        label: 'leads for $ 2.1'
      },
      {
        value: '160%',
        label: 'revenue increase'
      },
      {
        value: '12+',
        label: 'sales channels'
      }
    ]
  },
  {
    image: caseStudy2,
    title: 'Business strategy for a brand of vintage bags and accessories',
    description: 'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate scelerisque.',
    highlights: [
      {
        value: '1200+',
        label: 'leads for $ 2.1'
      },
      {
        value: '130%',
        label: 'revenue increase'
      },
      {
        value: '14+',
        label: 'sales channels'
      }
    ]
  },
  {
    image: caseStudy3,
    title: 'Growth of subscribers and sales on social networks for the eco cosmetics',
    description: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames pulvinar elit.',
    highlights: [
      {
        value: '900+',
        label: 'leads for $ 2.1'
      },
      {
        value: '150%',
        label: 'revenue increase'
      },
      {
        value: '10+',
        label: 'sales channels'
      }
    ]
  }
]

const resourceAuthor: AuthorType[] = [
  {
    name: 'Guy Hawkins',
    image: avatar10
  },
  {
    name: 'Cody Fisher',
    image: avatar07
  },
  {
    name: 'Jane Cooper',
    image: avatar09
  }
]

export const resources: ResourceType[] = [
  {
    publishedOn: {
      month: 'August',
      date: 13,
      year: 2022
    },
    category: 'inspiration',
    title: 'Promotion of an online store from scratch, first sales',
    description: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames...',
    author: resourceAuthor[0]
  },
  {
    publishedOn: {
      month: 'July',
      date: 25,
      year: 2022
    },
    category: 'inspiration',
    title: 'Business strategy for a brand of vintage bags',
    description: 'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...',
    author: resourceAuthor[1]
  },
  {
    publishedOn: {
      month: 'July',
      date: 8,
      year: 2022
    },
    category: 'inspiration',
    title: 'Sales on social networks for the eco cosmetics',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit commodo dignissim...',
    author: resourceAuthor[2]
  }
]

export const teamData: MemberType[] = [
  {
    image: team02,
    name: 'Alisa Black',
    designation: 'Head of marketing',
    socialMedia: [{ icon: 'ai-instagram' }, { icon: 'ai-facebook' }, { icon: 'ai-linkedin' }]
  },
  {
    image: team01,
    name: 'Guy Hawkins',
    designation: 'President of Sales',
    socialMedia: [{ icon: 'ai-x' }, { icon: 'ai-facebook' }, { icon: 'ai-instagram' }]
  },
  {
    image: team06,
    name: 'Robert Fox',
    designation: 'Web Designer',
    socialMedia: [{ icon: 'ai-facebook' }, { icon: 'ai-behance' }, { icon: 'ai-dribbble' }]
  },
  {
    image: team04,
    name: 'Jane Cooper',
    designation: 'Marketing Coordinator',
    socialMedia: [{ icon: 'ai-instagram' }, { icon: 'ai-facebook' }, { icon: 'ai-linkedin' }]
  },
  {
    image: team03,
    name: 'Cody Fisher',
    designation: 'SMM Specialist',
    socialMedia: [{ icon: 'ai-x' }, { icon: 'ai-facebook' }, { icon: 'ai-instagram' }]
  },
  {
    image: team05,
    name: 'Jacob Jones',
    designation: 'Web Designer',
    socialMedia: [{ icon: 'ai-facebook' }, { icon: 'ai-behance' }, { icon: 'ai-dribbble' }]
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar13,
    name: 'Lilianna Bocouse',
    designation: 'Head of Marketing'
  },
  {
    image: avatar14,
    name: 'Darell Steward',
    designation: 'Project Manager'
  },
  {
    image: avatar15,
    name: 'Annette Black',
    designation: 'Lead Designer'
  },
  {
    image: avatar16,
    name: 'Ralph Edwards',
    designation: 'CEO, Co-Founder'
  }
]
export const testimonialData: TestimonialType[] = [
  {
    comment: '“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”',
    author: authorData[0]
  },
  {
    comment: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”',
    author: authorData[1]
  },
  {
    comment: '“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”',
    author: authorData[2]
  },
  {
    comment: '“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”',
    author: authorData[3]
  }
]

export const tools: ToolType[] = [
  {
    image: { light: bing, dark: bing },
    alt: 'Bing',
    delay: 300
  },
  {
    image: { light: facebook, dark: facebook },
    alt: 'Facebook',
    delay: 500
  },
  {
    image: { light: microsoftLight, dark: microsoftDark },
    alt: 'Microsoft',
    delay: 200
  },
  {
    image: { light: google, dark: google },
    alt: 'Google',
    delay: 800
  },
  {
    image: { light: googleAdsLight, dark: googleAdsDark },
    alt: 'Google Ads',
    delay: 0
  },
  {
    image: { light: admitadLight, dark: admitadDark },
    alt: 'Admitad',
    delay: 600
  },
  {
    image: { light: googleAnalyticsLight, dark: googleAnalyticsDark },
    alt: 'Google Analytics',
    delay: 400
  },
  {
    image: { light: instagramLight, dark: instagramDark },
    alt: 'Instagram',
    delay: 700
  },
  {
    image: { light: tiktokLight, dark: tiktokDark },
    alt: 'TikTok',
    delay: 100
  }
]

export const companyData: CompanyType[] = [
  {
    image: { light: klinosLight, dark: klinosGray, width: 120 }
  },
  {
    image: { light: starcraftLight, dark: starcraftGray, width: 147 }
  },
  {
    image: { light: airbnbLight, dark: airbnbGray, width: 121 }
  },
  {
    image: { light: alpineLight, dark: alpineGray, width: 132 }
  },
  {
    image: { light: fosterLight, dark: fosterGray, width: 132 }
  },
  {
    image: { light: championLight, dark: championGray, width: 130 }
  },
  {
    image: { light: starcraftLight, dark: starcraftGray, width: 147 }
  },
  {
    image: { light: klinosLight, dark: klinosGray, width: 120 }
  },
  {
    image: { light: alpineLight, dark: alpineGray, width: 132 }
  }
]

export const benefits: BenefitType[] = [
  {
    title: 'Online support',
    description: 'Pharetra morbi quis is massa maecenas vulputate elit non nullage a duis tortor mi massa pharetra.',
    icon: 'ai-search-settings',
    svgPath: onlineSupport
  },
  {
    title: '100% guarantee',
    description: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam diam natoque scelerisque.',
    icon: 'ai-bulb-alt',
    svgPath: guarnatee
  },
  {
    title: 'Work on time',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames.',
    icon: 'ai-circle-check-filled',
    svgPath: workOnTime
  },
  {
    title: 'Free consultation',
    description: 'Consectetur adipiscing elit proin volutpat mollis egestas nam luctus facilisis ultrices pellentesque volutpat ligula est.',
    icon: 'ai-rocket',
    svgPath: consultation
  }
]
