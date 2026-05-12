import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Instaladores homologados por el Ministerio del Interior',
  'Equipos de las mejores marcas del mercado',
  'Servicio técnico propio y local',
  'Presupuestos sin compromiso',
]

export function About() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text content */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre nosotros
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Más de una década protegiendo hogares y empresas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              En DSM Seguridad llevamos más de una década protegiendo hogares y empresas en Linares y toda la provincia de Jaén. Nos especializamos en el diseño, instalación y mantenimiento de sistemas de videovigilancia adaptados a las necesidades reales de cada cliente.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Trabajamos con las marcas líderes del sector para garantizar soluciones fiables, duraderas y de alto rendimiento.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-elevated">
              {/* Replace with your own camera photo */}
              <img
                src="/images/camara.png"
                alt="Cámara de seguridad profesional instalada por DSM Seguridad"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-6 shadow-elevated border border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl font-bold text-primary">A+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Calificación</p>
                  <p className="text-xs text-muted-foreground">Satisfacción cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
