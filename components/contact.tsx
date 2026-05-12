import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { Facebook, Instagram } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '953 60 15 75',
    href: 'tel:+34953601575',
    description: 'Lunes a Viernes, 9:00 - 20:00',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Enviar mensaje',
    href: 'https://api.whatsapp.com/send?phone=+34953601575',
    description: 'Respuesta rápida garantizada',
    highlight: true,
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@dsmseguridad.es',
    href: 'mailto:info@dsmseguridad.es',
    description: 'Respondemos en 24 horas',
  },
  {
    icon: MapPin,
    title: 'Oficina',
    value: 'C. Pintor Juan Gris, 3',
    href: 'https://maps.google.com/?q=C.+Pintor+Juan+Gris,+3,+23700+Linares,+Jaén',
    description: '23700 Linares, Jaén',
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-background py-32">
      {/* Background */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Hablemos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Listo para proteger lo que más te importa?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Contacta con nosotros para una consulta gratuita y sin compromiso. Te asesoramos sobre la mejor solución para tus necesidades.
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className={`group rounded-2xl border p-6 transition-all duration-300 ${
                method.highlight
                  ? 'border-[#25D366]/30 bg-[#25D366]/5 hover:border-[#25D366]/50 hover:bg-[#25D366]/10'
                  : 'border-border bg-card hover:border-primary/30 hover:shadow-card'
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                method.highlight ? 'bg-[#25D366]/20' : 'bg-primary/10'
              }`}>
                <method.icon className={`h-6 w-6 ${method.highlight ? 'text-[#25D366]' : 'text-primary'}`} />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{method.title}</h3>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`mt-1 inline-flex items-center gap-1 font-medium transition-colors ${
                    method.highlight ? 'text-[#25D366] hover:text-[#25D366]/80' : 'text-primary hover:text-primary/80'
                  }`}
                >
                  {method.value}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-1 font-medium text-foreground">{method.value}</p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span className="text-sm text-muted-foreground">Síguenos en redes sociales:</span>
          <div className="flex items-center gap-3">
            <a
              href="https://es-es.facebook.com/DSM-seguridad-390049028044888/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-card"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/dsmseguridad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:shadow-card"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
