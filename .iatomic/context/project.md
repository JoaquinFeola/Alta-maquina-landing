# CONTEXTO DEL PROYECTO

## Información General
- **nombre**: Alta Maquina
- **tipo**: Landing page corporativa (2 páginas)
- **stack**: Astro 5 + Tailwind CSS + @tabler/icons-react
- **estado**: Revamp completado - FASE 0-5 terminadas
- **cliente**: Joaquín Feola
- **telefono**: NO MOSTRAR (eliminado del sitio por decisión del cliente)
- **hosting**: Cloudflare (wrangler)
- **dominio**: altamaquina.com (live)

## Estructura del Sitio (2 páginas)

### Página 1: / (index.astro) — Desarrollo Web
- Hero: "Potenciá tu negocio. Conquistá internet."
- ServiciosWeb: 6 servicios web en grid
- PlanesWeb: 3 tabs (Desarrollo, Mantenimiento, Extras)
- Proceso: 4 pasos (Contacto → Diseño → Desarrollo → Entrega)
- CTA: Contacto con redes sociales
- SEO: pageType="web", Schema.org ProfessionalService

### Página 2: /servicio-tecnico — Servicio Técnico PC
- HeroPC: "Tu PC como nueva"
- ServiciosPC: Limpieza ($14.000), Diagnóstico ($5.000), Armado (cotización)
- PreciosPC: Tabla de precios + ubicación Partido de la Costa
- CTAPC: Contacto con redes sociales
- SEO: pageType="pc", Schema.org LocalBusiness

## Estructura de Archivos (actualizada)
```
src/
  components/
    ui/          → SectionTitle, SocialLinks, ThemeToggle
    web/         → Hero, ServiciosWeb, PlanesWeb, Proceso, CTA
    pc/          → HeroPC, ServiciosPC, PreciosPC, CTAPC
    Header.astro → Compartido, prop page="web"|"pc"
    Footer.astro → Compartido
    Button.astro → Reutilizable
    Container.astro → Reutilizable
  data/
    nav.ts           → Links de navegación por página
    planes.ts        → Planes web, mantenimiento, extras
    servicios-web.ts → 6 servicios web
    servicios-pc.ts  → 3 servicios PC + ubicación
    social.ts        → Links sociales + nombre contacto
  fonts/
    Inter-Latin.woff2
    Inter-LatinExt.woff2
  layouts/
    Layout.astro → SEO por página (pageType web|pc)
  pages/
    index.astro
    servicio-tecnico.astro
  styles/
    global.css
    fonts.css
```

## Servicios Web (Página principal)
1. Landing Page Básica — $80.000
2. Web Institucional — Desde $250.000 ⭐
3. Plan Turnos Online — Desde $450.000 ⭐
4. Plan Catálogo Online — Desde $350.000
5. Plan Tienda Online — Desde $700.000 ⭐
6. Web Personalizada — Cotización
+ Mantenimiento Básico: $6.000/mes
+ Mantenimiento Profesional: $20.000/mes
+ Extras: Nueva sección, página adicional, Google Maps, cambios fuera de plan

## Servicios PC (Página secundaria)
1. Limpieza física completa — $14.000
2. Diagnóstico y revisión — $5.000 (se descuenta si tomás el servicio)
3. Armado de PC — Cotización personalizada (solo si tenés los componentes)

## Redes Sociales
- Facebook: https://www.facebook.com/altamaquina.sb/
- Instagram: https://www.instagram.com/altamaquinasb/
- Gmail: altamaquinassb@gmail.com

## SEO Implementado
- ✅ Fuentes self-hosted (Inter variable font, latin + latin-ext)
- ✅ Zero Google Fonts CDN calls
- ✅ Meta tags completos (description, keywords, OG, Twitter)
- ✅ Schema.org JSON-LD por página (ProfessionalService / LocalBusiness)
- ✅ Canonical URLs
- ✅ lang="es-AR"
- ✅ Semantic HTML
- ✅ Sitemap automático (@astrojs/sitemap)
- ✅ robots.txt configurado

## Próximos Pasos (post-revamp)
- [ ] Formulario de selección de plan (nombre + mail + plan → email a Joaquín)
- [ ] Botón flotante de WhatsApp
- [ ] Deploy a Cloudflare
- [ ] Lighthouse audit completo