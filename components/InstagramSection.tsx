'use client'

import { Instagram, Heart, MessageCircle, Sparkles } from 'lucide-react'

const instagramPosts = [
    {
        id: '1',
        image: '/images/476583182_17855802519369687_2857909006979317095_n.webp',
        caption: 'New floral phone cases coming soon! 🌸 #handcrafted #phonecase',
        likes: 124,
        comments: 8,
        url: 'https://instagram.com/p/example1',
    },
    {
        id: '2',
        image: '/images/475842961_17854626240369687_8719090727715619642_n.webp',
        caption: 'Personalized bookmarks make perfect gifts 📚 #bookmarks #personalized',
        likes: 89,
        comments: 5,
        url: 'https://instagram.com/p/example2',
    },
    {
        id: '3',
        image: '/images/475335401_17853896565369687_7705788293010036753_n.webp',
        caption: 'Behind the scenes of our crafting process ✨ #handmade #crafting',
        likes: 156,
        comments: 12,
        url: 'https://instagram.com/p/example3',
    },
    {
        id: '4',
        image: '/images/474698920_17853374514369687_4229580928292526543_n.webp',
        caption: 'Custom jewelry boxes for your precious items 💎 #jewelrybox #handcrafted',
        likes: 203,
        comments: 15,
        url: 'https://instagram.com/p/example4',
    },
    {
        id: '5',
        image: '/images/473442122_3918615368383375_1180521925963280898_n.jpeg',
        caption: 'Cozy candles for your home 🕯️ #candles #handmade',
        likes: 167,
        comments: 9,
        url: 'https://instagram.com/p/example5',
    },
    {
        id: '6',
        image: '/images/473029985_2068612363583073_9031607221933142211_n.jpeg',
        caption: 'Personalized keychains with love ❤️ #keychain #personalized',
        likes: 98,
        comments: 6,
        url: 'https://instagram.com/p/example6',
    },
    {
        id: '7',
        image: '/images/473003253_504016006032575_2718045969750981010_n.jpeg',
        caption: 'Beautiful handcrafted phone cases ✨ #phonecase #handmade',
        likes: 145,
        comments: 11,
        url: 'https://instagram.com/p/example7',
    },
    {
        id: '8',
        image: '/images/472553043_616643341036521_6500352493089560159_n.jpeg',
        caption: 'Elegant bookmarks for book lovers 📖 #bookmarks #reading',
        likes: 112,
        comments: 7,
        url: 'https://instagram.com/p/example8',
    },
    {
        id: '9',
        image: '/images/472218508_941492494616443_748327786934344611_n.jpeg',
        caption: 'Custom personalized gifts 🎁 #personalized #gifts',
        likes: 178,
        comments: 13,
        url: 'https://instagram.com/p/example9',
    },
    {
        id: '10',
        image: '/images/472088148_1719350995298615_5551998171433195001_n.jpeg',
        caption: 'Handcrafted with love and care 💕 #handcrafted #love',
        likes: 234,
        comments: 18,
        url: 'https://instagram.com/p/example10',
    },
    {
        id: '11',
        image: '/images/471889879_576174501931986_4025069575272207385_n.jpeg',
        caption: 'Unique designs for unique people ✨ #unique #design',
        likes: 189,
        comments: 14,
        url: 'https://instagram.com/p/example11',
    },
]

export default function InstagramSection() {
    return (
        <section className="section-padding bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pink-pattern-bg opacity-20"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-20 blur-3xl floating-element"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full opacity-20 blur-3xl floating-element" style={{ animationDelay: '1s' }}></div>

            <div className="container-max relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-pink">
                        <Instagram size={20} />
                        <span className="font-cursive text-lg">@lovecrafted</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
                        Follow Our
                        <span className="text-gradient-pink block font-cursive"> Crafting Journey</span>
                    </h2>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Get behind-the-scenes glimpses of our handcrafting process and see our latest creations.
                        Each piece tells a story of creativity, love, and attention to detail.
                    </p>

                    <a
                        href="https://www.instagram.com/__lovecrafted__/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center text-lg"
                    >
                        Follow on Instagram
                        <Instagram size={20} className="ml-2" />
                    </a>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
                    {instagramPosts.map((post, index) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-2xl shadow-pink hover:shadow-pink-lg transition-all duration-500 transform hover:-translate-y-2 border border-pink-100 hover:border-pink-200"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Instagram Image */}
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="text-white text-center">
                                    <p className="text-xs mb-3 line-clamp-2 font-medium leading-relaxed">
                                        {post.caption}
                                    </p>
                                    <div className="flex items-center justify-center space-x-4 text-white/90">
                                        <div className="flex items-center space-x-1">
                                            <Heart size={14} className="fill-white" />
                                            <span className="text-xs font-medium">{post.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <MessageCircle size={14} />
                                            <span className="text-xs font-medium">{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-pink-600 text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                                View Post
                            </div>
                        </a>
                    ))}
                </div>

                {/* Enhanced Stats */}
                <div className="text-center">
                    <div className="inline-flex items-center space-x-12 bg-white rounded-3xl px-12 py-8 shadow-pink-lg border border-pink-100">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                <Heart size={24} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold text-pink-600">2.5K+</div>
                            <div className="text-sm text-secondary-600 font-medium">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                <Sparkles size={24} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold text-pink-600">500+</div>
                            <div className="text-sm text-secondary-600 font-medium">Posts</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-pink">
                                <Instagram size={24} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold text-pink-600">98%</div>
                            <div className="text-sm text-secondary-600 font-medium">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
