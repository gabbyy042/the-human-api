export default function AboutPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a8a]/20 to-[#0a1929]" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-white">
          We're Building <span className="text-[#7c3aed]">Human Media</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Not social media. Human media. Where connections create opportunity.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">Connect people as seamlessly as APIs connect systems.</p>
          </div>
          <div className="p-8 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">A world where opportunity is never missed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
