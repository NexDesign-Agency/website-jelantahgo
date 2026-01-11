'use client'

import { MessageCircle } from 'lucide-react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function WhatsAppFloat() {
  const handleClick = () => {
    // Google Analytics 4 Event Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Float Button',
        value: 1,
        location: window.location.pathname,
      })
    }
  }

  return (
    <a
      href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20saya%20tertarik%20dengan%20layanan%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-soft-lg hover:shadow-soft-xl transition-smooth hover:scale-110 group"
      aria-label="Hubungi JelantahGO via WhatsApp untuk jual minyak jelantah"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-smooth" aria-hidden="true" />
    </a>
  )
}
