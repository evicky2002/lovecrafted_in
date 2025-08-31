'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary-900 text-white">
            <div className="container-max section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">L</span>
                            </div>
                            <span className="font-serif text-xl font-semibold text-white">
                                Lovecrafted
                            </span>
                        </div>
                        <p className="text-secondary-300 mb-6">
                            Beautiful handcrafted phone cases, bookmarks, and personalized gifts made with love and attention to detail.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://facebook.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://twitter.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Categories</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/category/phone-cases" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Phone Cases
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/craft-items" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Craft Items
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/bookmarks" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Bookmarks
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/personalized-gifts" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    Personalized Gifts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-primary-400" />
                                <a href="mailto:hello@lovecrafted.com" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    hello@lovecrafted.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-primary-400" />
                                <a href="tel:+1234567890" className="text-secondary-300 hover:text-white transition-colors duration-200">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-primary-400 mt-1" />
                                <span className="text-secondary-300">
                                    123 Craft Street<br />
                                    Artisan City, AC 12345
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-secondary-400 text-sm">
                            © {currentYear} Lovecrafted. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link href="/privacy" className="text-secondary-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-secondary-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="/shipping" className="text-secondary-400 hover:text-white transition-colors duration-200">
                                Shipping Info
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-secondary-400 text-sm flex items-center justify-center space-x-1">
                            <span>Made with</span>
                            <Heart size={14} className="text-red-500 fill-red-500" />
                            <span>by Lovecrafted</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
