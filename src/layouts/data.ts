import type { LinkType } from '@/types'

type AccountType = {
  name: string
  icon: string
  badge?: string
  link: LinkType
}

type AccountMenuType = {
  title?: string
  menuItems: AccountType[]
}

export const accountMenu: AccountMenuType[] = [
  {
    title: 'Account',
    menuItems: [
      {
        name: 'Overview',
        icon: 'ai-user-check',
        link: { name: 'account.overview' }
      },
      {
        name: 'Settings',
        icon: 'ai-settings',
        link: { name: 'account.settings' }
      },
      {
        name: 'Billing',
        icon: 'ai-wallet',
        link: { name: 'account.billing' }
      }
    ]
  },
  {
    title: 'Dashboard',
    menuItems: [
      {
        name: 'Orders',
        icon: 'ai-cart',
        link: { name: 'account.orders' }
      },
      {
        name: 'Earnings',
        icon: 'ai-activity',
        link: { name: 'account.earnings' }
      },
      {
        name: 'Chat',
        icon: 'ai-messages',
        link: { name: 'account.chat' },
        badge: '4'
      },
      {
        name: 'Favorites',
        icon: 'ai-heart',
        link: { name: 'account.favorites' }
      }
    ]
  }
]
