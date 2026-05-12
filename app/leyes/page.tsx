import { FileText, Download, Scale, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const laws = [
  {
    title: 'Ley Orgánica de Protección de Datos (LOPD)',
    description: 'Normativa española sobre protección de datos personales y derechos digitales.',
    date: 'Actualizada 2018',
  },
  {
    title: 'Reglamento General de Protección de Datos (RGPD)',
    description: 'Reglamento europeo que regula el tratamiento de datos personales en la UE.',
    date: 'Vigente desde 2018',
  },
  {
    title: 'Ley de Seguridad Privada 5/2014',
    description: 'Marco legal para empresas de seguridad privada y sus servicios en España.',
    date: 'Actualizada 2023',
  },
  {
    title: 'Instrucción 1/2006 AEPD',
    description: 'Instrucción sobre videovigilancia en espacios públicos y privados.',
    date: 'En vigor',
  },
]

export default function LeyesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 noise opacity-40" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Scale className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                Leyes y normativas
              </h1>
              <p className="mt-1 text-secondary-foreground/60">
                Documentación legal relevante para sistemas de videovigilancia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {laws.map((law) => (
              <div
                key={law.title}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-card-foreground">{law.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{law.description}</p>
                    <span className="mt-2 inline-block text-xs font-medium text-primary">{law.date}</span>
                  </div>
                </div>
                <button className="flex shrink-0 items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Descargar PDF</span>
                </button>
              </div>
            ))}
          </div>

          {/* Info box */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="font-semibold text-foreground">¿Necesitas asesoramiento legal?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te ayudamos a cumplir con toda la normativa vigente en materia de videovigilancia y protección de datos. Contacta con nosotros para una consulta personalizada.
            </p>
            <Link
              href="/#contacto"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Contactar con un experto
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
