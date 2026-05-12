import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Lightbulb } from 'lucide-react'

interface Step {
  title: string
  description: string
  image?: string | null
  downloadUrl?: string | null
}

interface Tutorial {
  title: string
  intro: string
  duration: string
  level: string
  steps: Step[]
  tips: string[]
}

const tutorialsData: Record<string, Tutorial> = {
  'como-puedo-ver-las-grabaciones-de-mis-camaras': {
    title: '¿Cómo puedo ver las grabaciones de mis cámaras?',
    intro: 'Al realizar la instalación, nuestro técnico le proporcionó todos los datos necesarios y el software a utilizar. Siga estos pasos para acceder a sus grabaciones.',
    duration: '5 min',
    level: 'Principiante',
    steps: [
      {
        title: 'Inicie sesión en su sistema',
        description: 'Al hacer la instalación, nuestro técnico le proporcionó todos los datos necesarios y el software a utilizar.',
        image: null,
        downloadUrl: null,
      },
      {
        title: 'Seleccione la cámara que desea comprobar',
        description: 'En el panel principal seleccione la cámara de la que desea ver las grabaciones.',
        image: null,
        downloadUrl: null,
      },
      {
        title: 'Compruebe sus grabaciones',
        description: 'Le aparecerán las grabaciones del último mes de grabación.',
        image: null,
        downloadUrl: null,
      },
    ],
    tips: [
      'Asegúrese de tener instalado el software proporcionado durante la instalación',
      'Si no recuerda sus credenciales, contacte con nosotros',
      'Las grabaciones se conservan durante el último mes',
    ],
  },
  'tutorial-para-descargar-y-usar-anydesk': {
    title: 'Tutorial para descargar y usar AnyDesk',
    intro: 'AnyDesk es un software que nos permitirá tener control de su ratón desde nuestras oficinas con el fin de explicar o resolver cualquier pregunta. Una vez terminada la consulta, se hará una desconexión segura. En todo momento usted verá nuestras acciones desde su pantalla.',
    duration: '5 min',
    level: 'Principiante',
    steps: [
      {
        title: 'Descarga AnyDesk',
        description: 'Haz clic en el botón de descarga para obtener el software.',
        downloadUrl: 'https://anydesk.com/es/downloads/thank-you?dv=win_exe',
        image: null,
      },
      {
        title: 'Abre AnyDesk',
        description: 'Haz clic en el software descargado para abrirlo. Si no lo encuentra, diríjase a su carpeta de Descargas y ahí lo encontrará.',
        downloadUrl: null,
        image: '/images/tutoriales/anydesk-paso1.png',
      },
      {
        title: 'Díganos su número de puesto de trabajo',
        description: 'Cuando nos lo comunique e intentemos tener acceso remoto, le saldrá una pestaña para aceptarnos. Haga clic en Aceptar.',
        downloadUrl: null,
        image: '/images/tutoriales/anydesk-paso2.png',
      },
    ],
    tips: [
      'AnyDesk es completamente seguro — usted verá todo lo que hacemos en su pantalla',
      'Puede cerrar la conexión en cualquier momento',
      'Contacte con nosotros por teléfono o WhatsApp para iniciar la sesión de soporte',
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
                  {step.downloadUrl && (
                    
                    <a  href={step.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      Descargar AnyDesk
                    </a>
                  )}
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="mt-4 rounded-lg border border-border max-w-sm"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

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