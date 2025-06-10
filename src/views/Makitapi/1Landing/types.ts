export interface ImageType {
  light: string
  dark: string
}

export interface ToolType {
  image: ImageType
  alt: string
  delay: number
}

export interface ClientType {
  image: ImageType
  name: string
}

export interface CompanyImageType {
  imageSwap: string
  light: string
  dark: string
  width: number
}

export interface AuthorType {
  image: string
  name: string
  designation: string
  company: {
    image: CompanyImageType
  }
}

export interface ProjectType {
  title: string
  image: string
  category: string
  year: number
  link?: {
    name: string
  }
}

export interface SocialMediaType {
  icon: string
  name: string
}

export interface MemberType {
  image: string
  name: string
  designation: string
  socialMedia: SocialMediaType[]
}

export interface ServiceType {
  image: string
  title: string
  description: string
}

export interface IndustryType {
  image: string
  title: string
  description: string
  key: string
}

export interface CaseStudyHighlightType {
  value: string
  label: string
}

export interface CaseStudyType {
  image: string
  title: string
  description: string
  highlights: CaseStudyHighlightType[]
}

export interface TestimonialType {
  author: AuthorType
  comment: string
}
