# Alta Maquina - Landing Page

Landing page institucional para negocio de máquinas industriales.

## Tecnologias

- **Astro** v5.0 - Framework web
- **Tailwind CSS** v3.4 - Framework de estilos
- **TypeScript** - Tipado estático

## Estructura del Proyecto

```
alta-maquina/
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Servicios.astro
│   │   ├── PorQueElegirnos.astro
│   │   ├── Contacto.astro
│   │   ├── Button.astro
│   │   └── Container.astro
│   ├── layouts/       # Layout base
│   │   └── Layout.astro
│   ├── pages/         # Páginas
│   │   └── index.astro
│   └── styles/        # Estilos globales
│       └── global.css
├── public/             # Assets estáticos
├── tailwind.config.mjs
└── package.json
```

## Como Ejecutar

### Desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:4321 en el navegador.

### Produccion

```bash
npm run build
npm run preview
```

El build se genera en la carpeta `dist/`.

## Secciones Implementadas

1. **Header** - Navegación con logo y links
2. **Hero** - Sección principal con llamado a la acción
3. **Servicios** - Listado de servicios ofrecidos
4. **Por Qué Elegirnos** - Diferenciales y beneficios
5. **Contacto** - Formulario o información de contacto
6. **Footer** - Links adicionales y copyright

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Previsualizar build de producción