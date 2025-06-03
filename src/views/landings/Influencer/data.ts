import image1 from '@/assets/img/landing/influencer/guides/01.jpg'
import image2 from '@/assets/img/landing/influencer/guides/02.jpg'
import image3 from '@/assets/img/landing/influencer/guides/03.jpg'

import instagramImg1 from '@/assets/img/landing/influencer/instagram/01.jpg'
import instagramImg2 from '@/assets/img/landing/influencer/instagram/02.jpg'
import instagramImg3 from '@/assets/img/landing/influencer/instagram/03.jpg'
import instagramImg4 from '@/assets/img/landing/influencer/instagram/04.jpg'
import instagramImg5 from '@/assets/img/landing/influencer/instagram/05.jpg'
import instagramImg6 from '@/assets/img/landing/influencer/instagram/06.jpg'
import instagramImg7 from '@/assets/img/landing/influencer/instagram/07.jpg'
import instagramImg8 from '@/assets/img/landing/influencer/instagram/08.jpg'

import testimonial1 from '@/assets/img/landing/influencer/testimonials/01.png'
import testimonial2 from '@/assets/img/landing/influencer/testimonials/02.png'
import type { GuidePricingType, SocialMediaPhotoType, TestimonialType } from '@/views/landings/Influencer/types'

export const guidePricingPlans: GuidePricingType[] = [
  {
    title: 'Effective weight loss',
    programs: 6,
    exercises: 230,
    price: 125.0,
    features: ['Ut nunc ultricies nibh blandit odio in.', 'Nibh viverra volutpat viverra.', 'Ac lacus ut viverra iaculis neque scelerisque.'],
    image: image1
  },
  {
    title: 'Beginner to expert guide',
    programs: 12,
    exercises: 400,
    price: 154.99,
    features: ['Nutrition guides for the best overall results.', 'Stretching routines.', 'Direct coaching and 24/7 access to community.'],
    image: image2
  },
  {
    title: 'Yoga for pregnancy',
    programs: 8,
    exercises: 420,
    price: 121.0,
    features: ['Adipiscing vulputate ever in potenti velit.', 'Non metus orci convallis posuere.', 'Dolor commodo dignissim pharetra tempor.'],
    image: image3
  }
]

export const instagramPhotos: SocialMediaPhotoType[] = [
  { likes: 2048, comments: 320, image: instagramImg1 },
  { likes: 1764, comments: 283, image: instagramImg2 },
  { likes: 4560, comments: 417, image: instagramImg3 },
  { likes: 1505, comments: 274, image: instagramImg4 },
  { likes: 3708, comments: 198, image: instagramImg5 },
  { likes: 2925, comments: 409, image: instagramImg6 },
  { likes: 1348, comments: 120, image: instagramImg7 },
  { likes: 963, comments: 98, image: instagramImg8 }
]

export const testimonials: TestimonialType[] = [
  {
    image: testimonial1,
    name: 'Wade Warren',
    comment: 'Odio risus amet amet tincidunt. Turpis nibh ultricies morbi porta ipsum adipiscing. Morbi magnis nunc in facilisis gravida adipiscing in elementum aliquet nunc.'
  },
  {
    image: testimonial2,
    name: 'Annete Smith',
    comment: 'Blandit facilisi eget feugiat ultricies. Id habitant lectus imperdiet amet elementum lectus lacus sit laoreet. Quis nullam. Gravida pretium iaculis lorem sit in elementum.'
  }
]
