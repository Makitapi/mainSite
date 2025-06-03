import type { LinkType } from '@/types/index'

export type IdType = string

export type CategoryType = {
  id: IdType
  name: string
  image?: string
}

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type SaleType = {
  endsOn?: Date
} & (
  | {
      type: 'percent'
      discount: NumberRange<1, 101>
    }
  | {
      type: 'amount'
      discount: number
    }
)

export type ReviewType = {
  count: number
  stars: number
}

type ColorType = {
  name: string
  code: string
}

export type ProductAttributesType = {
  colors?: ColorType[]
  weights?: string[]
  material?: string
  composition?: string
}

export type ProductType = {
  id: IdType
  categoryId?: CategoryType['id']
  images: string[]
  name: string
  description?: string
  price: number
  category?: CategoryType
  tag?: string
  attributes?: ProductAttributesType
  sale?: SaleType
  isPopular?: boolean
  isNew?: boolean
  stock?: number
  review?: ReviewType
  link?: LinkType
}

export type CartType = {
  id: IdType
  productId: IdType
  product: ProductType
  quantity: number
}

export type WishlistType = ProductType

export type CalculatedOrder = {
  total: number
  totalDiscount: number
  tax: number
  orderTotal: number
}

export type ShoppingState = {
  cartItems: CartType[]
  wishlists: WishlistType[]
  toggleToWishlist: (product: ProductType) => void
  isInWishlist: (product: ProductType) => boolean
  isInCart: (product: ProductType) => boolean
  updateQuantity: (product: ProductType, quantity: number) => void
  getCalculatedOrder: () => CalculatedOrder
  getCartItemById: (productId: ProductType) => CartType | undefined
}
