import { Building2, Home, Factory, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const installationTypes = [
  {
    icon: Home,
    title: 'Residencial',
    description: 'Protege tu hogar con sistemas de videovigilancia diseñados para viviendas unifamiliares y comunidades de vecinos. Instalamos cámaras discretas y de alta resolución que se integran perfectamente con la estética de tu hogar.',
    features: [
      'Cámaras discretas y estéticas',
      'Acceso remoto desde el móvil',
      'Detección de movimiento inteligente',
      'Visión nocturna de alta calidad',
    ],
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Building2,
    title: 'Comercial',
    description: 'Soluciones de seguridad para comercios, oficinas y locales de negocio. Nuestros sistemas permiten monitorizar el establecimiento en tiempo real, controlar accesos y prevenir robos.',
    features: [
      'Monitorización en tiempo real',
      'Control de accesos',
      'Análisis de comportamiento',
      'Integración con TPV',
    ],
    color: 'bg-amber-500/10 text-amber-600',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Sistemas avanzados de videovigilancia para naves industriales, almacenes y grandes superficies. Incluye cámaras de largo alcance, visión nocturna y sistemas perimetrales.',
    features: [
      'Cobertura de grandes áreas',
      'Detección perimetral',
      'Integración con alarmas',
      'Almacenamiento extendido',
    ],
    color: 'bg-emerald-500/10 text-emerald-600',
  },
]

export default function InstalacionesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 noise opacity-40" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="mt-8">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Servicios especializados
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
              Nuestras instalaciones
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/60">
              Soluciones de seguridad adaptadas a cada tipo de espacio, desde hogares hasta grandes instalaciones industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Installation types */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {installationTypes.map((type, index) => (
              <div 
                key={type.title} 
                className={`flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon and visual */}
                <div className="flex flex-col items-center md:w-1/3">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${type.color}`}>
                    <type.icon className="h-10 w-10" />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold text-card-foreground">{type.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-secondary py-20">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute inset-0 noise opacity-30" />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-foreground sm:text-3xl">
            ¿Qué tipo de instalación necesitas?
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/60">
            Contacta con nosotros y te asesoraremos sin compromiso sobre la mejor solución para tu espacio.
          </p>
          <Link
            href="/#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
          >
            Solicitar presupuesto gratuito
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
