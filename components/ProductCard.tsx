'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react'
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
                'group relative bg-white rounded-2xl shadow-pink hover:shadow-pink-lg transition-all duration-500 overflow-hidden border border-pink-100 hover:border-pink-200 transform hover:-translate-y-2',
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with actions */}
                <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6',
                    isHovered && 'opacity-100'
                )}>
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                            <Heart
                                size={20}
                                className={cn(
                                    'text-pink-500 transition-all duration-300',
                                    isLiked && 'text-pink-600 fill-pink-600 scale-110'
                                )}
                                onClick={() => setIsLiked(!isLiked)}
                            />
                        </button>
                        <Link
                            href={`/product/${product.id}`}
                            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        >
                            <Eye size={20} className="text-pink-500" />
                        </Link>
                        <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                            <ShoppingCart size={20} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.featured && (
                        <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-pink flex items-center space-x-1">
                            <Star size={12} />
                            <span>Featured</span>
                        </span>
                    )}
                    {product.isPersonalized && (
                        <span className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-pink">
                            Personalized
                        </span>
                    )}
                </div>

                {/* Stock status */}
                {!product.inStock && (
                    <div className="absolute inset-0 bg-pink-900/50 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-white/90 backdrop-blur-sm text-pink-900 px-4 py-2 rounded-full font-medium shadow-pink">
                            Out of Stock
                        </span>
                    </div>
                )}

                {/* Image count indicator */}
                {product.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs px-2 py-1 rounded-full font-medium shadow-pink">
                        +{product.images.length - 1} more
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif font-semibold text-lg text-secondary-900 hover:text-pink-600 transition-colors duration-300 mb-3 line-clamp-2">
                        {product.name}
                    </h3>
                </Link>

                <p className="text-secondary-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gradient-pink">
                        {formatPrice(product.price)}
                    </span>

                    <button
                        className={cn(
                            'btn-primary text-sm py-3 px-6',
                            !product.inStock && 'opacity-50 cursor-not-allowed'
                        )}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>

                {/* Personalization options preview */}
                {product.isPersonalized && product.personalizationOptions && (
                    <div className="mt-4 pt-4 border-t border-pink-100">
                        <p className="text-xs text-pink-600 font-medium mb-2">Personalization Options:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.personalizationOptions.slice(0, 3).map((option, index) => (
                                <span key={index} className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full border border-pink-200">
                                    {option}
                                </span>
                            ))}
                            {product.personalizationOptions.length > 3 && (
                                <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full border border-pink-200">
                                    +{product.personalizationOptions.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
