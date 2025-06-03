import blog1 from '@/assets/img/landing/blog/01.jpg'
import blog2 from '@/assets/img/landing/blog/02.jpg'
import blog3 from '@/assets/img/landing/blog/03.jpg'

import grid1 from '@/assets/img/blog/grid/01.jpg'
import grid2 from '@/assets/img/blog/grid/02.jpg'
import grid3 from '@/assets/img/blog/grid/03.jpg'
import grid4 from '@/assets/img/blog/grid/04.jpg'
import grid5 from '@/assets/img/blog/grid/05.jpg'
import grid6 from '@/assets/img/blog/grid/06.jpg'

import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar6 from '@/assets/img/avatar/06.jpg'
import avatar8 from '@/assets/img/avatar/08.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar12 from '@/assets/img/avatar/12.jpg'

import author1 from '@/assets/img/landing/blog/authors/01.png'
import author2 from '@/assets/img/landing/blog/authors/02.png'
import author3 from '@/assets/img/landing/blog/authors/03.png'
import author4 from '@/assets/img/landing/blog/authors/04.png'
import author5 from '@/assets/img/landing/blog/authors/05.png'

import type { ArticleType, AuthorType, FeaturePostType, LatestPost } from '@/views/landings/Blog/types'

export const featurePosts: FeaturePostType[] = [
  {
    title: 'The fashion for eco bags with vintage prints will still be relevant for more than one year',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit...',
    share: 6,
    comment: 12,
    time: '12 hours ago',
    category: 'fashion',
    image: blog1,
    link: { name: 'blog.post-1' }
  },
  {
    title: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    description: 'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra etiam non, vitae tristique eu in morbi felis...',
    share: 13,
    comment: 8,
    time: '9 days ago',
    category: 'inspiration',
    image: blog2,
    link: { name: 'blog.post-1' }
  },
  {
    title: 'A session with a psychologist as a personal choice or a fashion trend in society',
    description: 'Purus lectus odio lacus nibh habitant ac sapien malesuada sed convallis adipiscing eget convallis amet enim diam tellus sodales ornare vitae molestie nulla tincidunt ac non facilisis faucibus...',
    share: 24,
    comment: 17,
    time: '2 weeks ago',
    category: 'psychology',
    image: blog3,
    link: { name: 'blog.post-1' }
  }
]

export const articles: ArticleType[] = [
  {
    title: 'Instagram trends that will definitely work and bring results in the new 2022',
    share: 4,
    comment: 6,
    time: '9 hours ago',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'A session with a psychologist as a personal choice or a fashion trend in society',
    share: 7,
    comment: 12,
    time: '2 days ago',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'Travel destinations to inspire and restore resources',
    share: 5,
    comment: 11,
    time: '3 days ago',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'How to look for inspiration for new goals in life and remember to give yourself a break?',
    share: 18,
    comment: 26,
    time: 'July 13, 2022',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'The 15 best books every person should read',
    share: 15,
    comment: 23,
    time: 'May 25, 2022',
    link: { name: 'blog.post-1' }
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar6,
    name: 'Jenny Wilson'
  },
  {
    image: avatar5,
    name: 'Darlene Robertson'
  },
  {
    image: avatar12,
    name: 'Guy Hawkins'
  },
  {
    image: avatar11,
    name: 'Lillia Black'
  },
  {
    image: avatar8,
    name: 'David Bocous'
  },
  {
    image: avatar12,
    name: 'Guy Hawkins'
  }
]

export const popularArticles: ArticleType[] = [
  {
    title: 'Top books for inspiration',
    description: 'Vulputate auctor lacus imperdiet facilisi tristique nisl pulvinar porta diam duis...',
    image: grid1,
    author: authorData[0],
    time: '12 hours ago',
    category: 'books',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'Ways to travel in 2022',
    description: 'Duis consectetur quis enim iaculis eu sagittis posuere imperdiet scelerisque...',
    image: grid2,
    author: authorData[1],
    time: '2 days ago',
    category: 'travel',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'Inspiration in quarantine',
    description: 'Nec in est vel ac et odio interdum risus maecenas pulvinar potenti gravida sed...',
    image: grid3,
    author: authorData[2],
    time: '1 week ago',
    category: 'inspiration',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'New series from Netflix',
    description: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse...',
    image: grid4,
    author: authorData[3],
    time: 'July 15, 2022',
    category: 'entertainment',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'How to look for inspiration?',
    description: 'Risus arcu urna nisl massa nec leo tesque ac suspendisse magna verot ipsum...',
    image: grid5,
    author: authorData[4],
    time: 'May 28, 2022',
    category: 'inspiration',
    link: { name: 'blog.post-1' }
  },
  {
    title: 'A psychologist as choice',
    description: 'Eu aenean euismod in tellus ipsum et natoque aliquam maecenas. Sed lectus...',
    image: grid6,
    author: authorData[5],
    time: 'April 14, 2022',
    category: 'psychology',
    link: { name: 'blog.post-1' }
  }
]

export const latestPosts: LatestPost[] = [
  {
    title: 'The 15 best books every person should read',
    description: 'Egestas neque sceleri semper sit at eu cursus faucibus velit cras aliquam sed dictum at at orci...',
    time: '12 hours ago',
    category: 'books',
    link: { name: 'blog.post-2' }
  },
  {
    title: 'Destinations to inspire and restore resources',
    description: 'Purus lectus odio lacus nibh habitant ac sapien malesuada sed convallis adipiscing eget convallis...',
    time: '3 days ago',
    category: 'travel',
    link: { name: 'blog.post-2' }
  },
  {
    title: 'The fashion for eco bags with vintage prints',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus...',
    time: '12 hours ago',
    category: 'fashion',
    link: { name: 'blog.post-2' }
  },
  {
    title: 'How to look for inspiration for new goals',
    description: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse dignissim...',
    time: '3 days ago',
    category: 'psychology',
    link: { name: 'blog.post-2' }
  }
]

export const topAuthors: AuthorType[] = [
  {
    image: author1,
    name: 'Jane Cooper',
    designation: 'Chief editor'
  },
  {
    image: author2,
    name: 'Darlene Robertson',
    designation: 'Marketing consultant'
  },
  {
    image: author3,
    name: 'Guy Hawkins',
    designation: 'Psychologist'
  },
  {
    image: author4,
    name: 'Cameron Williamson',
    designation: 'Fashion blogger'
  },
  {
    image: author5,
    name: 'Albert Flores',
    designation: 'Travel blogger'
  }
]

export const editorsPicks: ArticleType[] = [
  {
    title: 'The fashion for eco bags with vintage prints',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...',
    time: '12 hours ago',
    category: 'Fashion',
    author: authorData[3]
  },
  {
    title: 'How to look for inspiration for new goals',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...',
    time: '12 hours ago',
    category: 'Inspiration',
    author: authorData[1]
  },
  {
    title: 'Destinations to inspire and restore resources',
    description: 'Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse...',
    time: 'July 16, 2022',
    category: 'Travel',
    author: authorData[4]
  }
]
