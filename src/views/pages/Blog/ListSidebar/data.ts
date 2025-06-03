import list1Img from '@/assets/img/blog/list/01.jpg'
import list2Img from '@/assets/img/blog/list/02.jpg'
import list3Img from '@/assets/img/blog/list/03.jpg'
import list4Img from '@/assets/img/blog/list/04.jpg'
import list5Img from '@/assets/img/blog/list/05.jpg'
import sidebar1 from '@/assets/img/blog/sidebar/01.jpg'
import sidebar2 from '@/assets/img/blog/sidebar/02.jpg'
import sidebar3 from '@/assets/img/blog/sidebar/03.jpg'
import type { LinkType } from '@/types'

export type BlogPostType = {
  title: string
  image: string
  expert: string
  shares: number
  comments: number
  date: string
  category: string
  link: LinkType
}

export type TrendingType = {
  title: string
  image: string
  date: string
  link: LinkType
}

export const blogPostList: BlogPostType[] = [
  {
    title: 'Business strategy for a brand of vintage bags',
    image: list1Img,
    expert: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque fames velit diam sit...',
    shares: 6,
    comments: 12,
    date: '8 hours ago',
    category: 'Business',
    link: {
      name: 'blog.post-1'
    }
  },
  {
    title: 'Top books for inspiration',
    image: list2Img,
    expert: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra viverra molestie fames...',
    shares: 10,
    comments: 4,
    date: '12 hours ago',
    category: 'Books',
    link: {
      name: 'blog.post-2'
    }
  },
  {
    title: 'Destinations to inspire and restore resources',
    image: list3Img,
    expert: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames...',
    shares: 8,
    comments: 5,
    date: 'April 25, 2022',
    category: 'Travel',
    link: {
      name: 'blog.post-3'
    }
  },
  {
    title: 'Promotion of an online store from scratch, first sales',
    image: list4Img,
    expert: 'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit...',
    shares: 11,
    comments: 3,
    date: 'May 12, 2022',
    category: 'Marketing',
    link: {
      name: 'blog.post-1'
    }
  },
  {
    title: 'New series from Netflix',
    image: list5Img,
    expert: 'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra etiam non, vitae tristique eu in morbi felis morbi nulla fermentum diam natoque...',
    shares: 19,
    comments: 7,
    date: 'December 15, 2022',
    category: 'TV shows',
    link: {
      name: 'blog.post-2'
    }
  }
]

export const trendingPost: TrendingType[] = [
  {
    title: 'Instagram trends that will definitely work',
    image: sidebar1,
    date: '13 hours ago',
    link: {
      name: 'blog.post-1'
    }
  },
  {
    title: 'A session with a psychologist',
    image: sidebar2,
    date: 'May 12, 2022',
    link: {
      name: 'blog.post-2'
    }
  },
  {
    title: 'How to look for inspiration for new goals',
    image: sidebar3,
    date: 'June 10, 2022',
    link: {
      name: 'blog.post-3'
    }
  }
]
