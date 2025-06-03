export type AuthorType = {
  image: string
  name: string
  designation: string
}

export type TestimonialType = {
  comment: string
  author: AuthorType
}

export type TestimonialsSliderType = {
  slides: TestimonialType[]
}

export type ServiceType = {
  description: string
  icon: string
  title: string
}
export type BenefitType = {
  description: string
  title: string
  number?: string
}
