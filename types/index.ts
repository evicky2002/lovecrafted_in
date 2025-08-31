export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: 'phone-cases' | 'craft-items' | 'bookmarks' | 'personalized-gifts'
    images: string[]
    isPersonalized?: boolean
    personalizationOptions?: string[]
    inStock: boolean
    featured?: boolean
}

export interface CartItem {
    product: Product
    quantity: number
    personalization?: string
}

export interface Category {
    id: string
    name: string
    description: string
    image: string
    productCount: number
}

export interface InstagramPost {
    id: string
    image: string
    caption: string
    likes: number
    comments: number
    url: string
}
