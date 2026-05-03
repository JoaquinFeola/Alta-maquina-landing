---
id: task-021
tipo: feature
agente: coder
prio: high
estado: pendiente
deps: [task-003, task-004]
---
ctx: Actualizar configuración de colores Tailwind
arch: tailwind.config.mjs, src/styles/global.css
req: |
  1. Crear nueva paleta de colores en tailwind.config.mjs con los colores especificados:
     - Primary: #2563eb (azul vibrante)
     - Secondary: #0f172a (slate oscuro)  
     - Accent: #f59e0b (dorado/ámbar)
     - Background light: #f8fafc
     - Background dark: #0f172a
  2. Definir temas light y dark con sus respectivos backgrounds, textos y colores
  3. Agregar CSS custom si es necesario para colores adicionales
  4. Asegurar que los colores soporten ambos themes (light/dark)
out: |
  Verificar que tailwind.config.mjs contenga la nueva configuración de colores.
  Los colores deben estar disponibles como clases Tailwind (bg-primary, text-secondary, etc.)