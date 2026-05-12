import { MapPin } from 'lucide-react'

export function Map() {
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Ubicación
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Dónde encontrarnos
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Visítanos en nuestra oficina en el centro de Linares
          </p>
        </div>

        {/* Map container */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl shadow-elevated">
            {/* Top info bar */}
            <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">DSM Seguridad</p>
                  <p className="text-sm text-muted-foreground">C. Pintor Juan Gris, 3, 23700 Linares</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=C.+Pintor+Juan+Gris,+3,+23700+Linares,+Jaén"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
              >
                Abrir en Google Maps
              </a>
            </div>
            
            {/* Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1234567890123!2d-3.6356!3d38.0956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d7d8a3e3e3e3e3%3A0x1234567890abcdef!2sC.%20Pintor%20Juan%20Gris%2C%203%2C%2023700%20Linares%2C%20Ja%C3%A9n%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de DSM Seguridad"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
