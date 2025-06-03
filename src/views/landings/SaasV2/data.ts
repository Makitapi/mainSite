import avatar30 from '@/assets/img/avatar/30.jpg'
import avatar31 from '@/assets/img/avatar/31.jpg'
import avatar32 from '@/assets/img/avatar/32.jpg'
import resource1 from '@/assets/img/landing/saas-2/resources/01.jpg'
import resource2 from '@/assets/img/landing/saas-2/resources/02.jpg'
import resource3 from '@/assets/img/landing/saas-2/resources/03.jpg'
import type { AuthorType, ResourceType, TestimonialType } from '@/views/landings/SaasV2/types'

const authorData: AuthorType[] = [
  {
    image: avatar30,
    name: 'Jenny Wilson',
    designation: 'Head of Marketing'
  },
  {
    image: avatar31,
    name: 'Esther Howard',
    designation: 'CEO, Co-Founder'
  },
  {
    image: avatar32,
    name: 'Nick Wenirten',
    designation: 'Web Developer'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    author: authorData[0],
    comment: '"Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze data quickly, efficiently."'
  },
  {
    author: authorData[1],
    comment: '"Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa."'
  },
  {
    author: authorData[2],
    comment: '"Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris."'
  }
]

const categories: string[] = ['Analytics']

export const resourceData: ResourceType[] = [
  {
    title: 'Analytics for the HR department for the Klinos company',
    description: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra molestie fames...',
    share: 6,
    comment: 12,
    time: '12 hours ago',
    image: resource1,
    category: categories[0]
  },
  {
    title: 'Analytics for the Marketing department of Fast Inc.',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Laoreet sem adipiscing sollicitudin erat massa...',
    share: 10,
    comment: 19,
    time: '3 days ago',
    image: resource2,
    category: categories[0]
  },
  {
    title: 'Research data structuring and presentation in diagrams',
    description: 'Egestas in neque scelerisque semper sit at eu cursus faucibus velit cras at aliquam sed dictum at at orci curabitur dictumst viverra non pharetra...',
    share: 21,
    comment: 37,
    time: '5 days ago',
    image: resource3,
    category: categories[0]
  }
]
