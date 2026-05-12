import { BadgeCheck, Users, Headphones, Clock, Award, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Instaladores certificados',
    description: 'Personal técnico cualificado y homologado por el Ministerio del Interior para instalaciones de seguridad.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Estudiamos cada caso individualmente para ofrecer la solución más eficiente y económica.',
  },
  {
    icon: Headphones,
    title: 'Soporte continuo',
    description: 'Estamos disponibles para cualquier incidencia técnica cuando lo necesites, sin esperas.',
  },
  {
    icon: Clock,
    title: 'Respuesta inmediata',
    description: 'Tiempo de respuesta garantizado para emergencias y mantenimientos urgentes.',
  },
  {
    icon: Award,
    title: 'Marcas premium',
    description: 'Trabajamos exclusivamente con los fabricantes líderes del sector de la seguridad.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía total',
    description: 'Todos nuestros trabajos incluyen garantía extendida en equipos e instalación.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-32">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 noise opacity-40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestra diferencia
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/60">
            La confianza de nuestros clientes es el resultado de años de trabajo bien hecho y compromiso con la excelencia.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div 
              key={reason.title} 
              className="group rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary-foreground/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-secondary-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/60">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
