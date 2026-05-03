---
id: task-010
tipo: feature
agente: coder
prio: high
estado: pendiente
deps: [task-005, task-006]
---
ctx: Implementar sección Contacto y Footer
arch: src/components/Contacto.astro, src/components/Footer.astro
req: |
  - Crear componente Contacto con:
    - Datos del cliente: Joaquín Feola
    - Teléfono: +5491134477270
    - Mensaje de invitación a contactar
  - Crear componente Footer con:
    - Copyright con año actual
    - Links de navegación si aplica
    - Diseño consistente con el resto del sitio
  - Integrar ambos en el layout base
out: Secciones Contacto y Footer visibles y funcionales
review_required: true