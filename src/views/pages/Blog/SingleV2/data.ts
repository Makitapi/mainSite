import avatar8Img from '@/assets/img/avatar/08.jpg'
import avatar11Img from '@/assets/img/avatar/11.jpg'
import avatar10Img from '@/assets/img/avatar/10.jpg'
import avatar7Img from '@/assets/img/avatar/07.jpg'
import list1Img from '@/assets/img/blog/list/01.jpg'
import list4Img from '@/assets/img/blog/list/04.jpg'
import list6Img from '@/assets/img/blog/list/06.jpg'
import list5Img from '@/assets/img/blog/list/05.jpg'
import type { LinkType } from '@/types'

export type CommentType = {
  author: AuthorType
  timestamp: string
  content: string
  reply?: ReplyType
}

export type ReplyType = {
  author: AuthorType
  timestamp: string
  content: string
  name: string
}

export type TrendingPostType = {
  id: number
  title: string
  link: LinkType
}

export type BlogType = {
  title: string
  image: string
  link: string
}

type AuthorType = {
  name: string
  avatar: string
}

export const blogData: BlogType[] = [
  {
    title: 'The fashion for eco bags with vintage prints will still be relevant for more than one year',
    image: list1Img,
    link: 'blog.post-1'
  },
  {
    title: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    image: list4Img,
    link: 'blog.post-3'
  },
  {
    title: 'A session with a psychologist as a personal choice or a fashion trend in society',
    image: list6Img,
    link: 'blog.post-2'
  },
  {
    title: 'Top 10 best TV shows on Netflix for your next weekend',
    image: list5Img,
    link: 'blog.post-3'
  }
]

const author: AuthorType[] = [
  {
    name: 'Albert Flores',
    avatar: avatar8Img
  },
  {
    name: 'Jenny Wilson',
    avatar: avatar11Img
  },
  {
    name: 'Ralph Edwards',
    avatar: avatar10Img
  },
  {
    name: 'Esther Howard',
    avatar: avatar7Img
  }
]

export const commentsData: CommentType[] = [
  {
    author: author[0],
    timestamp: '5 hours ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus lectus, tempus eu urna eu, imperdiet dignissim augue. Aliquam fermentum est a ligula bibendum, ac gravida ipsum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur suscipit quam ut velit condimentum, nec mollis risus semper. Curabitur quis mauris eget ligula tincidunt venenatis. Sed congue pulvinar hendrerit.'
  },
  {
    author: author[1],
    timestamp: '2 days ago at 9:20',
    content: 'Pellentesque urna pharetra, quis maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque imperdiet montes mauris massa elit pretium elementum eget tortor quis',
    reply: {
      author: author[2],
      timestamp: '2 days ago at 11:45',
      name: '@Jenny Wilson',
      content: 'Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non turpis nibh turpis ullamcorper est porttitor.'
    }
  },
  {
    author: author[3],
    timestamp: 'May 19, 2022',
    content: 'Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla, quis tempor sapien neque at nisl. Aliquam eu nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum elementum sit amet. Vivamus non ante nisl. Nunc faucibus velit at eros mollis semper.'
  }
]

export const list: string[] = ['Quam laoreet eget id sapien', 'Morbi convallis suspendisse', 'Vivamus non ante', 'Praesent dignissim efficitur', 'Gravida a mi neque']

export const tag: string[] = ['Nature', 'Books', 'travel']
