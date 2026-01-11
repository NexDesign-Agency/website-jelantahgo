'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/misi-lingkungan-jelantahgo', label: 'Misi Lingkungan' },
    { href: '/pricing', label: 'Harga' },
    { href: '/cara-kerja', label: 'Cara Kerja' },
    { href: '/blog', label: 'Blog' },
    { href: '/mitra', label: 'Mitra' },
    { href: '/area-layanan', label: 'Area Layanan' },
    { href: '/contact', label: 'Kontak' },
  ]

  return (
    <header className="bg-[#0F3D2E] sticky top-0 z-50 shadow-soft-lg border-b border-white/10">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-white font-bold text-2xl group-hover:text-[#D9E3D3] transition-smooth">
              JelantahGO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-card text-sm font-medium transition-smooth"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden lg:block">
            <button 
              className="bg-white text-[#0F3D2E] px-6 py-2.5 rounded-card font-semibold hover:bg-[#D9E3D3] transition-smooth shadow-soft hover:shadow-soft-lg"
              aria-label="Login to JelantahGO account"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-card transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#134E3A] rounded-card-lg mb-4 shadow-soft-xl border border-white/10">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-card text-base font-medium transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                className="w-full bg-white text-[#0F3D2E] px-6 py-2.5 rounded-card font-semibold hover:bg-[#D9E3D3] transition-smooth shadow-soft mt-4"
                aria-label="Login to JelantahGO account"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
