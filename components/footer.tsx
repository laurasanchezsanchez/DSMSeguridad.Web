import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Instalación de cámaras', href: '/#servicios' },
    { name: 'Mantenimiento', href: '/#servicios' },
    { name: 'Sistemas de alarma', href: '/#servicios' },
    { name: 'Servicio CRA', href: '/cra' },
  ],
  ayuda: [
    { name: 'Leyes', href: '/leyes' },
    { name: 'Manuales', href: '/manuales' },
    { name: 'Tutoriales', href: '/tutoriales' },
    { name: 'Nuestras instalaciones', href: '/instalaciones' },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute inset-0 noise opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-primary">
                <span className="text-lg font-bold tracking-tight text-primary-foreground">DSM</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-secondary-foreground">Seguridad</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/60">
              Expertos en videovigilancia y seguridad electrónica en Linares y toda la provincia de Jaén. Más de 10 años de experiencia nos avalan.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://es-es.facebook.com/DSM-seguridad-390049028044888/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 text-secondary-foreground/60 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dsmseguridad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-secondary-foreground/10 bg-secondary-foreground/5 text-secondary-foreground/60 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Ayuda al usuario
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.ayuda.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+34953601575"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  601 190 589
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dsmseguridad.es"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@dsmseguridad.es
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-secondary-foreground/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    C. Pintor Juan Gris, 3<br />
                    23700 Linares, Jaén
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 sm:flex-row">
          <p className="text-sm text-secondary-foreground/40">
            © 2026 DSM Seguridad. Todos los derechos reservados.
          </p>
          <p className="text-sm text-secondary-foreground/40">
            Instaladores homologados por el Ministerio del Interior
          </p>
        </div>
      </div>
    </footer>
  )
}
