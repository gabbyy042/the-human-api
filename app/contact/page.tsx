'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a8a]/20 to-[#0a1929]" />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 text-white">
          Get In <span className="text-[#7c3aed]">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="max-w-2xl mx-auto bg-[#1e3a8a]/30 border border-[#7c3aed]/20 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-gray-300">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-[#0a1929] border border-[#7c3aed]/30 rounded-lg text-white focus:border-[#7c3aed] focus:outline-none" />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 bg-[#0a1929] border border-[#7c3aed]/30 rounded-lg text-white focus:border-[#7c3aed] focus:outline-none" />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea rows={6} required className="w-full px-4 py-3 bg-[#0a1929] border border-[#7c3aed]/30 rounded-lg text-white focus:border-[#7c3aed] focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#1e3a8a] to-[#7c3aed] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}