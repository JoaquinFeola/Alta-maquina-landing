---
id: task-006
tipo: feature
agente: coder
prio: med
estado: pendiente
deps: [task-005]
---
ctx: Implementar diseño responsive base
arch: src/layouts/Layout.astro, tailwind.config.mjs
req: |
  - Agregar breakpoints responsive en Tailwind (sm, md, lg, xl, 2xl)
  - Asegurar que elLayout sea responsive desde el inicio
  - Crear clases utilitarias responsive base
  - Verificar que los componentes funcionen en mobile, tablet, desktop
out: Diseño responsive implementado y funcionando en todos los breakpoints
review_required: false