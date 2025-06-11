const getTitle = (title: string) => {
  return title ? `${title} | Makitapi - Revolutionary RFID Solutions` : 'Makitapi - Revolutionary RFID Solutions for the Modern Value Chain'
}

// const landingRoutes = [
//   {
//     path: '/',
//     name: 'landing',
//     meta: {
//       title: getTitle('')
//     },
//     component: () => import('@/views/Makitapi/1Landing/index.vue')
//   },
//   {
//     path: '/landings/mobile-showcase',
//     name: 'landings.mobile-showcase',
//     meta: {
//       title: getTitle('Mobile App Showcase')
//     },
//     component: () => import('@/views/landings/MobileShowcase/index.vue')
//   },
//   {
//     path: '/landings/product',
//     name: 'landings.product',
//     meta: {
//       title: getTitle('Product Landing')
//     },
//     component: () => import('@/views/landings/Product/index.vue')
//   },
//   {
//     path: '/landings/saas-1',
//     name: 'landings.saas-1',
//     meta: {
//       title: getTitle('SaaS v.1')
//     },
//     component: () => import('@/views/landings/SaasV1/index.vue')
//   },
//   {
//     path: '/landings/saas-2',
//     name: 'landings.saas-2',
//     meta: {
//       title: getTitle('SaaS v.2')
//     },
//     component: () => import('@/views/landings/SaasV2/index.vue')
//   },
//   {
//     path: '/landings/saas-3',
//     name: 'landings.saas-3',
//     meta: {
//       title: getTitle('SaaS v.3')
//     },
//     component: () => import('@/views/landings/SaasV3/index.vue')
//   },
//   {
//     path: '/landings/saas-4',
//     name: 'landings.saas-4',
//     meta: {
//       title: getTitle('SaaS v.4')
//     },
//     component: () => import('@/views/landings/SaasV4/index.vue')
//   },
//   {
//     path: '/landings/shop-1',
//     name: 'landings.shop-1',
//     meta: {
//       title: getTitle('Shop Homepage v.1')
//     },
//     component: () => import('@/views/landings/ShopV1/index.vue')
//   },
//   {
//     path: '/landings/shop-2',
//     name: 'landings.shop-2',
//     meta: {
//       title: getTitle('Shop Homepage v.2')
//     },
//     component: () => import('@/views/landings/ShopV2/index.vue')
//   },
//   {
//     path: '/landings/marketing-agency',
//     name: 'landings.marketing-agency',
//     meta: {
//       title: getTitle('Marketing Agency')
//     },
//     component: () => import('@/views/landings/MarketingAgency/index.vue')
//   },
//   {
//     path: '/landings/creative-agency',
//     name: 'landings.creative-agency',
//     meta: {
//       title: getTitle('Creative Agency')
//     },
//     component: () => import('@/views/landings/CreativeAgency/index.vue')
//   },
//   {
//     path: '/landings/conference',
//     name: 'landings.conference',
//     meta: {
//       title: getTitle('Conference')
//     },
//     component: () => import('@/views/landings/ConferenceEvent/index.vue')
//   },
//   {
//     path: '/landings/web-studio',
//     name: 'landings.web-studio',
//     meta: {
//       title: getTitle('Web Studio')
//     },
//     component: () => import('@/views/landings/WebStudio/index.vue')
//   },
//   {
//     path: '/landings/corporate',
//     name: 'landings.corporate',
//     meta: {
//       title: getTitle('Corporate')
//     },
//     component: () => import('@/views/landings/Corporate/index.vue')
//   },
//   {
//     path: '/landings/insurance',
//     name: 'landings.insurance',
//     meta: {
//       title: getTitle('Insurance')
//     },
//     component: () => import('@/views/landings/InsuranceCompany/index.vue')
//   },
//   {
//     path: '/landings/business-consulting',
//     name: 'landings.business-consulting',
//     meta: {
//       title: getTitle('Business Consulting')
//     },
//     component: () => import('@/views/landings/BusinessConsulting/index.vue')
//   },
//   {
//     path: '/landings/coworking-space',
//     name: 'landings.coworking-space',
//     meta: {
//       title: getTitle('Coworking Space')
//     },
//     component: () => import('@/views/landings/CoworkingSpace/index.vue')
//   },
//   {
//     path: '/landings/blog',
//     name: 'landings.blog',
//     meta: {
//       title: getTitle('Blog')
//     },
//     component: () => import('@/views/landings/Blog/index.vue')
//   },
//   {
//     path: '/landings/influencer',
//     name: 'landings.influencer',
//     meta: {
//       title: getTitle('Influencer')
//     },
//     component: () => import('@/views/landings/Influencer/index.vue')
//   },
//   {
//     path: '/landings/yoga-studio',
//     name: 'landings.yoga-studio',
//     meta: {
//       title: getTitle('Yoga Studio')
//     },
//     component: () => import('@/views/landings/YogaStudio/index.vue')
//   }
// ]

// const authRoutes = [
//   {
//     path: '/auth/sign-in',
//     name: 'auth.sign-in',
//     meta: {
//       title: getTitle('Sign In')
//     },
//     component: () => import('@/views/account/auth/SignIn.vue')
//   },
//   {
//     path: '/auth/sign-up',
//     name: 'auth.sign-up',
//     meta: {
//       title: getTitle('Sign Up')
//     },
//     component: () => import('@/views/account/auth/SignUp.vue')
//   },
//   {
//     path: '/auth/sign-in-up',
//     name: 'auth.sign-in-up',
//     meta: {
//       title: getTitle('SignIn_Up')
//     },
//     component: () => import('@/views/account/auth/SignInUp.vue')
//   },
//   {
//     path: '/auth/password-recovery',
//     name: 'auth.password-recovery',
//     meta: {
//       title: getTitle('Password Recovery')
//     },
//     component: () => import('@/views/account/auth/ForgotPassword.vue')
//   }
// ]

// const pagesRoutes = [
//   {
//     path: '/portfolio/list-1',
//     name: 'portfolio.list-1',
//     meta: {
//       title: getTitle('Grid View v.1')
//     },
//     component: () => import('@/views/pages/Portfolio/List-1/index.vue')
//   },
//   {
//     path: '/portfolio/list-2',
//     name: 'portfolio.list-2',
//     meta: {
//       title: getTitle('Grid View v.2')
//     },
//     component: () => import('@/views/pages/Portfolio/List-2/index.vue')
//   },
//   {
//     path: '/portfolio/grid-1',
//     name: 'portfolio.grid-1',
//     meta: {
//       title: getTitle('Grid View v.1')
//     },
//     component: () => import('@/views/pages/Portfolio/Grid1/index.vue')
//   },
//   {
//     path: '/portfolio/grid-2',
//     name: 'portfolio.grid-2',
//     meta: {
//       title: getTitle('Grid View v.2')
//     },
//     component: () => import('@/views/pages/Portfolio/Grid2/index.vue')
//   },
//   {
//     path: '/portfolio/slider',
//     name: 'portfolio.slider',
//     meta: {
//       title: getTitle('Single Post v.1')
//     },
//     component: () => import('@/views/pages/Portfolio/Slider/index.vue')
//   },
//   {
//     path: '/shop/catalog',
//     name: 'shop.catalog',
//     meta: {
//       title: getTitle('Catalog')
//     },
//     component: () => import('@/views/pages/Shop/Catalog/index.vue')
//   },
//   {
//     path: '/shop/products/:id?',
//     name: 'shop.products',
//     params: { id: 'V00273124' },
//     meta: {
//       title: getTitle('Product')
//     },
//     component: () => import('@/views/pages/Shop/Single/index.vue')
//   },
//   {
//     path: '/shop/checkout',
//     name: 'shop.checkout',
//     meta: {
//       title: getTitle('Checkout')
//     },
//     component: () => import('@/views/pages/Shop/Checkout/index.vue')
//   },
//   {
//     path: '/blog/grid-sidebar',
//     name: 'blog.grid-sidebar',
//     meta: {
//       title: getTitle('Grid with Sidebar')
//     },
//     component: () => import('@/views/pages/Blog/GridSidebar/index.vue')
//   },
//   {
//     path: '/contacts/v1',
//     name: 'contact-1',
//     meta: {
//       title: getTitle('Contacts v.1')
//     },
//     component: () => import('@/views/pages/contacts/ContactsV1/index.vue')
//   },
//   {
//     path: '/contacts/v2',
//     name: 'contact-2',
//     meta: {
//       title: getTitle('Contacts v.2')
//     },
//     component: () => import('@/views/pages/contacts/ContactsV2/index.vue')
//   },
//   {
//     path: '/contacts/v3',
//     name: 'contact-3',
//     meta: {
//       title: getTitle('Contacts v.3')
//     },
//     component: () => import('@/views/pages/contacts/ContactsV3/index.vue')
//   },
//   {
//     path: '/pages/pricing',
//     name: 'pricing',
//     meta: {
//       title: getTitle('Pricing')
//     },
//     component: () => import('@/views/pages/Pricing/index.vue')
//   },
//   {
//     path: '/services/v1',
//     name: 'service-1',
//     meta: {
//       title: getTitle('Services v.1')
//     },
//     component: () => import('@/views/pages/services/ServicesV1/index.vue')
//   },
//   {
//     path: '/services/v2',
//     name: 'service-2',
//     meta: {
//       title: getTitle('Services v.2')
//     },
//     component: () => import('@/views/pages/services/ServicesV2/index.vue')
//   },
//   {
//     path: '/services/v3',
//     name: 'service-3',
//     meta: {
//       title: getTitle('Services v.3')
//     },
//     component: () => import('@/views/pages/services/ServicesV3/index.vue')
//   },
//   {
//     path: '/about/agency',
//     name: 'about.agency',
//     meta: {
//       title: getTitle('Agency')
//     },
//     component: () => import('@/views/pages/about/Agency/index.vue')
//   },
//   {
//     path: '/about/product',
//     name: 'about.product',
//     meta: {
//       title: getTitle('Product')
//     },
//     component: () => import('@/views/pages/about/Product/index.vue')
//   },
//   {
//     path: '/blog/grid-no-sidebar',
//     name: 'blog.grid-no-sidebar',
//     meta: {
//       title: getTitle('Grid no Sidebar')
//     },
//     component: () => import('@/views/pages/Blog/Grid/index.vue')
//   },
//   {
//     path: '/blog/list-sidebar',
//     name: 'blog.list-sidebar',
//     meta: {
//       title: getTitle('List with Sidebar')
//     },
//     component: () => import('@/views/pages/Blog/ListSidebar/index.vue')
//   },
//   {
//     path: '/blog/list-no-sidebar',
//     name: 'blog.list-no-sidebar',
//     meta: {
//       title: getTitle('List no Sidebar')
//     },
//     component: () => import('@/views/pages/Blog/List/index.vue')
//   }
// ]

// const accountRoutes = [
//   {
//     path: '/account/overview',
//     name: 'account.overview',
//     meta: {
//       title: getTitle('Overview'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/OverView/index.vue')
//   },
//   {
//     path: '/account/settings',
//     name: 'account.settings',
//     meta: {
//       title: getTitle('Settings'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Settings/index.vue')
//   },
//   {
//     path: '/account/billing',
//     name: 'account.billing',
//     meta: {
//       title: getTitle('Billing'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Billing/index.vue')
//   },
//   {
//     path: '/account/orders',
//     name: 'account.orders',
//     meta: {
//       title: getTitle('Orders'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Orders/index.vue')
//   },
//   {
//     path: '/account/earnings',
//     name: 'account.earnings',
//     meta: {
//       title: getTitle('Earnings'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Earnings/index.vue')
//   },
//   {
//     path: '/account/chat',
//     name: 'account.chat',
//     meta: {
//       title: getTitle('Chat'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Chat/index.vue')
//   },
//   {
//     path: '/account/favorites',
//     name: 'account.favorites',
//     meta: {
//       title: getTitle('Favorites'),
//       authRequired: true
//     },
//     component: () => import('@/views/account/Favorites/index.vue')
//   }
// ]

// const otherPagesRoutes = [
//   {
//     path: '/pages/coming-soon-1',
//     name: 'coming-soon-1',
//     meta: {
//       title: getTitle('Coming Soon v.1')
//     },
//     component: () => import('@/views/pages/specialty-pages/ComingSoon1.vue')
//   },
//   {
//     path: '/pages/coming-soon-2',
//     name: 'coming-soon-2',
//     meta: {
//       title: getTitle('Coming Soon v.2')
//     },
//     component: () => import('@/views/pages/specialty-pages/ComingSoon2.vue')
//   },
//   {
//     path: '/pages/error-404-1',
//     name: 'error-404-1',
//     meta: {
//       title: getTitle('404 Error v.1')
//     },
//     component: () => import('@/views/pages/specialty-pages/404V1.vue')
//   },
//   {
//     path: '/pages/error-404-2',
//     name: 'error-404-2',
//     meta: {
//       title: getTitle('404 Error v.1')
//     },
//     component: () => import('@/views/pages/specialty-pages/404V2.vue')
//   },
//   {
//     path: '/pages/error-404-3',
//     name: 'error-404-3',
//     meta: {
//       title: getTitle('404 Error v.1')
//     },
//     component: () => import('@/views/pages/specialty-pages/404V3.vue')
//   }
// ]

import { createRouter, createWebHistory } from 'vue-router'

// 1. Enhanced route configuration with breadcrumb metadata
const myRoutes = [
  {
    path: '/',
    name: 'landing',
    meta: {
      title: getTitle(''),
      breadcrumb: {
        label: 'Home',
        hide: true // Don't show home in breadcrumbs for landing page
      }
    },
    component: () => import('@/views/Makitapi/1Landing/index.vue')
  },
  {
    path: '/use-cases',
    name: 'UseCases',
    meta: {
      title: getTitle('Use Cases'),
      breadcrumb: {
        label: 'Use Cases'
      }
    },
    component: () => import('@/views/Makitapi/2UseCases/index.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: getTitle('Blog'),
      breadcrumb: {
        label: 'Blog'
      }
    },
    component: () => import('@/views/Makitapi/3Blog/index.vue')
  },
  {
    path: '/blog/post1',
    name: 'blog.post-1',
    meta: {
      title: getTitle('Blog Post'),
      breadcrumb: {
        label: 'Post',
        parent: 'Blog' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/3Blog/Post1.vue')
  },
  {
    path: '/blog/post2',
    name: 'blog.post-2',
    meta: {
      title: getTitle('Blog Post'),
      breadcrumb: {
        label: 'Post',
        parent: 'Blog' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/3Blog/Post2.vue')
  },
  {
    path: '/blog/post3',
    name: 'blog.post-3',
    meta: {
      title: getTitle('Blog Post'),
      breadcrumb: {
        label: 'Post',
        parent: 'Blog' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/3Blog/Post3.vue')
  },
  {
    path: '/blog/post4',
    name: 'blog.post-4',
    meta: {
      title: getTitle('Blog Post'),
      breadcrumb: {
        label: 'Post',
        parent: 'Blog' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/3Blog/Post4.vue')
  },
  {
    path: '/blog/post5',
    name: 'blog.post-5',
    meta: {
      title: getTitle('Blog Post'),
      breadcrumb: {
        label: 'Post',
        parent: 'Blog' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/3Blog/Post5.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: getTitle('Projects'),
      breadcrumb: {
        label: 'Projects'
      }
    },
    component: () => import('@/views/Makitapi/4Projects/index.vue')
  },
  {
    path: '/projects/1',
    name: 'portfolio.single-1',
    meta: {
      title: getTitle('Project 1'),
      breadcrumb: {
        label: 'Project 1',
        parent: 'Projects' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/4Projects/Project1/index.vue')
  },
  {
    path: '/projects/2',
    name: 'portfolio.single-2',
    meta: {
      title: getTitle('Project 2'),
      breadcrumb: {
        label: 'Project 2',
        parent: 'Projects' // Optional: explicit parent reference
      }
    },
    component: () => import('@/views/Makitapi/4Projects/Project2/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: getTitle('Contact'),
      breadcrumb: {
        label: 'Contact'
      }
    },
    component: () => import('@/views/Makitapi/5Contact/index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router


// export const otherRoutes = [...pagesRoutes, ...otherPagesRoutes, ...authRoutes]

// export const allRoutes = [...landingRoutes, ...otherRoutes, ...accountRoutes, ...myRoutes]
export const allRoutes = [...myRoutes]