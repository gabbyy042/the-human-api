import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a1929] border-t border-[#7c3aed]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">The Human API</h3>
            <p className="text-gray-400">
              Connecting humans like code connects systems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#7c3aed]/20 text-center text-gray-400">
          <p>© 2025 The Human API. All rights reserved. Not social media. Human media.</p>
        </div>
      </div>
    </footer>
  )
}
