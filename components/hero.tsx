'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Eye, Lock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise opacity-50" />
      
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Más de 10 años protegiendo lo que importa</span>
          </div>

          {/* Main headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Seguridad que
            <span className="relative mx-3 inline-block">
              <span className="relative z-10 text-primary">inspira</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -skew-x-6" />
            </span>
            confianza
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-secondary-foreground/60 sm:text-xl">
            Diseñamos, instalamos y mantenemos sistemas de videovigilancia de última generación para hogares y empresas en Linares y toda la provincia de Jaén.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary-foreground/20 bg-white/5 px-8 py-4 text-sm font-medium text-secondary-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:border-secondary-foreground/30"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-3 gap-8 border-t border-secondary-foreground/10 pt-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-3xl font-bold text-secondary-foreground">500+</span>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/50">Instalaciones completadas</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-3xl font-bold text-secondary-foreground">10+</span>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/50">Años de experiencia</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <span className="text-3xl font-bold text-secondary-foreground">24/7</span>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/50">Monitoreo continuo</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
