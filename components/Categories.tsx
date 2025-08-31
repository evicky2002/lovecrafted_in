'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
    {
        id: 'phone-cases',
        name: 'Phone Cases',
        description: 'Beautiful handcrafted phone cases with unique designs',
        image: '/images/category-phone-cases.jpg',
        productCount: 4,
        color: 'from-primary-100 to-primary-200',
        textColor: 'text-primary-700',
    },
    {
        id: 'craft-items',
        name: 'Craft Items',
        description: 'Handmade decorative and functional craft items',
        image: '/images/category-craft-items.jpg',
        productCount: 3,
        color: 'from-secondary-100 to-secondary-200',
        textColor: 'text-secondary-700',
    },
    {
        id: 'bookmarks',
        name: 'Bookmarks',
        description: 'Elegant bookmarks for the book lovers',
        image: '/images/category-bookmarks.jpg',
        productCount: 3,
        color: 'from-primary-200 to-primary-300',
        textColor: 'text-primary-800',
    },
    {
        id: 'personalized-gifts',
        name: 'Personalized Gifts',
        description: 'Custom gifts made especially for you',
        image: '/images/category-personalized.jpg',
        productCount: 3,
        color: 'from-secondary-200 to-secondary-300',
        textColor: 'text-secondary-800',
    },
]

export default function Categories() {
    return (
        <section className="section-padding bg-secondary-50">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                        Explore our handcrafted collections and find the perfect piece for you or your loved ones
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.id}`}
                            className="group block"
                        >
                            <div className="card h-full hover:scale-105 transition-transform duration-300">
                                {/* Image */}
                                <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-t-xl flex items-center justify-center p-6`}>
                                    <div className="text-center">
                                        <div className={`text-2xl font-bold ${category.textColor} mb-2`}>
                                            {category.name}
                                        </div>
                                        <div className={`text-sm ${category.textColor} opacity-80`}>
                                            {category.productCount} items
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                                        {category.name}
                                    </h3>
                                    <p className="text-secondary-600 text-sm mb-4">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-primary-600 font-medium text-sm">
                                            {category.productCount} products
                                        </span>
                                        <ArrowRight
                                            size={16}
                                            className="text-primary-600 group-hover:translate-x-1 transition-transform duration-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
