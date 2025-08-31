'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react'
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
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-max">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">L</span>
                        </div>
                        <span className="font-serif text-xl font-semibold text-gradient">
                            Lovecrafted
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        {/* Instagram */}
                        <a
                            href="https://instagram.com/lovecrafted"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                        >
                            <Instagram size={20} />
                        </a>

                        {/* Cart */}
                        <button className="relative text-secondary-600 hover:text-primary-600 transition-colors duration-200">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-secondary-200 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
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
