export default function PricingPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a8a]/20 to-[#0a1929]" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 text-white">
          Simple <span className="text-[#7c3aed]">Pricing</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="p-8 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
            <div className="text-4xl font-bold text-white mb-6">$0</div>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✓ 5 connections/month</li>
              <li>✓ Basic AI matching</li>
              <li>✓ Standard features</li>
            </ul>
            <a href="/signup" className="block text-center py-3 bg-[#7c3aed] text-white rounded-lg">Get Started</a>
          </div>
          <div className="p-8 bg-gradient-to-b from-[#1e3a8a] to-[#7c3aed] rounded-2xl scale-105">
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-bold text-white mb-6">$15<span className="text-lg">/mo</span></div>
            <ul className="space-y-3 mb-8 text-white">
              <li>✓ Unlimited connections</li>
              <li>✓ Priority matching</li>
              <li>✓ Advanced tools</li>
              <li>✓ 2x tokens</li>
            </ul>
            <a href="/signup" className="block text-center py-3 bg-white text-[#1e3a8a] rounded-lg font-bold">Start Pro</a>
          </div>
          <div className="p-8 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">Custom</div>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✓ Everything in Pro</li>
              <li>✓ API access</li>
              <li>✓ Team analytics</li>
              <li>✓ Dedicated support</li>
            </ul>
            <a href="/contact" className="block text-center py-3 bg-[#7c3aed] text-white rounded-lg">Contact Sales</a>
          </div>
        </div>
      </div>
    </div>
  )
}
