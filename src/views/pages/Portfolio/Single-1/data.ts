import list6Img from '@/assets/img/portfolio/list/06.png'
import list8Img from '@/assets/img/portfolio/list/08.png'
import list9Img from '@/assets/img/portfolio/list/09.png'

export type ListType = {
  title: string
  details: string[]
}

export const listData: ListType[] = [
  {
    title: 'Company',
    details: ['Vintage', '12-18 employees', 'Dublin, Ireland']
  },
  {
    title: 'Industry',
    details: ['E-commerce']
  },
  {
    title: 'Services',
    details: ['Email marketing', 'Content marketing', 'Social networks']
  },
  {
    title: 'Time spent',
    details: ['2021, 3 months']
  }
]

export const descriptionData = [
  {
    title: 'About the client',
    content: 'Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur. Vel magna sit aliquet viverra morbi massa mattis urna, feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis dolor. Morbi et massa fames ac scelerisque sit commodo dignissim faucibus quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit interdum lorem proin pretium dictum urna suspendisse quis risus et.'
  },
  {
    title: 'The challenge',
    content: 'Sit diam nunc, et pellentesque ornare elit, ut. Interdum feugiat id ut egestas tellus congue faucibus habitant semper nunc et etiam ultrices id nisi urna amet, odio mauris risus nam aliquam pharetra amet nunc, enim aliquet egestas purus penatibus ac, elit ultricies proin adipiscing suspendisse sit proin.'
  },
  {
    title: 'The solution',
    content:
      'Est enim mollis morbi vulputate egestas commodo vitae quis sed sit ultrices nulla habitant sit faucibus orci. Eu etiam ipsum porttitor morbi urna eget aliquet aenean tristique amet tempus, vestibulum vel montes, pellentesque sit. Cursus nulla viverra elit accumsan, vitae. Phasellus sed hac at pharetra urna. Imperdiet egestas ac eget porttitor ultrices morbi ornare. Libero, lectus eget adipiscing odio ornare non maecenas non vitae libero, at feugiat urna, risus augue fringilla. Venenatis quam.'
  }
]

export const resultData = [
  {
    number: '1200+',
    description: 'leads for $2.1'
  },
  {
    number: '130%',
    description: 'revenue increase'
  },
  {
    number: '124+',
    description: 'new posts'
  }
]

export type PortfolioCaseStudiesType = {
  title: string
  image: string
  backgroundColor?: `#${string}`
  description: string
  variant?: string
}

export const portfolioCaseStudies: PortfolioCaseStudiesType[] = [
  {
    title: 'Development of an application for a national bank',
    image: list6Img,
    description: 'Non purus odio venenatis velit sed tellus sed ultrices neque adipiscing sit turpis lacus, aenean sed luctus adipiscing ut orci molestie arcu, sapien sed.',
    variant: 'info'
  },
  {
    title: 'Landing page for a marketing agency Boost',
    image: list8Img,
    description: 'Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur vel magna sit aliquet viverra morbi massa mattis urna, feugiat egestas tincidunt.',
    variant: 'danger'
  },
  {
    title: 'Development of an application for a task tracker',
    image: list9Img,
    description: 'Egestas ultrices condimentum consectetur massa aliquam volutpat pulvinar aliquet nisi quam. Nibh commodo tristique nisi, justo, sed maecenas lectus ut nec.',
    backgroundColor: '#d7e4f4'
  }
]
