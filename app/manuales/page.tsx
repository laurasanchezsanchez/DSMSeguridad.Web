'use client'

import { useState } from 'react'
import { FileText, Download, Book, ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'

const categories = ['Todas', 'Cámaras', 'Grabadores', 'Accesorios']

const manuals = [
  {
    title: 'Manual cámara Hikvision DS-2CD2143G2',
    category: 'Cámaras',
    brand: 'Hikvision',
    pages: '45 páginas',
  },
  {
    title: 'Manual grabador Dahua XVR5104HS',
    category: 'Grabadores',
    brand: 'Dahua',
    pages: '78 páginas',
  },
  {
    title: 'Manual cámara domo interior',
    category: 'Cámaras',
    brand: 'Hikvision',
    pages: '32 páginas',
  },
  {
    title: 'Manual cámara bullet exterior IP67',
    category: 'Cámaras',
    brand: 'Dahua',
    pages: '38 páginas',
  },
  {
    title: 'Manual grabador NVR 8 canales',
    category: 'Grabadores',
    brand: 'Hikvision',
    pages: '92 páginas',
  },
  {
    title: 'Manual fuente alimentación 12V',
    category: 'Accesorios',
    brand: 'Genérico',
    pages: '12 páginas',
  },
]

export default function ManualesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredManuals = manuals.filter((manual) => {
    const matchesCategory = selectedCategory === 'Todas' || manual.category === selectedCategory
    const matchesSearch = manual.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          manual.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <Book className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                Manuales técnicos
              </h1>
              <p className="mt-1 text-secondary-foreground/60">
                Documentación técnica de nuestros productos y equipos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar manual..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Categories */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Categorías
                  </h2>
                  <nav className="mt-4 space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Manual list */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredManuals.length} {filteredManuals.length === 1 ? 'manual encontrado' : 'manuales encontrados'}
                </p>
              </div>

              <div className="space-y-4">
                {filteredManuals.map((manual) => (
                  <div
                    key={manual.title}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                        <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-card-foreground">{manual.title}</h2>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                            {manual.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{manual.brand}</span>
                          <span className="text-xs text-muted-foreground">{manual.pages}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex shrink-0 items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25">
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">Descargar</span>
                    </button>
                  </div>
                ))}
              </div>

              {filteredManuals.length === 0 && (
                <div className="rounded-2xl border border-dashed border-border bg-muted/50 p-12 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 font-medium text-foreground">No se encontraron manuales</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Prueba con otros términos de búsqueda o categoría
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
