'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const helpLinks = [
  { name: 'Leyes', href: '/leyes' },
  { name: 'Manuales', href: '/manuales' },
  { name: 'Tutoriales', href: '/tutoriales' },
  { name: 'Nuestras instalaciones', href: '/instalaciones' },
  { name: 'Servicio CRA', href: '/cra' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-secondary shadow-lg border-b border-white/10' 
          : 'bg-secondary/95 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="DSM Seguridad" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-secondary-foreground">Seguridad</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary-foreground/50">Sistemas de protección</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-secondary-foreground/70 transition-all hover:bg-white/10 hover:text-secondary-foreground"
            >
              Inicio
            </Link>

            {/* Help Dropdown */}
            <div className="relative">
              <button
                onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                onBlur={() => setTimeout(() => setHelpDropdownOpen(false), 150)}
                className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-secondary-foreground/70 transition-all hover:bg-white/10 hover:text-secondary-foreground"
              >
                Ayuda al usuario
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${helpDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {helpDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 overflow-hidden rounded-xl bg-secondary border border-white/10 shadow-xl">
                  <div className="py-2">
                    {helpLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-secondary-foreground/70 transition-colors hover:bg-white/10 hover:text-secondary-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#contacto"
              className="ml-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-secondary-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-secondary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="bg-secondary border border-white/10 absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-xl shadow-xl md:hidden">
            <div className="flex flex-col p-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-secondary-foreground/80 transition-colors hover:bg-white/10 hover:text-secondary-foreground"
              >
                Inicio
              </Link>

              <div className="my-2 border-t border-white/10" />

              <span className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground/40">
                Ayuda al usuario
              </span>
              {helpLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-secondary-foreground/70 transition-colors hover:bg-white/10 hover:text-secondary-foreground"
                >
                  <div className="h-1 w-1 rounded-full bg-primary/50" />
                  {link.name}
                </Link>
              ))}

              <div className="my-2 border-t border-white/10" />

              <Link
                href="/#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
