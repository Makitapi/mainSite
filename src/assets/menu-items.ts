import landings from '@/assets/img/megamenu/landings.jpg'
import mobileApp from '@/assets/img/megamenu/mobile-app.jpg'
import productLanding from '@/assets/img/megamenu/product-landing.jpg'
import saas1 from '@/assets/img/megamenu/saas-1.jpg'
import saas2 from '@/assets/img/megamenu/saas-2.jpg'
import saas3 from '@/assets/img/megamenu/saas-3.jpg'
import saas4 from '@/assets/img/megamenu/saas-4.jpg'
import shopHomepage1 from '@/assets/img/megamenu/shop-homepage-1.jpg'
import shopHomepage2 from '@/assets/img/megamenu/shop-homepage-2.jpg'
import marketingAgency from '@/assets/img/megamenu/marketing-agency.jpg'
import creativeAgency from '@/assets/img/megamenu/creative-agency.jpg'
import conference from '@/assets/img/megamenu/conference.jpg'
import webStudio from '@/assets/img/megamenu/web-studio.jpg'
import corporate from '@/assets/img/megamenu/corporate.jpg'
import insurance from '@/assets/img/megamenu/insurance.jpg'
import businessConsulting from '@/assets/img/megamenu/business-consulting.jpg'
import coworking from '@/assets/img/megamenu/coworking.jpg'
import yogaStudio from '@/assets/img/megamenu/yoga-studio.jpg'
import influencer from '@/assets/img/megamenu/influencer.jpg'
import blogHomepage from '@/assets/img/megamenu/blog-homepage.jpg'

import type { LinkType } from '@/types'

export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  image?: string
  isMega?: boolean
  isNew?: boolean
  link?: LinkType
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top' | string
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'landings',
    label: 'Landings',
    isTitle: true,
    isMega: true,
    children: [
      {
        key: 'template-intro-page',
        label: 'Template Intro Page',
        link: { name: 'landing' },
        parentKey: 'landings',
        image: landings
      },
      {
        key: 'mobile-showcase',
        label: 'Mobile App Showcase',
        link: { name: 'landings.mobile-showcase' },
        parentKey: 'landings',
        image: mobileApp
      },
      {
        key: 'product-landing',
        label: 'Product Landing',
        link: { name: 'landings.product' },
        parentKey: 'landings',
        image: productLanding
      },
      {
        key: 'saas-1',
        label: 'SaaS v.1',
        link: { name: 'landings.saas-1' },
        parentKey: 'landings',
        image: saas1
      },
      {
        key: 'saas-2',
        label: 'SaaS v.2',
        link: { name: 'landings.saas-2' },
        parentKey: 'landings',
        image: saas2
      },
      {
        key: 'saas-3',
        label: 'SaaS v.3',
        link: { name: 'landings.saas-3' },
        parentKey: 'landings',
        image: saas3
      },
      {
        key: 'saas-4',
        label: 'SaaS v.4',
        isNew: true,
        link: { name: 'landings.saas-4' },
        parentKey: 'landings',
        image: saas4
      },
      {
        key: 'shop-1',
        label: 'Shop Homepage v.1',
        link: { name: 'landings.shop-1' },
        parentKey: 'landings',
        image: shopHomepage1
      },
      {
        key: 'shop-2',
        label: 'Shop Homepage v.2',
        isNew: true,
        link: { name: 'landings.shop-2' },
        parentKey: 'landings',
        image: shopHomepage2
      },
      {
        key: 'marketing-agency',
        label: 'Marketing Agency',
        link: { name: 'landings.marketing-agency' },
        parentKey: 'landings',
        image: marketingAgency
      },
      {
        key: 'creative-agency',
        label: 'Creative Agency',
        link: { name: 'landings.creative-agency' },
        parentKey: 'landings',
        image: creativeAgency
      },
      {
        key: 'conference',
        label: 'Conference (Event)',
        link: { name: 'landings.conference' },
        parentKey: 'landings',
        image: conference
      },
      {
        key: 'web-studio',
        label: 'Web Studio',
        link: { name: 'landings.web-studio' },
        parentKey: 'landings',
        image: webStudio
      },
      {
        key: 'corporate',
        label: 'Corporate',
        link: { name: 'landings.corporate' },
        parentKey: 'landings',
        image: corporate
      },
      {
        key: 'insurance',
        label: 'Insurance Company',
        isNew: true,
        link: { name: 'landings.insurance' },
        parentKey: 'landings',
        image: insurance
      },
      {
        key: 'business-consulting',
        label: 'Business Consulting',
        link: { name: 'landings.business-consulting' },
        parentKey: 'landings',
        image: businessConsulting
      },
      {
        key: 'coworking-space',
        label: 'Coworking Space',
        link: { name: 'landings.coworking-space' },
        parentKey: 'landings',
        image: coworking
      },
      {
        key: 'yoga-studio',
        label: 'Yoga Studio',
        link: { name: 'landings.yoga-studio' },
        parentKey: 'landings',
        image: yogaStudio
      },
      {
        key: 'influencer',
        label: 'Influencer',
        link: { name: 'landings.influencer' },
        parentKey: 'landings',
        image: influencer
      },
      {
        key: 'blog',
        label: 'Blog',
        link: { name: 'landings.blog' },
        parentKey: 'landings',
        image: blogHomepage
      }
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-portfolio',
        label: 'Portfolio',
        parentKey: 'pages',
        children: [
          {
            key: 'portfolio-list-1',
            link: { name: 'portfolio.list-1' },
            parentKey: 'pages-portfolio',
            label: 'List View v.1'
          },
          {
            key: 'portfolio-list-2',
            link: { name: 'portfolio.list-2' },
            parentKey: 'pages-portfolio',
            label: 'List View v.2'
          },
          {
            key: 'portfolio-grid-1',
            link: { name: 'portfolio.grid-1' },
            parentKey: 'pages-portfolio',
            label: 'Grid View v.1'
          },
          {
            key: 'portfolio-grid-2',
            link: { name: 'portfolio.grid-2' },
            parentKey: 'pages-portfolio',
            label: 'Grid View v.2'
          },
          {
            key: 'portfolio-slider',
            link: { name: 'portfolio.slider' },
            parentKey: 'pages-portfolio',
            label: 'Slider View'
          },
          {
            key: 'portfolio-single-1',
            link: { name: 'portfolio.single-1' },
            parentKey: 'pages-portfolio',
            label: 'Single Project v.1'
          },
          {
            key: 'portfolio-single-2',
            link: { name: 'portfolio.single-2' },
            parentKey: 'pages-portfolio',
            label: 'Single Project v.2'
          }
        ]
      },
      {
        key: 'pages-shop',
        label: 'Shop',
        parentKey: 'pages',
        children: [
          {
            key: 'shop-catalog',
            link: { name: 'shop.catalog' },
            parentKey: 'pages-shop',
            label: 'Catalog (Listing)'
          },
          {
            key: 'shop-product',
            link: { name: 'shop.products', params: { id: 'V00273124' } },
            parentKey: 'pages-shop',
            label: 'Product Page'
          },
          {
            key: 'shop-checkout',
            link: { name: 'shop.checkout' },
            parentKey: 'pages-shop',
            label: 'Checkout'
          }
        ]
      },
      {
        key: 'pages-blog',
        label: 'Blog',
        parentKey: 'pages',
        children: [
          {
            key: 'blog-grid-sidebar',
            link: { name: 'blog.grid-sidebar' },
            parentKey: 'pages-blog',
            label: 'Grid View with Sidebar'
          },
          {
            key: 'blog-grid-no-sidebar',
            link: { name: 'blog.grid-no-sidebar' },
            parentKey: 'pages-blog',
            label: 'Grid View no Sidebar'
          },
          {
            key: 'blog-list-with-sidebar',
            link: { name: 'blog.list-sidebar' },
            parentKey: 'pages-blog',
            label: 'List View with Sidebar'
          },
          {
            key: 'blog-list-sidebar',
            link: { name: 'blog.list-no-sidebar' },
            parentKey: 'pages-blog',
            label: 'List View no Sidebar'
          },
          {
            key: 'blog-post-1',
            link: { name: 'blog.post-1' },
            parentKey: 'pages-blog',
            label: 'Single post v.1'
          },
          {
            key: 'blog-post-2',
            link: { name: 'blog.post-2' },
            parentKey: 'pages-blog',
            label: 'Single post v.2'
          },
          {
            key: 'blog-post-3',
            link: { name: 'blog.post-3' },
            parentKey: 'pages-blog',
            label: 'Single post v.3'
          }
        ]
      },
      {
        key: 'pages-about',
        label: 'About',
        parentKey: 'pages',
        children: [
          {
            key: 'about-agency',
            link: { name: 'about.agency' },
            parentKey: 'pages-about',
            label: 'About - Agency'
          },
          {
            key: 'about-product',
            link: { name: 'about.product' },
            parentKey: 'pages-about',
            label: 'About - Product'
          }
        ]
      },
      {
        key: 'pages-services',
        label: 'Services',
        parentKey: 'pages',
        children: [
          {
            key: 'services-1',
            link: { name: 'service-1' },
            parentKey: 'pages-services',
            label: 'Services v.1'
          },
          {
            key: 'services-2',
            link: { name: 'service-2' },
            parentKey: 'pages-services',
            label: 'Services v.2'
          },
          {
            key: 'services-3',
            link: { name: 'service-3' },
            parentKey: 'pages-services',
            label: 'Services v.3'
          }
        ]
      },
      {
        key: 'pages-pricing',
        link: { name: 'pricing' },
        label: 'Pricing',
        parentKey: 'pages'
      },
      {
        key: 'pages-contacts',
        label: 'Contacts',
        parentKey: 'pages',
        children: [
          {
            key: 'contacts-1',
            link: { name: 'contact-1' },
            parentKey: 'pages-contacts',
            label: 'Contacts v.1'
          },
          {
            key: 'contacts-2',
            link: { name: 'contact-2' },
            parentKey: 'pages-contacts',
            label: 'Contacts v.2'
          },
          {
            key: 'contacts-3',
            link: { name: 'contact-3' },
            parentKey: 'pages-contacts',
            label: 'Contacts v.3'
          }
        ]
      },
      {
        key: 'pages-specialty',
        label: 'Specialty Pages',
        parentKey: 'pages',
        children: [
          {
            key: 'specialty-coming-soon-1',
            link: { name: 'coming-soon-1' },
            parentKey: 'pages-specialty',
            label: 'Coming Soon v.1',
            target: '_blank'
          },
          {
            key: 'specialty-coming-soon-2',
            link: { name: 'coming-soon-2' },
            parentKey: 'pages-specialty',
            label: 'Coming Soon v.2',
            target: '_blank'
          },
          {
            key: 'specialty-error-404-1',
            link: { name: 'error-404-1' },
            parentKey: 'pages-specialty',
            label: '404 Error v.1',
            target: '_blank'
          },
          {
            key: 'specialty-error-404-2',
            link: { name: 'error-404-2' },
            parentKey: 'pages-specialty',
            label: '404 Error v.2',
            target: '_blank'
          },
          {
            key: 'specialty-error-404-3',
            link: { name: 'error-404-3' },
            parentKey: 'pages-specialty',
            label: '404 Error v.3',
            target: '_blank'
          }
        ]
      }
    ]
  },
  {
    key: 'account',
    label: 'Account',
    isTitle: true,
    children: [
      {
        key: 'account-auth',
        label: 'Auth pages',
        parentKey: 'account',
        children: [
          {
            key: 'account-sign-in',
            link: { name: 'auth.sign-in' },
            parentKey: 'account-auth',
            label: 'Sign In',
            target: '_blank'
          },
          {
            key: 'account-sign-up',
            link: { name: 'auth.sign-up' },
            parentKey: 'account-auth',
            label: 'Sign Up',
            target: '_blank'
          },
          {
            key: 'account-sign-in-up',
            link: { name: 'auth.sign-in-up' },
            parentKey: 'account-auth',
            label: 'Sign In / Up',
            target: '_blank'
          },
          {
            key: 'account-password-recovery',
            link: { name: 'auth.password-recovery' },
            parentKey: 'account-auth',
            label: 'Password Recovery',
            target: '_blank'
          }
        ]
      },
      {
        key: 'account-overview',
        label: 'Overview',
        link: { name: 'account.overview' },
        parentKey: 'account'
      },
      {
        key: 'account-settings',
        label: 'Settings',
        link: { name: 'account.settings' },
        parentKey: 'account'
      },
      {
        key: 'account-billing',
        label: 'Billing',
        link: { name: 'account.billing' },
        parentKey: 'account'
      },
      {
        key: 'account-orders',
        label: 'Orders',
        link: { name: 'account.orders' },
        parentKey: 'account'
      },
      {
        key: 'account-earnings',
        label: 'Earnings',
        link: { name: 'account.earnings' },
        parentKey: 'account'
      },
      {
        key: 'account-chat',
        label: 'Chat (Messages)',
        link: { name: 'account.chat' },
        parentKey: 'account'
      },
      {
        key: 'account-favorites',
        label: 'Favorites (Wishlist)',
        link: { name: 'account.favorites' },
        parentKey: 'account'
      }
    ]
  }
]
