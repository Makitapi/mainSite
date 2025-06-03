import { toggleDocumentAttribute } from '@/helpers/layout'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

type ThemeType = {
  mode: 'light' | 'dark'
}

const themeKey = 'data-bs-theme'

export const useThemeStore = defineStore('theme_store', () => {
  const theme = useLocalStorage<ThemeType>(themeKey, { mode: 'light' })

  const toggleTheme = () => {
    if (theme.value.mode === 'dark') setLight()
    else setDark()
  }

  const setDark = () => {
    theme.value.mode = 'dark'
    toggleDocumentAttribute(themeKey, 'dark')
  }

  const setLight = () => {
    theme.value.mode = 'light'
    toggleDocumentAttribute(themeKey, 'light')
  }

  const setTheme = (newTheme?: ThemeType['mode']) => {
    const currTheme = newTheme ?? theme.value.mode
    if (currTheme === 'dark') setDark()
    else setLight()
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
})
