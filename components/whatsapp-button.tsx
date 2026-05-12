'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Delay showing the button for a smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://api.whatsapp.com/send?phone=+34953601575"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${isHovered ? 'pr-5 shadow-xl shadow-[#25D366]/30' : ''}`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="flex h-14 w-14 items-center justify-center">
        <MessageCircle className={`h-7 w-7 transition-transform ${isHovered ? 'scale-110' : ''}`} />
      </div>
      <span 
        className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${
          isHovered ? 'max-w-[120px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        ¿Hablamos?
      </span>
    </a>
  )
}
