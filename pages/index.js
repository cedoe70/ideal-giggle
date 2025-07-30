import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutSection from '../components/AboutSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Website</title>
      </Head>
      <main className="overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
