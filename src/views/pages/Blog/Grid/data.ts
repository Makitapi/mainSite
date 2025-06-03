import grid1Img from '@/assets/img/blog/grid/01.jpg'
import grid2Img from '@/assets/img/blog/grid/02.jpg'
import grid3Img from '@/assets/img/blog/grid/03.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar12Img from '@/assets/img/avatar/12.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import avatar5Img from '@/assets/img/avatar/05.jpg'
import avatar8Img from '@/assets/img/avatar/08.jpg'
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

export const blogPost: PostType[] = [
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
    title: 'Top books for inspiration',
    image: grid1Img,
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
    time: '13 hours ago',
    category: 'Fashion',
    title: 'The fashion for eco bags with vintage prints',
    content: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis vel nisl lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed felis...',
    author: {
      name: 'Lillia Black',
      avatar: avatar11Img
    },
    link: {
      name: 'blog.post-3'
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
      name: 'blog.post-1'
    }
  },
  {
    time: 'May 12, 2022',
    category: 'Ecommerce',
    title: 'Promotion of an online store from scratch, first sales',
    content: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam fermentum diam natoque scelerisque viverra molestie fames...',
    author: {
      name: 'David Bocous',
      avatar: avatar8Img
    },
    link: {
      name: 'blog.post-2'
    }
  },
  {
    time: 'June 10, 2022',
    category: 'Inspiration',
    title: 'Sales on social networks for the eco cosmetics',
    content: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque sit commodo dignissim...',
    author: {
      name: 'Lillia Black',
      avatar: avatar11Img
    },
    link: {
      name: 'blog.post-3'
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
      name: 'blog.post-1'
    }
  },
  {
    time: 'October 10, 2022',
    category: 'Inspiration',
    title: 'Inspiration in quarantine',
    image: grid3Img,
    content: 'Nec in est vel ac et odio interdum risus maecenas pulvinar potenti gravida sed',
    author: {
      name: 'Guy Hawkins',
      avatar: avatar12Img
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
      name: 'blog.post-3'
    }
  }
]
