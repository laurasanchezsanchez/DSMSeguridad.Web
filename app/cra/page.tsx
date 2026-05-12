import { Shield, Clock, Bell, CheckCircle, ArrowLeft, ArrowRight, Radio, Phone, Eye } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Clock,
    title: 'Vigilancia 24/7',
    description: 'Monitorización continua de tu sistema de alarma las 24 horas del día, los 365 días del año sin excepciones.',
  },
  {
    icon: Bell,
    title: 'Respuesta inmediata',
    description: 'Ante cualquier señal de alarma, nuestro equipo actúa de forma inmediata siguiendo protocolos establecidos.',
  },
  {
    icon: Shield,
    title: 'Central homologada',
    description: 'Nuestra CRA cumple con todos los requisitos legales y está homologada por el Ministerio del Interior.',
  },
  {
    icon: Phone,
    title: 'Comunicación directa',
    description: 'Línea de comunicación bidireccional para verificación de alarmas y contacto con el titular.',
  },
  {
    icon: Eye,
    title: 'Videoverificación',
    description: 'Verificación visual de las alarmas mediante acceso a las cámaras del sistema de seguridad.',
  },
  {
    icon: Radio,
    title: 'Múltiples vías',
    description: 'Comunicación redundante por línea telefónica, GPRS y fibra para máxima fiabilidad.',
  },
]

const features = [
  'Recepción y verificación de señales de alarma',
  'Aviso inmediato a servicios de emergencia',
  'Contacto con el titular para confirmar situación',
  'Grabación y almacenamiento de eventos',
  'Informes periódicos de actividad',
  'Mantenimiento preventivo del sistema',
  'Custodia de llaves opcional',
  'Acuda de vigilantes cuando sea necesario',
]

export default function CRAPage() {
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
          
          <div className="mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 glow-sm">
              <Radio className="h-10 w-10 text-primary" />
            </div>
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Servicio premium
              </span>
              <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
                Central Receptora de Alarmas
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/60">
                Vigilancia profesional 24/7 para tu hogar o negocio. Tu tranquilidad, nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Una <strong className="text-foreground">Central Receptora de Alarmas (CRA)</strong> es un centro de control especializado que recibe y gestiona las señales enviadas por los sistemas de alarma instalados en hogares y empresas. Cuando se detecta una intrusión, incendio u otra emergencia, la señal llega a nuestra central donde operadores especializados verifican la situación y activan el protocolo de respuesta correspondiente.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              En DSM Seguridad trabajamos con una CRA homologada que garantiza la máxima fiabilidad y rapidez de respuesta. Nuestro servicio te proporciona la tranquilidad de saber que tu propiedad está protegida las 24 horas del día por profesionales certificados.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Por qué elegirnos
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Ventajas del servicio CRA
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title} 
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <h2 className="text-2xl font-bold text-card-foreground">
              ¿Qué incluye nuestro servicio?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Un servicio completo de vigilancia profesional para tu tranquilidad.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-secondary py-20">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute inset-0 noise opacity-30" />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary-foreground sm:text-3xl">
            Protege tu hogar o negocio con vigilancia profesional
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/60">
            Solicita información sin compromiso sobre nuestro servicio de Central Receptora de Alarmas.
          </p>
          <Link
            href="/#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
          >
            Solicitar información
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
