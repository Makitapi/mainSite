export type CustomizerType = TypographyType &
  BorderRoundedType &
  Partial<Record<ColorType['variant'], ColorType['hex']>> & {
    preStyles: string | null
  }

export type ColorType = {
  name?: string
  hex: `#${string}`
  variant: 'primary' | 'warning' | 'info' | 'success' | 'danger'
}

type TypographyType = {
  url: string
  fontFamily: string
  rootFontSize: number
  bodyFontSize: number
}

type BorderRoundedType = {
  borderWidth: number
  roundedBase: number
  roundedSm: number
  roundedLg: number
  roundedXl: number
  roundedXxl: number
}

export const colors: ColorType[] = [
  {
    name: 'Primary',
    hex: '#0051a3',
    variant: 'primary'
  },
  {
    name: 'Warning',
    hex: '#edcb50',
    variant: 'warning'
  },
  {
    name: 'Info',
    hex: '#3f7fca',
    variant: 'info'
  },
  {
    name: 'Success',
    hex: '#3fca90',
    variant: 'success'
  },
  {
    name: 'Danger',
    hex: '#ed5050',
    variant: 'danger'
  }
]

export const colorKeys = colors.map((color) => color.variant)

export const typography: TypographyType = {
  url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  fontFamily: "'Inter', sans-serif",
  rootFontSize: 1,
  bodyFontSize: 1
}

export const rootFontSizes = [0.75, 0.875, 1, 1.05, 1.1, 1.15, 1.25, 1.375]
export const bodyFontSizes = [0.75, 0.875, 1, 1.15, 1.25, 1.375]

export const bordersNRounding: BorderRoundedType = {
  borderWidth: 1,
  roundedBase: 1,
  roundedSm: 0.75,
  roundedLg: 1.125,
  roundedXl: 1.5,
  roundedXxl: 2.25
}

export const defaultConfig = {
  primary: '#0051a3',
  warning: '#edcb50',
  info: '#3f7fca',
  success: '#3fca90',
  danger: '#ed5050',
  url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  fontFamily: "'Inter', sans-serif",
  rootFontSize: 1,
  bodyFontSize: 1,
  borderWidth: 1,
  roundedBase: 1,
  roundedSm: 0.75,
  roundedLg: 1.125,
  roundedXl: 1.5,
  roundedXxl: 2.25,
  preStyles: null,
  'theme-primary': '#62c6a5',
  'theme-primary-rgb': '98,198,165',
  'theme-primary-btn-hover-active-border-bg-color': '#49ad8c',
  'theme-theme-link-hover-color': '#49ad8c',
  'theme-theme-accordion-btn-active-icon': "url(\"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%2362c6a5'%3e%3cpath%20d='M.5%206.3c.6-.6%201.6-.6%202.3%200l9.3%209.3%209.3-9.3c.6-.6%201.6-.6%202.3%200%20.6.6.6%201.6%200%202.3L13.3%2018.8c-.6.6-1.6.6-2.3%200L.8%208.5c-.9-.8-.9-1.6-.3-2.2z'/%3e%3c/svg%3e\")"
}
