import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lovecrafted - Handcrafted Phone Cases & Personalized Gifts',
    description: 'Discover beautiful handcrafted phone cases, craft items, bookmarks, and personalized gift items. Each piece is lovingly made with attention to detail.',
    keywords: 'handcrafted, phone cases, personalized gifts, bookmarks, craft items, custom gifts',
    authors: [{ name: 'Lovecrafted' }],
    openGraph: {
        title: 'Lovecrafted - Handcrafted Phone Cases & Personalized Gifts',
        description: 'Discover beautiful handcrafted phone cases, craft items, bookmarks, and personalized gift items.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
