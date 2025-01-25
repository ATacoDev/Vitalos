import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
        <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Sections with Corresponding IDs */}
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="features">
          <FeatureSection />
        </section>

        <section id="characters">
          <Workflow />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App
