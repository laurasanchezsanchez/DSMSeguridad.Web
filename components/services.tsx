import { Camera, Wrench, Bell, Radio, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Camera,
    title: 'Instalación de cámaras',
    description: 'Diseñamos e instalamos sistemas de videovigilancia para interior y exterior, con tecnología IP de última generación.',
    features: ['Alta definición 4K', 'Visión nocturna', 'Acceso remoto'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y soporte',
    description: 'Servicio técnico especializado para garantizar el correcto funcionamiento de tu sistema en todo momento.',
    features: ['Respuesta rápida', 'Repuestos originales', 'Garantía extendida'],
  },
  {
    icon: Bell,
    title: 'Sistemas de alarma',
    description: 'Instalación de alarmas perimetrales e interiores con detección inteligente y conexión a central.',
    features: ['Detección perimetral', 'Sensores de movimiento', 'Alertas móviles'],
  },
  {
    icon: Radio,
    title: 'Servicio CRA',
    description: 'Vigilancia 24 horas a través de nuestra Central Receptora de Alarmas homologada por el Ministerio.',
    features: ['Monitoreo 24/7', 'Respuesta inmediata', 'Comunicación bidireccional'],
    href: '/cra',
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-muted py-32">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Soluciones completas
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nuestros servicios
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ofrecemos soluciones integrales de seguridad adaptadas a tus necesidades, desde el diseño hasta el mantenimiento continuo.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                <service.icon className="h-7 w-7" />
              </div>
              
              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Link if available */}
              {service.href && (
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Más información
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
