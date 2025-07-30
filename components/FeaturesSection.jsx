import React from 'react'

const features = [
  { title: 'Speed Optimized', desc: 'Super fast page loads with Next.js and CDN.' },
  { title: 'Responsive Design', desc: 'Looks perfect on any device.' },
  { title: 'Tailwind CSS', desc: 'Utility-first styling that’s fun and powerful.' },
]

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-dark text-white px-6">
      <h2 className="text-4xl text-center font-bold mb-16">Features You'll Love</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
