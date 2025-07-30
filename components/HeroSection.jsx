import React from 'react'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-pink-500 to-secondary opacity-20 animate-pulse"></div>
      <h1 className="text-5xl md:text-7xl font-bold z-10">Welcome to Your Future</h1>
      <p className="text-lg md:text-xl mt-6 max-w-2xl z-10">
        Modern. Beautiful. Fast. A website that captures attention and delivers experience.
      </p>
      <button className="mt-10 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg z-10 hover:scale-105 transition">
        Get Started
      </button>
    </section>
  )
}

export default HeroSection
