export type ContactType = {
  name: string
  avatar?: string
  message: string
  timestamp: string
  unreadMessages?: number
  image?: string
  isActive?: boolean
  bgColor?: string
  isOnline?: boolean
}

export type Message = {
  avatar: string
  content: any
  timestamp: string
  isSentByCurrentUser: boolean
  isRead?: boolean
  isReceived?: boolean
}

export type messageType = {
  date: string
  messages: Message[]
  id?: number
}
