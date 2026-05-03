---
id: task-022
tipo: feature
agente: coder
prio: high
estado: pendiente
deps: [task-021]
---
ctx: Implementar theme toggle dark/light
arch: src/components/Header.astro, src/scripts/theme-toggle.js, src/styles/global.css
req: |
  1. Crear botón de toggle en el header para cambiar entre modo light y dark
  2. Por defecto: modo claro (light)
  3. Guardar preferencia del usuario en localStorage con clave "theme"
  4. Aplicar transiciones suaves (300ms) al cambiar entre temas usando CSS transitions
  5. Cargar preferencia guardada al iniciar la página
  6. El botón debe mostrar el estado actual del tema (ícono sol/luna)
out: |
  - El toggle cambia entre themes al hacer click
  - La preferencia se guarda en localStorage y persiste al recargar
  - Las transiciones son suaves (sin parpadeo)
  - Por defecto carga modo light
  - Al recargar página mantiene el tema guardado