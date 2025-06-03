import showcaseLight from '@/assets/img/landing/intro/landings/mobile-app-showcase-light.jpg'
import showcaseDark from '@/assets/img/landing/intro/landings/mobile-app-showcase-dark.jpg'
import productLight from '@/assets/img/landing/intro/landings/product-landing-light.jpg'
import productDark from '@/assets/img/landing/intro/landings/product-landing-dark.jpg'
import saasLight1 from '@/assets/img/landing/intro/landings/saas-v1-light.jpg'
import saasDark1 from '@/assets/img/landing/intro/landings/saas-v1-dark.jpg'
import saasLight2 from '@/assets/img/landing/intro/landings/saas-v2-light.jpg'
import saasDark2 from '@/assets/img/landing/intro/landings/saas-v2-dark.jpg'
import saasLight3 from '@/assets/img/landing/intro/landings/saas-v3-light.jpg'
import saasDark3 from '@/assets/img/landing/intro/landings/saas-v3-dark.jpg'
import saasLight4 from '@/assets/img/landing/intro/landings/saas-v4-light.jpg'
import saasDark4 from '@/assets/img/landing/intro/landings/saas-v4-dark.jpg'
import shopLight1 from '@/assets/img/landing/intro/landings/shop-homepage-v1-light.jpg'
import shopDark1 from '@/assets/img/landing/intro/landings/saas-v4-dark.jpg'
import shopLight2 from '@/assets/img/landing/intro/landings/shop-homepage-v2-light.jpg'
import shopDark2 from '@/assets/img/landing/intro/landings/shop-homepage-v2-dark.jpg'
import marketingLight from '@/assets/img/landing/intro/landings/marketing-agency-light.jpg'
import marketingDark from '@/assets/img/landing/intro/landings/marketing-agency-dark.jpg'
import creativeLight from '@/assets/img/landing/intro/landings/creative-agency-light.jpg'
import creativeDark from '@/assets/img/landing/intro/landings/creative-agency-dark.jpg'
import conferenceLight from '@/assets/img/landing/intro/landings/conference-light.jpg'
import conferenceDark from '@/assets/img/landing/intro/landings/conference-dark.jpg'
import influencerLight from '@/assets/img/landing/intro/landings/influencer-light.jpg'
import influencerDark from '@/assets/img/landing/intro/landings/influencer-dark.jpg'
import businessLight from '@/assets/img/landing/intro/landings/business-consulting-light.jpg'
import businessDark from '@/assets/img/landing/intro/landings/business-consulting-dark.jpg'
import corporateLight from '@/assets/img/landing/intro/landings/corporate-light.jpg'
import corporateDark from '@/assets/img/landing/intro/landings/corporate-dark.jpg'
import insuranceLight from '@/assets/img/landing/intro/landings/insurance-light.jpg'
import insuranceDark from '@/assets/img/landing/intro/landings/insurance-dark.jpg'
import coworkingLight from '@/assets/img/landing/intro/landings/coworking-space-light.jpg'
import coworkingDark from '@/assets/img/landing/intro/landings/coworking-space-dark.jpg'
import yogaLight from '@/assets/img/landing/intro/landings/yoga-studio-light.jpg'
import yogaDark from '@/assets/img/landing/intro/landings/yoga-studio-dark.jpg'
import webLight from '@/assets/img/landing/intro/landings/web-studio-light.jpg'
import webDark from '@/assets/img/landing/intro/landings/web-studio-dark.jpg'
import blogLight from '@/assets/img/landing/intro/landings/blog-homepage-light.jpg'
import blogDark from '@/assets/img/landing/intro/landings/blog-homepage-dark.jpg'

import bootstrapImg from '@/assets/img/landing/intro/features/bootstrap.png'
import sassImg from '@/assets/img/landing/intro/features/sass.png'
import npmImg from '@/assets/img/landing/intro/features/npm.png'
import jsImg from '@/assets/img/landing/intro/features/js.png'
import html5Img from '@/assets/img/landing/intro/features/html5.png'
import figmaImg from '@/assets/img/landing/intro/features/figma.png'
import touchImg from '@/assets/img/landing/intro/features/touch.png'
import fontImg from '@/assets/img/landing/intro/features/google-fonts.png'
import vectorImg from '@/assets/img/landing/intro/features/vector.png'

import type { LinkType } from '@/types'

export type PreviewCardType = {
  name: string
  lightImage: string
  darkImage: string
  link: LinkType
  isNew?: boolean
}

export type FeatureType = {
  title: string
  image: string
  description: string
}

export const landingPages: PreviewCardType[] = [
  {
    name: 'Mobile App Showcase',
    link: { name: 'landings.mobile-showcase' },
    lightImage: showcaseLight,
    darkImage: showcaseDark
  },
  {
    name: 'Product Landing',
    link: { name: 'landings.product' },
    lightImage: productLight,
    darkImage: productDark
  },
  {
    name: 'SaaS v.1',
    link: { name: 'landings.saas-1' },
    lightImage: saasLight1,
    darkImage: saasDark1
  },
  {
    name: 'SaaS v.2',
    link: { name: 'landings.saas-2' },
    lightImage: saasLight2,
    darkImage: saasDark2
  },
  {
    name: 'SaaS v.3',
    link: { name: 'landings.saas-3' },
    lightImage: saasLight3,
    darkImage: saasDark3
  },
  {
    name: 'SaaS v.4',
    link: { name: 'landings.saas-4' },
    lightImage: saasLight4,
    darkImage: saasDark4,
    isNew: true
  },
  {
    name: 'Shop Homepage v.1',
    link: { name: 'landings.shop-1' },
    lightImage: shopLight1,
    darkImage: shopDark1
  },
  {
    name: 'Shop Homepage v.2',
    link: { name: 'landings.shop-2' },
    lightImage: shopLight2,
    darkImage: shopDark2,
    isNew: true
  },
  {
    name: 'Marketing Agency',
    link: { name: 'landings.marketing-agency' },
    lightImage: marketingLight,
    darkImage: marketingDark
  },
  {
    name: 'Creative Agency',
    link: { name: 'landings.creative-agency' },
    lightImage: creativeLight,
    darkImage: creativeDark
  },
  {
    name: 'Conference (Event)',
    link: { name: 'landings.conference' },
    lightImage: conferenceLight,
    darkImage: conferenceDark
  },
  {
    name: 'Influencer',
    link: { name: 'landings.influencer' },
    lightImage: influencerLight,
    darkImage: influencerDark
  },
  {
    name: 'Business Consulting',
    link: { name: 'landings.business-consulting' },
    lightImage: businessLight,
    darkImage: businessDark
  },
  {
    name: 'Corporate',
    link: { name: 'landings.corporate' },
    lightImage: corporateLight,
    darkImage: corporateDark
  },
  {
    name: 'Insurance Company',
    link: { name: 'landings.insurance' },
    lightImage: insuranceLight,
    darkImage: insuranceDark,
    isNew: true
  },
  {
    name: 'Coworking Space',
    link: { name: 'landings.coworking-space' },
    lightImage: coworkingLight,
    darkImage: coworkingDark
  },
  {
    name: 'Yoga Studio',
    link: { name: 'landings.yoga-studio' },
    lightImage: yogaLight,
    darkImage: yogaDark
  },
  {
    name: 'Web Studio',
    link: { name: 'landings.web-studio' },
    lightImage: webLight,
    darkImage: webDark
  },
  {
    name: 'Blog Homepage',
    link: { name: 'landings.blog' },
    lightImage: blogLight,
    darkImage: blogDark
  }
]

export const features: FeatureType[] = [
  {
    title: 'Built with latest Bootstrap',
    image: bootstrapImg,
    description: "Around is the powerful front-end solution for websites and web apps based on Bootstrap 5 - the world's most popular responsive, mobile-first front-end component library."
  },
  {
    title: 'Easy to Customize with Sass',
    image: sassImg,
    description: 'Around is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.'
  },
  {
    title: 'Kick-start your development',
    image: npmImg,
    description: 'Start your development process fast and easy with Npm scripts setup. Configuration files are included in the download package. Full tasks automation and local server hot reload.'
  },
  {
    title: 'Future-proof JavaScript',
    image: jsImg,
    description: "Around core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally don't need jQuery any more and we can use ES6 modules to structure the code."
  },
  {
    title: 'W3C valid HTML code',
    image: html5Img,
    description: 'All HTML files are checked with W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Around is innovative at its core.'
  },
  {
    title: 'Premium Figma file included',
    image: figmaImg,
    description: "A well-crafted Figma design file is included in the download package. It offers a visually stunning and organized layout, utilizing Figma's components and styles."
  },
  {
    title: 'Touch-enabled sliders',
    image: touchImg,
    description: "In the era of touch screens it's important to ensure great user experience on handheld devices, when it comes to such frequently used interface component as slider."
  },
  {
    title: 'Google fonts',
    image: fontImg,
    description: 'Around uses Google font (Inter) which is free, fast to load and of very high quality. Currently Google fonts library includes 1400+ font families to choose from.'
  },
  {
    title: 'Vector based HD ready icons',
    image: vectorImg,
    description: 'Around is equipped with font-based icon pack and SVG icons to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.'
  }
]
