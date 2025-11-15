export default function FAQPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a8a]/20 to-[#0a1929]" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-16 text-white">
          Frequently Asked <span className="text-[#7c3aed]">Questions</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">What is The Human API?</h3>
            <p className="text-gray-300">We connect humans like APIs connect systems. Our AI matches people for collaboration based on skills, needs, and values.</p>
          </div>
          <div className="p-6 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">Is it free?</h3>
            <p className="text-gray-300">Yes! Free tier includes 5 connections/month. Pro plans start at $15/month for unlimited access.</p>
          </div>
          <div className="p-6 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">How do Human Tokens work?</h3>
            <p className="text-gray-300">Earn tokens by helping others. Use them for priority matching, premium features, or exchange with other users.</p>
          </div>
          <div className="p-6 bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">Is my data secure?</h3>
            <p className="text-gray-300">Absolutely. Enterprise-grade encryption. We never sell your data.</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#7c3aed] text-white rounded-lg font-semibold">
            More Questions? Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
