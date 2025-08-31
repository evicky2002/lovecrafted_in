'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured)

    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
                        Featured Handcrafted Items
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        Discover our most popular handcrafted pieces, each made with love and attention to detail
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href="/products"
                        className="btn-secondary inline-flex items-center justify-center"
                    >
                        View All Products
                        <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
