import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Lightbulb } from 'lucide-react'

const tutorialsData: Record<string, { title: string; intro: string; duration: string; level: string; steps: { title: string; description: string }[]; tips: string[] }> = {
  'acceso-remoto': {
    title: 'Cómo acceder remotamente a tus cámaras',
    intro: 'Con la aplicación iVMS-4500 podrás visualizar tus cámaras de seguridad desde cualquier lugar del mundo. Solo necesitas tu smartphone y los datos de conexión de tu grabador.',
    duration: '8 min',
    level: 'Principiante',
    steps: [
      {
        title: 'Descarga la aplicación',
        description: 'Descarga la app iVMS-4500 desde App Store o Google Play Store. Es gratuita y compatible con la mayoría de grabadores.',
      },
      {
        title: 'Configura tu dispositivo',
        description: 'Introduce los datos de tu grabador: dirección IP o dominio, puerto, usuario y contraseña proporcionados durante la instalación.',
      },
      {
        title: 'Accede en tiempo real',
        description: 'Una vez configurado, podrás ver tus cámaras en directo desde cualquier lugar con conexión a internet.',
      },
    ],
    tips: [
      'Asegúrate de tener una buena conexión a internet para una visualización fluida',
      'Guarda tus credenciales en un lugar seguro',
      'Activa las notificaciones push para recibir alertas de movimiento',
    ],
  },
  'configuracion-grabador': {
    title: 'Configuración inicial del grabador',
    intro: 'La configuración inicial de tu grabador DVR/NVR es fundamental para garantizar el correcto funcionamiento de todo tu sistema de videovigilancia. Sigue estos pasos para una configuración básica.',
    duration: '12 min',
    level: 'Intermedio',
    steps: [
      {
        title: 'Conexión a la red',
        description: 'Conecta el grabador a tu router mediante cable Ethernet para garantizar una conexión estable.',
      },
      {
        title: 'Accede al menú de configuración',
        description: 'Usando el monitor conectado al grabador, accede al menú principal para comenzar la configuración.',
      },
      {
        title: 'Establece la seguridad',
        description: 'Crea un usuario y contraseña seguros. Usa combinaciones de letras, números y símbolos para mayor protección.',
      },
    ],
    tips: [
      'Usa una contraseña de al menos 8 caracteres con mayúsculas y números',
      'Configura la fecha y hora correctamente para que las grabaciones tengan marca temporal precisa',
      'Realiza una copia de seguridad de la configuración una vez finalizada',
    ],
  },
  'instalacion-camara-exterior': {
    title: 'Instalación de cámara exterior',
    intro: 'La instalación correcta de una cámara exterior es clave para maximizar la cobertura y garantizar la durabilidad del equipo. Te explicamos los pasos esenciales.',
    duration: '15 min',
    level: 'Avanzado',
    steps: [
      {
        title: 'Elige la ubicación',
        description: 'Selecciona un punto estratégico considerando los ángulos de visión, zonas de acceso y protección contra condiciones climáticas extremas.',
      },
      {
        title: 'Fija el soporte',
        description: 'Utiliza los tornillos y tacos adecuados al tipo de superficie (hormigón, ladrillo, madera). Asegura firmemente el soporte.',
      },
      {
        title: 'Conecta y ajusta',
        description: 'Pasa el cableado de forma protegida, conecta la cámara y ajusta el ángulo para obtener la cobertura óptima de la zona.',
      },
    ],
    tips: [
      'Instala la cámara a una altura de 2.5-3 metros para evitar manipulaciones',
      'Protege las conexiones con cinta aislante de exterior',
      'Verifica que la cámara no apunte directamente a fuentes de luz intensas',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params
  const tutorial = tutorialsData[slug]

  if (!tutorial) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 noise opacity-40" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/tutoriales"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a tutoriales
          </Link>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                tutorial.level === 'Principiante' 
                  ? 'bg-green-500/20 text-green-400' 
                  : tutorial.level === 'Intermedio'
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {tutorial.level}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-secondary-foreground/60">
                <Clock className="h-4 w-4" />
                {tutorial.duration}
              </span>
            </div>

            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              {tutorial.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
              {tutorial.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Pasos a seguir</h2>
          
          <div className="mt-8 space-y-6">
            {tutorial.steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips section */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Consejos útiles</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {tutorial.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Help section */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="text-xl font-semibold text-card-foreground">¿Necesitas ayuda?</h3>
            <p className="mt-2 text-muted-foreground">
              Si tienes alguna duda durante el proceso, no dudes en contactarnos. Estamos aquí para ayudarte.
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

export function generateStaticParams() {
  return Object.keys(tutorialsData).map((slug) => ({ slug }))
}
