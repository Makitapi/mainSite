import avatar1 from '@/assets/img/avatar/01.jpg'
import avatar5 from '@/assets/img/avatar/05.jpg'
import avatar6 from '@/assets/img/avatar/06.jpg'
import avatar8 from '@/assets/img/avatar/08.jpg'
import avatar9 from '@/assets/img/avatar/09.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar19 from '@/assets/img/avatar/19.jpg'
import avatar20 from '@/assets/img/avatar/20.jpg'

import type { ContactType, messageType } from '@/views/account/Chat/types'

export const contacts: ContactType[] = [
  {
    name: 'Mikaela Collins',
    image: avatar6,
    message: 'Thank you for ...',
    timestamp: '15:01',
    unreadMessages: 2,
    isOnline: true
  },
  {
    name: 'Robert Fox',
    image: avatar8,
    message: 'Documents have ...',
    timestamp: '13:10',
    unreadMessages: 3
  },
  {
    name: 'Furry Aocklen',
    avatar: 'FA',
    message: 'I got it, thanks 👍',
    timestamp: '12:04',
    bgColor: 'primary'
  },
  {
    name: 'Mark Virgows',
    image: avatar19,
    message: 'Ac aliquam victoria ...',
    timestamp: '11:36',
    isActive: true,
    isOnline: true
  },
  {
    name: 'Nadia Davidson',
    avatar: 'ND',
    message: 'Nullam id devices ...',
    timestamp: '20 hr',
    bgColor: 'info'
  },
  {
    name: 'Alica Hawkins',
    image: avatar9,
    message: 'Massa laoreet molit ...',
    timestamp: '23 hr'
  },
  {
    name: 'Natalia Bocous',
    image: avatar5,
    message: 'Awesome 🚀',
    timestamp: '2 days',
    isOnline: true
  },
  {
    name: 'Marry Black',
    image: avatar20,
    message: 'I have great news!',
    timestamp: '3 days'
  },
  {
    name: 'Jerome Bell',
    image: avatar10,
    message: 'Ok 👌',
    timestamp: 'May 21',
    isOnline: true
  },
  {
    name: 'Jerome Bell',
    image: avatar11,
    message: 'Do you know how ...',
    timestamp: '2 days'
  }
]

export const messages: messageType[] = [
  {
    id: 1,
    date: 'May 27, 2023',
    messages: [
      {
        avatar: avatar19,
        content: 'Thank you for recommending me as a designer. I have an interview tomorrow!',
        timestamp: '11:32 am',
        isSentByCurrentUser: false
      },
      {
        avatar: avatar1,
        content: 'Oh no thanks! I just know that you are a great specialist!',
        timestamp: '2:18 pm',
        isSentByCurrentUser: true,
        isRead: true
      }
    ]
  },
  {
    id: 2,
    date: 'May 29, 2023',
    messages: [
      {
        avatar: avatar19,
        content: "I have great news, I've been hired! 🚀\nThanks again!",
        timestamp: '4:04 am',
        isSentByCurrentUser: false
      },
      {
        avatar: avatar1,
        content: 'You are welcome!',
        timestamp: '2:18 pm',
        isSentByCurrentUser: true,
        isReceived: true
      }
    ]
  },
  {
    id: 3,
    date: 'Today',
    messages: [
      {
        avatar: avatar19,
        content: "I'm so happy to be part of the team and work with you on this new exciting project. Can't thank you enough 😊",
        timestamp: '10:17 am',
        isSentByCurrentUser: false
      }
    ]
  }
]
