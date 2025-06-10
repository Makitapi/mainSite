import Post1 from '@/assets/img/blog/Post1.jpeg'
import Post2 from '@/assets/img/blog/Post2.jpeg'
import Post3 from '@/assets/img/blog/post4.jpg'



import sidebar1 from '@/assets/img/blog/sidebar/01.jpg'
import sidebar2 from '@/assets/img/blog/sidebar/02.jpg'
import sidebar3 from '@/assets/img/blog/sidebar/03.jpg'
import type { LinkType } from '@/types'

export type BlogPostType = {
  title: string
  image: string
  firstLine: string
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
}

export const blogPostList: BlogPostType[] = [
  {
    title: 'How to Start an RFID Program for Intralogistics',
    image: Post1,
    firstLine: "Radio Frequency Identification (RFID) technology is transforming warehouse and distribution center operations by providing real-time visibility into inventory movement and location. Starting an RFID program for intralogistics requires careful planning and a phased approach to ensure successful implementation.",
    shares: 10,
    comments: 4,
    date: 'April 2025',
    category: 'Books',
    link: {
      name: 'blog.post-1'
    }
  },
  {
    title: 'Accuracy First, Speed Second: Rethinking Priorities in the Supply Chain',
    image: Post2,
    firstLine: '“Ship in, ship out.” That phrase often captures the urgency felt in supply chain operations. There’s a strong and understandable impulse to prioritize speed—get products out the door, fill orders fast, and keep things moving. But in the race for efficiency, we often compromise on something more foundational: accuracy.',
    shares: 11,
    comments: 3,
    date: 'May 2025',
    category: 'Marketing',
    link: {
      name: 'blog.post-2'
    }
  },
  {
    title: 'Know Thyself, Focus on You: Data-Driven Intralogistics Is the Competitive Edge',
    image: Post3,
    firstLine: "When businesses think about improving supply chain performance, the focus often jumps to transportation or last-mile delivery. But before any product reaches a truck or doorstep, it travels a more crucial path: inside your warehouse. This is where intralogistics—and more importantly, data about intralogistics—becomes the real competitive differentiator.",
    shares: 8,
    comments: 12,
    date: 'June 2025',
    category: 'Business',
    link: {
      name: 'blog.post-3'
    }
  },
  // {
  //   title: "It's a Lot About Data: How AI and Clean Data are Transforming the Supply Chain",
  //   image: Post4,
  //   firstLine: "When we think about supply chains, we often focus on trucks, warehouses, shipping containers, and inventory. At its core, supply chain management is about moving items from point A to point B. But underneath that physical movement lies a foundation that's arguably even more critical: data.",
  //   shares: 8,
  //   comments: 5,
  //   date: 'July 2025',
  //   category: 'Travel',
  //   link: {
  //     name: 'blog.post-4'
  //   }
  // },
  // {
  //   title: "The Power of Data in Optimizing Intralogistics and Warehouse Management",
  //   image: Post5,
  //   firstLine: "Intralogistics is the backbone of any efficient supply chain, focusing on the internal flow of goods and information within a warehouse or distribution center. While it's easy to get caught up in the physical movement of materials, the true power behind optimizing intralogistics lies in data—specifically, how data drives material flow, warehouse management, and overall operational efficiency.",
  //   shares: 8,
  //   comments: 5,
  //   date: 'August 2025',
  //   category: 'Travel',
  //   link: {
  //     name: 'blog.post-5'
  //   }
  // },
]

export const trendingPost: TrendingType[] = [
  {
    title: 'Instagram trends that will definitely work',
    image: sidebar1,
    date: '13 hours ago'
  },
  {
    title: 'A session with a psychologist',
    image: sidebar2,
    date: 'May 12, 2022'
  },
  {
    title: 'How to look for inspiration for new goals',
    image: sidebar3,
    date: 'June 10, 2022'
  }
]
