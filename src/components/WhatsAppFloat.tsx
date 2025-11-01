'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20tertarik%20dengan%20layanan%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-soft-lg hover:shadow-soft-xl transition-smooth hover:scale-110 group"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-smooth" />
    </a>
  )
}
