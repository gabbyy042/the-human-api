import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a8a]/20 to-[#0a1929]" />

      <div className="relative z-10">
        <section className="container mx-auto px-4 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full text-sm mb-8">
            <span>✨</span>
            <span>Now in Beta</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            The Human API
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            The Operating System for Humanity
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Connect with humans like code connects systems. Find collaborators, 
            mentors, and opportunities through AI-powered matching that understands 
            your skills, needs, and values.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#7c3aed] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7c3aed]/50 transition-all flex items-center gap-2 justify-center"
            >
              Create Your Human Key
              <span>→</span>
            </a>

            <a 
              href="#"
              className="px-8 py-4 border border-[#7c3aed]/50 text-white rounded-lg font-semibold hover:bg-[#7c3aed]/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Not Social Media. <span className="text-[#7c3aed]">Human Media.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Matching"
              description="Our AI analyzes skills, needs, values, and availability to suggest perfect human connections in real-time."
            />

            <FeatureCard
              title="Instant Workspaces"
              description="Every connection creates an auto-configured collaboration space with chat, tasks, and shared goals."
            />

            <FeatureCard
              title="Human Tokens"
              description="Earn tokens for helping others. Use them for priority access, premium features, or cash out."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#7c3aed] rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Plug Into Purpose
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands connecting, collaborating, and creating value every day.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a8a] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get Started Free
              <span>→</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-8 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl hover:border-[#7c3aed]/50 transition-all hover:shadow-lg hover:shadow-[#7c3aed]/20">
      <div className="w-16 h-16 bg-[#7c3aed]/20 rounded-xl flex items-center justify-center mb-4 text-[#7c3aed] text-2xl">
        ✨
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
