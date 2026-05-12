import Link from 'next/link'
import { Play, Smartphone, Settings, Camera, ArrowLeft, ArrowRight, Clock, GraduationCap } from 'lucide-react'

const tutorials = [
  {
    slug: 'como-puedo-ver-las-grabaciones-de-mis-camaras',
    title: '¿Cómo puedo ver las grabaciones de mis cámaras?',
    description: 'Aprende a acceder a las grabaciones de tu sistema de videovigilancia paso a paso.',
    icon: Camera,
    duration: '5 min',
    level: 'Principiante',
  },
  {
    slug: 'tutorial-para-descargar-y-usar-anydesk',
    title: 'Tutorial para descargar y usar AnyDesk',
    description: 'Permite a nuestro equipo técnico ayudarte de forma remota desde nuestras oficinas.',
    icon: Smartphone,
    duration: '5 min',
    level: 'Principiante',
  },
]

export default function TutorialesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 noise opacity-40" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                Tutoriales
              </h1>
              <p className="mt-1 text-secondary-foreground/60">
                Guías paso a paso para sacar el máximo partido a tu sistema
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.slug}
                href={`/tutoriales/${tutorial.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <div className="absolute inset-0 gradient-mesh opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <tutorial.icon className="h-16 w-16 text-secondary-foreground/20" />
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25 transition-transform group-hover:scale-110">
                      <Play className="h-7 w-7 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-secondary/90 px-2.5 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tutorial.level === 'Principiante' 
                        ? 'bg-green-500/10 text-green-600' 
                        : tutorial.level === 'Intermedio'
                        ? 'bg-yellow-500/10 text-yellow-600'
                        : 'bg-red-500/10 text-red-600'
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <h2 className="mt-3 font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {tutorial.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                    Ver tutorial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Help section */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Nuestro equipo de soporte está disponible para ayudarte con cualquier duda sobre tu sistema de seguridad.
            </p>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
            >
              Contactar con soporte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
