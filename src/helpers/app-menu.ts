import type { MenuItemType } from '@/assets/menu-items'
import type { Ref } from 'vue'
import type { RouteParamsRaw, RouteRecordName } from 'vue-router'

type LinkType = {
  name?: string
  to?: string
  params?: RouteParamsRaw
}

type MenuItem = {
  id?: string
  label: string
  image?: string
  isNew?: string
  key: string
  link: LinkType
}

export const isActiveMenuItem = (activeMenuItems: any, itemKey: string): boolean => {
  return activeMenuItems && Object.values(activeMenuItems).includes(itemKey)
}

export const navbarStuck = () => {
  const navbar = document.querySelector('.navbar.fixed-top') as HTMLElement
  if (navbar) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.classList.add('navbar-stuck')
    } else {
      navbar.classList.remove('navbar-stuck')
    }
  }
}

export const toggleVisibility = (target: string, state: Ref<string>) => {
  state.value = state.value === target ? '' : target
}

export const makeChunks = (arr: any[], chunkSize = 2): MenuItem[][] => {
  const newArr: MenuItem[][] = []
  const arrWithId = arr.map((item, index) => ({ ...item, id: index }))
  const chunkLength = Math.ceil(arrWithId.length / chunkSize)

  for (let i = 0; i < arrWithId.length; i += chunkLength) {
    const chunk = arrWithId.slice(i, i + chunkLength)
    newArr.push(chunk)
  }
  return newArr
}

export const getMenuItemFromURL = (items: MenuItemType | MenuItemType[], link: RouteRecordName | null | undefined): MenuItemType | undefined => {
  if (items instanceof Array) {
    for (const item of items) {
      for (const children of item.children ?? []) {
        const foundItem = getMenuItemFromURL(children, link)
        if (foundItem) {
          return foundItem
        }
      }
    }
  } else {
    if (items.link?.name == link) return items
    if (items.children != null) {
      for (const item of items.children) {
        if (item.link?.name == link) return item
      }
    }
  }
}

export const findMenuItem = (menuItems: MenuItemType[] | undefined, menuItemKey: MenuItemType['key'] | undefined): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (const item of menuItems) {
      if (item.key === menuItemKey) {
        return item
      }
      const found = findMenuItem(item.children, menuItemKey)
      if (found) return found
    }
  }
  return null
}

export const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
  let parents: string[] = []
  const parent = findMenuItem(menuItems, menuItem.parentKey)

  if (parent) {
    parents.push(parent.key)
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  return parents
}

export const menuActivation = (data: MenuItemType[], activeItems: Ref<object>, currentRouteName: RouteRecordName | null | undefined) => {
  const matchingMenuItem = getMenuItemFromURL(data, currentRouteName)

  if (matchingMenuItem) {
    const activeMt = findMenuItem(data, matchingMenuItem.key)
    if (activeMt) {
      activeItems.value = [activeMt['key'], ...findAllParent(data, activeMt)]
    }
  }
}
