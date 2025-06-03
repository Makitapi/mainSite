import product1 from '@/assets/img/shop/products/01.png'
import product2 from '@/assets/img/shop/products/02.png'
import product3 from '@/assets/img/shop/products/03.png'
import product4 from '@/assets/img/shop/products/04.png'
import product5 from '@/assets/img/shop/products/05.png'
import product6 from '@/assets/img/shop/products/06.png'
import marble from '@/assets/img/shop/pattern/marble.jpg'
import wood from '@/assets/img/shop/pattern/wood.jpg'

export type ColorsType = {
  name: string
  hex: string
  backgroundImage?: string
}

export type FavoritesType = {
  name: string
  image: string
  price: string
  discountedPrice?: string
  colors?: ColorsType[]
  status?: string
}

export const favorites: FavoritesType[] = [
  {
    name: 'Dispenser for soap',
    image: product2,
    price: '16.00'
  },
  {
    name: 'Loft style lamp',
    image: product1,
    price: '21.00',
    status: 'Sale',
    discountedPrice: '35.00',
    colors: [
      {
        name: 'Dark gray',
        hex: '#576071'
      },
      {
        name: 'Light gray',
        hex: '#d5d4d3'
      },
      {
        name: 'Blue',
        hex: '#a1b7d9'
      }
    ]
  },
  {
    name: 'Glossy round vase',
    image: product3,
    price: '15.00',
    colors: [
      {
        name: 'Light gray',
        hex: '#d5d4d3'
      },
      {
        name: 'Dark gray',
        hex: '#576071'
      },
      {
        name: 'Blue',
        hex: '#a1b7d9'
      }
    ]
  },
  {
    name: 'Living room table',
    image: product6,
    status: 'Out of stock',
    price: '46.00',
    colors: []
  },
  {
    name: 'Ceramic flower pot',
    image: product4,
    price: '19.00',
    colors: [
      {
        name: 'Gray concrete',
        hex: '#c0c0c0',
        backgroundImage: marble
      },
      {
        name: 'Beige',
        hex: '#d9c9a1'
      },
      {
        name: 'Blue',
        hex: '#a1b7d9'
      }
    ]
  },
  {
    name: 'Pendant lamp',
    image: product5,
    status: 'New',
    price: '22.00',
    colors: [
      {
        name: 'Gray',
        hex: '#bab8b7'
      },
      {
        name: 'Woody brown',
        hex: '#c0c0c0',
        backgroundImage: wood
      },
      {
        name: 'Gray marble',
        hex: '#c0c0c0',
        backgroundImage: marble
      }
    ]
  }
]
