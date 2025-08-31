'use client'

import { Instagram, Heart, MessageCircle } from 'lucide-react'

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
        <section className="section-padding bg-white">
            <div className="container-max">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Instagram size={16} />
                        <span>@lovecrafted</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">
                        Follow Our Crafting Journey
                    </h2>
                    <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
                        Get behind-the-scenes glimpses of our handcrafting process and see our latest creations
                    </p>

                    <a
                        href="https://instagram.com/lovecrafted"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center"
                    >
                        Follow on Instagram
                        <Instagram size={18} className="ml-2" />
                    </a>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Actual Instagram Image */}
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4 text-white">
                                    <div className="flex items-center space-x-1">
                                        <Heart size={16} />
                                        <span className="text-sm">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MessageCircle size={16} />
                                        <span className="text-sm">{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-8 bg-secondary-50 rounded-2xl px-8 py-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">2.5K+</div>
                            <div className="text-sm text-secondary-600">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">500+</div>
                            <div className="text-sm text-secondary-600">Posts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">98%</div>
                            <div className="text-sm text-secondary-600">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
