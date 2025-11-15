import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1929]/80 backdrop-blur-lg border-b border-[#7c3aed]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#7c3aed] transition-colors">
            The Human API
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colorrs">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <Link 
            href="/signup"
            className="px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#7c3aed] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#7c3aed]/50 transition-all"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  )
}
