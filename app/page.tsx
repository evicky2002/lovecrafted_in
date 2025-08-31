import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Categories from '@/components/Categories'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <FeaturedProducts />
            <Categories />
            <InstagramSection />
            <Footer />
        </main>
    )
}
