'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Instagram, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Phone Cases', href: '/category/phone-cases' },
        { name: 'Craft Items', href: '/category/craft-items' },
        { name: 'Bookmarks', href: '/category/bookmarks' },
        { name: 'Personalized Gifts', href: '/category/personalized-gifts' },
        { name: 'About', href: '/about' },
    ]

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-pink sticky top-0 z-50 border-b border-pink-100">
            <div className="container-max">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-pink group-hover:shadow-pink-lg transition-all duration-300 group-hover:scale-110">
                            <Heart size={20} className="text-white" />
                        </div>
                        <span className="font-cursive text-2xl font-semibold text-gradient-pink group-hover:scale-105 transition-transform duration-300">
                            Lovecrafted
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-secondary-600 hover:text-pink-600 transition-all duration-300 font-medium relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-6">
                        {/* Instagram */}
                        <a
                            href="https://instagram.com/lovecrafted"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 transform"
                        >
                            <Instagram size={22} />
                        </a>

                        {/* Cart */}
                        <button className="relative text-secondary-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 transform">
                            <ShoppingBag size={22} />
                            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-pink font-medium">
                                0
                            </span>
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-secondary-600 hover:text-pink-600 transition-all duration-300 p-2 rounded-lg hover:bg-pink-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-pink-100 py-6 bg-white/95 backdrop-blur-md">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-secondary-600 hover:text-pink-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-pink-50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
