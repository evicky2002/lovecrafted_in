'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-pink-900 via-pink-800 to-pink-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pink-pattern-bg opacity-5"></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-pink-700 rounded-full opacity-10 blur-3xl floating-element"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-600 rounded-full opacity-10 blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>

            <div className="container-max section-padding relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-pink">
                                <Heart size={20} className="text-white" />
                            </div>
                            <span className="font-cursive text-2xl font-semibold text-white">
                                Lovecrafted
                            </span>
                        </div>
                        <p className="text-pink-100 mb-8 leading-relaxed">
                            Beautiful handcrafted phone cases, bookmarks, and personalized gifts made with love and attention to detail.
                            Each piece tells a story of creativity and care.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-pink-700/50 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-pink"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://facebook.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-pink-700/50 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-pink"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://twitter.com/lovecrafted"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-pink-700/50 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-pink"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-6 text-white">Categories</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/category/phone-cases" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Phone Cases
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/craft-items" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Craft Items
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/bookmarks" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Bookmarks
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/personalized-gifts" className="text-pink-100 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 transform inline-block">
                                    Personalized Gifts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-6 text-white">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-pink-700/50 rounded-full flex items-center justify-center">
                                    <Mail size={16} className="text-pink-300" />
                                </div>
                                <a href="mailto:hello@lovecrafted.com" className="text-pink-100 hover:text-white transition-colors duration-300">
                                    hello@lovecrafted.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-pink-700/50 rounded-full flex items-center justify-center">
                                    <Phone size={16} className="text-pink-300" />
                                </div>
                                <a href="tel:+1234567890" className="text-pink-100 hover:text-white transition-colors duration-300">
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-pink-700/50 rounded-full flex items-center justify-center mt-1">
                                    <MapPin size={16} className="text-pink-300" />
                                </div>
                                <span className="text-pink-100">
                                    123 Craft Street<br />
                                    Artisan City, AC 12345
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-pink-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-pink-200 text-sm">
                            © {currentYear} Lovecrafted. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link href="/privacy" className="text-pink-200 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-pink-200 hover:text-white transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link href="/shipping" className="text-pink-200 hover:text-white transition-colors duration-300">
                                Shipping Info
                            </Link>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-pink-200 text-sm flex items-center justify-center space-x-2">
                            <span>Made with</span>
                            <Heart size={16} className="text-pink-400 fill-pink-400 bounce-gentle" />
                            <span>and</span>
                            <Sparkles size={16} className="text-pink-400 floating-element" />
                            <span>by Lovecrafted</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
