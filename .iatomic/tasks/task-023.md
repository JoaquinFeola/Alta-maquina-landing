---
id: task-023
tipo: test-e2e
agente: tester
prio: high
estado: pendiente
deps: [task-022]
---
ctx: Testing completo del theme toggle
arch: Tests manuales del theme toggle en navegador
req: |
  Verificar manualmente los siguientes escenarios:
  1. Al cargar página por primera vez → mostrar modo light
  2. Click en toggle → cambiar a modo dark con transición suave
  3. Recargar página → mantener tema dark seleccionado
  4. Click en toggle → cambiar a modo light con transición suave
  5. Recargar página → mantener tema light seleccionado
  6. Verificar que todos los componentes se actualicen correctamente en ambos temas:
     - Backgrounds
     - Textos
     - Colores de botones
     - Cards y secciones
  7. Verificar que no haya parpadeo al cambiar de tema
out: |
  Completar checklist de verificación.
  Documentar cualquier bug encontrado.
  Confirmar que theme toggle funciona correctamente en todos los escenarios.