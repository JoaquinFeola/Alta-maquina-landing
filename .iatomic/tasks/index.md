# INDEX DE TAREAS - Alta Maquina

## Estado General
- **proyecto**: Alta Maquina Landing Pages (2 páginas)
- **stack**: Astro 5 + Tailwind CSS + @tabler/icons-react
- **estado**: Revamp completado — FASE 0-5 finalizadas
- **ultima_actualizacion**: 2026-05-19
- **total_tareas**: 28
- **completadas**: 25
- **pendientes**: 3 (testing + review final)

## FASE 0: Configuración y SEO — ✅ COMPLETADA
- [x] task-001 → Descargar fuentes Inter self-hosted (latin + latin-ext variable) [frontend] {feature}
- [x] task-002 → Configurar @font-face en fonts.css + global.css [frontend] {feature}
- [x] task-003 → Refactor Layout con SEO por página (pageType web|pc) + eliminar Google Fonts CDN [frontend] {feature}

## FASE 1: Data Layer — ✅ COMPLETADA
- [x] task-004 → Crear src/data/nav.ts (navLinksWeb, navLinksPC, pcPageLink, webPageLink) [frontend] {feature}
- [x] task-005 → Crear src/data/planes.ts (planesWeb, planesMantenimiento, extras) [frontend] {feature}
- [x] task-006 → Crear src/data/servicios-web.ts (6 servicios) [frontend] {feature}
- [x] task-007 → Crear src/data/servicios-pc.ts (3 servicios + ubicación) [frontend] {feature}
- [x] task-008 → Crear src/data/social.ts (Facebook, Instagram, Gmail) [frontend] {feature}

## FASE 2: UI Components Base — ✅ COMPLETADA
- [x] task-009 → Crear SectionTitle.astro (título con highlight + subtítulo) [frontend] {feature}
- [x] task-010 → Crear SocialLinks.astro (grid/row, sm/md/lg, con/sin nombre) [frontend] {feature}
- [x] task-011 → Crear ThemeToggle.astro (dark/light toggle) [frontend] {feature}

## FASE 3: Layout Components — ✅ COMPLETADA
- [x] task-012 → Rebuild Header.astro (page prop, cross-page badge, gradient line, mobile menu) [frontend] {feature}
- [x] task-013 → Rebuild Footer.astro (sin teléfono, 3 columnas, redes sociales) [frontend] {feature}

## FASE 4: Página Principal — ✅ COMPLETADA
- [x] task-014 → Crear web/Hero.astro ("Potenciá tu negocio. Conquistá internet.") [frontend] {feature}
- [x] task-015 → Crear web/ServiciosWeb.astro (6 servicios en grid) [frontend] {feature}
- [x] task-016 → Crear web/PlanesWeb.astro (3 tabs: desarrollo, mantenimiento, extras) [frontend] {feature}
- [x] task-017 → Crear web/Proceso.astro (4 pasos con connector lines) [frontend] {feature}
- [x] task-018 → Crear web/CTA.astro (contacto con redes) [frontend] {feature}
- [x] task-019 → Rebuild index.astro con componentes nuevos [frontend] {feature}
- [x] task-020 → Eliminar componentes viejos (Hero, Servicios, Planes, PorQueElegirnos, Contacto) [frontend] {feature}

## FASE 5: Página Servicio Técnico — ✅ COMPLETADA
- [x] task-021 → Crear pc/HeroPC.astro ("Tu PC como nueva") [frontend] {feature}
- [x] task-022 → Crear pc/ServiciosPC.astro (3 servicios con precios) [frontend] {feature}
- [x] task-023 → Crear pc/PreciosPC.astro (tabla de precios + ubicación) [frontend] {feature}
- [x] task-024 → Crear pc/CTAPC.astro (contacto PC) [frontend] {feature}
- [x] task-025 → Crear servicio-tecnico.astro (página completa) [frontend] {feature}

## FASE 6: Testing y Polish — ⏳ PENDIENTE
- [ ] task-026 → Code review general (calidad, consistencia, SEO) [code-reviewer] {review}
- [ ] task-027 → Testing E2E: build, responsive, dark mode, navegación entre páginas [tester] {test-e2e}
- [ ] task-028 → Deploy a Cloudflare + Lighthouse audit [coder] {deploy}

## Archivos Creados/Modificados
### Nuevos (20 archivos)
- src/fonts/Inter-Latin.woff2
- src/fonts/Inter-LatinExt.woff2
- src/styles/fonts.css
- src/data/nav.ts
- src/data/planes.ts
- src/data/servicios-web.ts
- src/data/servicios-pc.ts
- src/data/social.ts
- src/components/ui/SectionTitle.astro
- src/components/ui/SocialLinks.astro
- src/components/ui/ThemeToggle.astro
- src/components/web/Hero.astro
- src/components/web/ServiciosWeb.astro
- src/components/web/PlanesWeb.astro
- src/components/web/Proceso.astro
- src/components/web/CTA.astro
- src/components/pc/HeroPC.astro
- src/components/pc/ServiciosPC.astro
- src/components/pc/PreciosPC.astro
- src/components/pc/CTAPC.astro
- src/pages/servicio-tecnico.astro

### Modificados (4 archivos)
- src/styles/global.css (import fonts.css)
- src/layouts/Layout.astro (SEO por página, sin Google Fonts)
- src/components/Header.astro (rebuild completo)
- src/components/Footer.astro (rebuild completo)
- src/pages/index.astro (rebuild con nuevos componentes)

### Eliminados (5 archivos)
- src/components/Hero.astro
- src/components/Servicios.astro
- src/components/Planes.astro
- src/components/PorQueElegirnos.astro
- src/components/Contacto.astro

## Próximos Pasos (post-revamp)
- Formulario de selección de plan (nombre + mail + plan → email)
- Botón flotante de WhatsApp
- Deploy a Cloudflare Pages
