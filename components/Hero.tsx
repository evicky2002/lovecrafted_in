'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative hero-gradient overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pink-pattern-bg opacity-30"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-20 blur-3xl floating-element"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-20 blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-10 blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-max section-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-pink">
                            <Sparkles size={18} />
                            <span className="font-cursive text-lg">Handcrafted with Love</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary-900 mb-8 leading-tight">
                            Beautiful
                            <span className="text-gradient-pink block font-cursive"> Handcrafted</span>
                            <span className="text-pink-600"> Treasures</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-secondary-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Discover our collection of lovingly crafted phone cases, bookmarks, and personalized gifts.
                            Each piece tells a story of creativity and care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                            <Link href="/category/phone-cases" className="btn-primary inline-flex items-center justify-center text-lg">
                                Shop Phone Cases
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link href="/category/personalized-gifts" className="btn-secondary inline-flex items-center justify-center text-lg">
                                Personalized Gifts
                            </Link>
                        </div>

                        {/* Stats with icons */}
                        <div className="flex justify-center lg:justify-start space-x-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                    <Heart size={24} className="text-white" />
                                </div>
                                <div className="text-2xl font-bold text-pink-600">500+</div>
                                <div className="text-sm text-secondary-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                    <Star size={24} className="text-white" />
                                </div>
                                <div className="text-2xl font-bold text-pink-600">50+</div>
                                <div className="text-sm text-secondary-600">Unique Designs</div>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                    <Sparkles size={24} className="text-white" />
                                </div>
                                <div className="text-2xl font-bold text-pink-600">100%</div>
                                <div className="text-sm text-secondary-600">Handcrafted</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Showcase */}
                    <div className="relative">
                        {/* Main large image */}
                        <div className="relative mb-6">
                            <div className="w-full h-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-pink-lg overflow-hidden border-pink-glow">
                                <img
                                    src="/images/503998499_17871033408369687_1722909771517882739_n.webp"
                                    alt="Featured Handcrafted Item"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2">
                                    <span className="text-pink-600 font-semibold">Featured Collection</span>
                                </div>
                            </div>
                        </div>

                        {/* Smaller image grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="relative group">
                                <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-pink overflow-hidden border border-pink-200 group-hover:border-pink-300 transition-all duration-300">
                                    <img
                                        src="/images/493864746_17865730320369687_3195142560253851473_n.webp"
                                        alt="Handcrafted Item"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                                    New
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-pink overflow-hidden border border-pink-200 group-hover:border-pink-300 transition-all duration-300">
                                    <img
                                        src="/images/491463338_17864631861369687_2323033830133208543_n.webp"
                                        alt="Handcrafted Item"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                                    Popular
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="aspect-square bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl shadow-pink overflow-hidden border border-pink-200 group-hover:border-pink-300 transition-all duration-300">
                                    <img
                                        src="/images/490114637_17863458243369687_6536579175201684627_n.webp"
                                        alt="Handcrafted Item"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute top-2 right-2 bg-pink-400 text-white text-xs px-2 py-1 rounded-full font-medium">
                                    Best Seller
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 floating-element"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-200 rounded-full opacity-60 floating-element" style={{ animationDelay: '1.5s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
