import google from '@/assets/img/landing/saas-3/tools/google.svg'
import zoom from '@/assets/img/landing/saas-3/tools/zoom.svg'
import slack from '@/assets/img/landing/saas-3/tools/slack.svg'
import gmail from '@/assets/img/landing/saas-3/tools/gmail.svg'
import trello from '@/assets/img/landing/saas-3/tools/trello.svg'
import mailchimp from '@/assets/img/landing/saas-3/tools/mailchimp.svg'
import dropbox from '@/assets/img/landing/saas-3/tools/dropbox.svg'
import evernote from '@/assets/img/landing/saas-3/tools/evernote.svg'

import avatar44 from '@/assets/img/avatar/44.jpg'
import avatar45 from '@/assets/img/avatar/45.jpg'
import avatar46 from '@/assets/img/avatar/46.jpg'
import avatar47 from '@/assets/img/avatar/47.jpg'
import avatar48 from '@/assets/img/avatar/48.jpg'
import avatar49 from '@/assets/img/avatar/49.jpg'

import { analytics, comment, mode, notification, security, subTasks } from '@/assets/icons'

import type { AuthorType, FeatureType, TestimonialType, ToolsType } from '@/views/landings/SaasV3/types'

export const tools: ToolsType[] = [
  {
    image: google,
    title: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis volutpat.'
  },
  {
    image: zoom,
    title: 'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.'
  },
  {
    image: slack,
    title: 'Donec blandit nulla elementum eu. Est dui nibh eget amet curabitur nunc.'
  },
  {
    image: gmail,
    title: 'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.'
  },
  {
    image: trello,
    title: 'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.'
  },
  {
    image: mailchimp,
    title: 'Turpis fermentum, volutpat ultrices sed ultrices proin risus bibendum elit purus.'
  },
  {
    image: dropbox,
    title: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.'
  },
  {
    image: evernote,
    title: 'Arcu, lorem facilisis nunc tellus, molestie urna nam mi, ullamcorper tempus quis.'
  }
]

export const features: FeatureType[] = [
  {
    title: 'Comments on tasks',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit in the justo eget maximus accumsan lorem ligula malesuada.',
    svg: comment
  },
  {
    title: 'Tasks analytics',
    description: 'Non imperdiet facilisis nulla tellus morbi scelerisque eget adipiscing out vulputate convallis justo sed tellus vehicula.',
    svg: analytics
  },
  {
    title: 'Light / dark mode',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam inrean mauris ultrices interdum congue ut, dictum et tortor.',
    svg: mode
  },
  {
    title: 'Notifications',
    description: 'Diam, suspendisse velitcras ac. Lobortis diam volutpat, eget pellentesque viverra inter vivamus id porta fermentum turpis.',
    svg: notification
  },
  {
    title: 'Sections & subtasks',
    description: 'Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus porttitor tincidunt sapien luctus tristique quam aenean accumsan.',
    svg: subTasks
  },
  {
    title: 'Data security',
    description: 'Aliquam malesuada neque eget elit nulla vestibulum nunc cras. Neque, morbi non arcu sapien luctus ullamcorper lectus efficitur.',
    svg: security
  }
]

const authorData: AuthorType[] = [
  {
    image: avatar44,
    name: 'Nadia Miles'
  },
  {
    image: avatar45,
    name: 'Eleanor Pena'
  },
  {
    image: avatar46,
    name: 'Ralph Edwards'
  },
  {
    image: avatar47,
    name: 'Albert Flores'
  },
  {
    image: avatar48,
    name: 'Jenny Wilson'
  },
  {
    image: avatar49,
    name: 'Esther Howard'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    author: authorData[0],
    comment: `"Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus tortor quis eleifend."`
  },
  {
    author: authorData[1],
    comment: `"Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus tortor quis eleifend."`
  },
  {
    author: authorData[2],
    comment: `"Morbi ut aliquam etiam luctus feugiat ultrices. Amet pellentesque sagittis, consequat id egestas tristique turpis. Arcu odio ultricies blandit eu neque."`
  },
  {
    author: authorData[3],
    comment: `"Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus cursus."`
  },
  {
    author: authorData[4],
    comment: `"Morbi ut aliquam etiam luctus feugiat ultrices. Amet pellentesque sagittis, consequat id egestas tristique turpis. Arcu odio ultricies blandit eu neque."`
  },
  {
    author: authorData[5],
    comment: `"Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus tortor quis eleifend."`
  }
]
