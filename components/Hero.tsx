'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-100 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="container-max section-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Handcrafted with Love</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
                            Beautiful
                            <span className="text-gradient block"> Handcrafted</span>
                            <span className="text-secondary-700"> Gifts</span>
                        </h1>

                        <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Discover our collection of lovingly crafted phone cases, bookmarks, and personalized gifts.
                            Each piece is made with attention to detail and care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/category/phone-cases" className="btn-primary inline-flex items-center justify-center">
                                Shop Phone Cases
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/category/personalized-gifts" className="btn-secondary inline-flex items-center justify-center">
                                Personalized Gifts
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start space-x-8 mt-12">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">500+</div>
                                <div className="text-sm text-secondary-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">50+</div>
                                <div className="text-sm text-secondary-600">Unique Designs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-600">100%</div>
                                <div className="text-sm text-secondary-600">Handcrafted</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                                    <span className="text-primary-600 font-medium">Phone Cases</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="aspect-square bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center">
                                    <span className="text-secondary-600 font-medium">Bookmarks</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="bg-white rounded-2xl shadow-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center">
                                    <span className="text-primary-700 font-medium">Craft Items</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="aspect-square bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl flex items-center justify-center">
                                    <span className="text-secondary-700 font-medium">Personalized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
