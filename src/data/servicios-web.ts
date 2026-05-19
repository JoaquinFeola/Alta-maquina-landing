export interface ServicioWeb {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export const serviciosWeb: ServicioWeb[] = [
  {
    id: 'landing-pages',
    titulo: 'Landing Pages',
    descripcion: 'Páginas de impacto para presentar tu negocio, producto o servicio de forma profesional y efectiva.',
    icono: 'IconLayout',
  },
  {
    id: 'web-institucional',
    titulo: 'Web Institucional',
    descripcion: 'Sitios web completos con múltiples páginas para empresas y negocios que necesitan presencia online sólida.',
    icono: 'IconBuilding',
  },
  {
    id: 'ecommerce',
    titulo: 'Tiendas Online',
    descripcion: 'Vendé tus productos las 24 horas con una tienda online completa, carrito de compras y pagos integrados.',
    icono: 'IconShoppingCart',
  },
  {
    id: 'sistemas-turnos',
    titulo: 'Sistemas de Turnos',
    descripcion: 'Permití que tus clientes reserven online con un sistema de turnos fácil de administrar.',
    icono: 'IconCalendar',
  },
  {
    id: 'catalogos',
    titulo: 'Catálogos Online',
    descripcion: 'Mostrá tus productos con un catálogo digital organizado por categorías con consulta por WhatsApp.',
    icono: 'IconGridDots',
  },
  {
    id: 'web-medida',
    titulo: 'Desarrollo a Medida',
    descripcion: 'Plataformas y sistemas personalizados para ideas únicas que necesitan funcionalidades específicas.',
    icono: 'IconCode',
  },
];
