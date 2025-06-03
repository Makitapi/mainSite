import grid1Img from '@/assets/img/blog/grid/01.jpg'
import grid2Img from '@/assets/img/blog/grid/02.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar12Img from '@/assets/img/avatar/12.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import avatar5Img from '@/assets/img/avatar/05.jpg'
import sidebar1 from '@/assets/img/blog/sidebar/01.jpg'
import sidebar2 from '@/assets/img/blog/sidebar/02.jpg'
import sidebar3 from '@/assets/img/blog/sidebar/03.jpg'
import type { LinkType } from '@/types'

export type PostType = {
  time: string
  category: string
  title: string
  image?: string
  content: string
  author: {
    name: string
    avatar: string
  }
  link: LinkType
}

export type TrendingType = {
  title: string
  image: string
  date: string
  link: LinkType
}

export const postsData: PostType[] = [
  {
    time: '9 hours ago',
    category: 'Brand strategy',
    title: 'Business strategy for a brand of vintage bags',
    content: 'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...',
    author: {
      name: 'Darlene Robertson',
      avatar: avatar5Img
    },
    link: {
      name: 'blog.post-1'
    }
  },
  {
    time: '12 hours ago',
    category: 'Books',
    image: grid1Img,
    title: 'Top books for inspiration',
    content: 'Vulputate auctor lacus imperdiet facilisi tristique nisl pulvinar porta diam duis odio',
    author: {
      name: 'Jenny Wilson',
      avatar: avatar6Img
    },
    link: {
      name: 'blog.post-2'
    }
  },
  {
    time: 'July 16, 2022',
    category: 'Inspiration',
    title: 'How to look for inspiration for new goals',
    content: 'Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero pulvinar elit vulputate...',
    author: {
      name: 'Guy Hawkins',
      avatar: avatar12Img
    },
    link: {
      name: 'blog.post-3'
    }
  },
  {
    time: 'June 10, 2022',
    category: 'Ecommerce',
    title: 'Sales on social networks for the eco cosmetics',
    content: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit commodo dignissim...',
    author: {
      name: 'Lillia Black',
      avatar: avatar11Img
    },
    link: {
      name: 'blog.post-1'
    }
  },
  {
    time: 'January 9, 2022',
    category: 'Travel',
    title: 'Ways to travel in 2022',
    image: grid2Img,
    content: 'Duis consectetur quis enim iaculis eu sagittis posuere imperdiet scelerisque',
    author: {
      name: 'Darlene Robertson',
      avatar: avatar5Img
    },
    link: {
      name: 'blog.post-2'
    }
  },
  {
    time: 'December 15, 2022',
    category: 'Inspiration',
    title: 'Destinations to inspire and restore resources',
    content: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis...',
    author: {
      name: 'Jenny Wilson',
      avatar: avatar6Img
    },
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

export const socialICon = ['instagram', 'facebook', 'telegram', 'x']
