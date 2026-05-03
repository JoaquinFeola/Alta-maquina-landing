---
id: task-005
tipo: feature
agente: coder
prio: high
estado: pendiente
deps: [task-004]
---
ctx: Crear layout base y componentes UI reutilizables
arch: src/layouts/Layout.astro, src/components/
req: |
  - Crear Layout.astro como layout base con HTML structure, head tags, meta tags
  - Crear componente Header con logo y navegación
  - Crear componente Footer base
  - Crear componente Button reutilizable
  - Crear componente Container para wrapper central
  - Configurar slots para contenido variable
out: Layout base y componentes UI creados y funcionales
review_required: true