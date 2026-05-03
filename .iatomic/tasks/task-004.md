---
id: task-004
tipo: feature
agente: coder
prio: high
estado: pendiente
deps: [task-001, task-002, task-003]
---
ctx: Definir paleta de colores y tipografía
arch: tailwind.config.mjs, src/styles/global.css
req: |
  - Definir paleta de colores en tailwind.config.mjs:
    - Primary: azul oscuro profesional (#1e3a5f)
    - Secondary: verde energético (#22c55e)
    - Accent: dorado (#f59e0b)
    - Background: blanco/gris claro (#f8fafc)
    - Text: gris oscuro (#1e293b)
  - Configurar tipografía principal (font family)
  - Definir tamaños de fuente base
  - Crear clases utilitarias personalizadas si es necesario
out: Paleta de colores y tipografía definidas en Tailwind config
review_required: true