import { paymentElectronic, paymentMasterCard, paymentVisa } from '@/assets/icons'

export type AddressType = {
  id: number
  primary: boolean
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

export type PaymentMethodType = {
  type: string
  name?: string
  cardType?: string
  digits?: string
  expiration?: string
  status?: string
  description?: string
  email?: string
  icon?: any
}

export const addresses: AddressType[] = [
  {
    id: 1,
    primary: true,
    address: '314 Robinson Lane',
    city: 'Wilmington',
    state: 'DE',
    postalCode: '19805',
    country: 'USA'
  },
  {
    id: 2,
    primary: false,
    address: '401 Magnetic Drive Unit 2',
    city: 'Toronto',
    state: 'Ontario',
    postalCode: 'M3J 3H9',
    country: 'Canada'
  }
]

export const paymentMethod: PaymentMethodType[] = [
  {
    type: 'credit_card',
    name: 'Isabella Bocouse',
    cardType: 'Visa',
    digits: '9016',
    expiration: '03/24',
    status: 'Primary',
    icon: paymentVisa
  },
  {
    type: 'credit_card',
    name: 'Isabella Bocouse',
    cardType: 'MasterCard',
    digits: '4242',
    expiration: '01/25',
    icon: paymentMasterCard
  },
  {
    type: 'electronic_payment',
    name: 'Isabella Bocouse',
    description: 'Electronic payment system',
    email: 'bocouse@example.com',
    icon: paymentElectronic
  }
]
