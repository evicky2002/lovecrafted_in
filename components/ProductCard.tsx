'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ProductCardProps {
    product: Product
    className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div
            className={cn(
                'group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden',
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.images[0] || '/images/placeholder.jpg'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay with actions */}
                <div className={cn(
                    'absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center',
                    isHovered && 'bg-opacity-20'
                )}>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                            <Heart
                                size={18}
                                className={cn(
                                    'text-secondary-600 transition-colors',
                                    isLiked && 'text-red-500 fill-red-500'
                                )}
                                onClick={() => setIsLiked(!isLiked)}
                            />
                        </button>
                        <Link
                            href={`/product/${product.id}`}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <Eye size={18} className="text-secondary-600" />
                        </Link>
                        <button className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:bg-primary-600">
                            <ShoppingCart size={18} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.featured && (
                        <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Featured
                        </span>
                    )}
                    {product.isPersonalized && (
                        <span className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Personalized
                        </span>
                    )}
                </div>

                {/* Stock status */}
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-white text-secondary-900 px-3 py-1 rounded-full font-medium">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-secondary-900 hover:text-primary-600 transition-colors duration-200 mb-2">
                        {product.name}
                    </h3>
                </Link>

                <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">
                        {formatPrice(product.price)}
                    </span>

                    <button
                        className={cn(
                            'btn-primary text-sm py-2 px-4',
                            !product.inStock && 'opacity-50 cursor-not-allowed'
                        )}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    )
}
