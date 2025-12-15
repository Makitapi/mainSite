export interface Language {
  code: string
  name: string
  enabled: boolean
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    enabled: true
  },
  {
    code: 'pt',
    name: 'Português',  
    enabled: true
  },
  {
    code: 'es',
    name: 'Español',
    enabled: false
  }
]

export const enabledLanguages = languages.filter(lang => lang.enabled)
