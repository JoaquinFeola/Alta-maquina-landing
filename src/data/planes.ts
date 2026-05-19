export interface Plan {
  id: string;
  nombre: string;
  precio: string;
  descripcion: string;
  icono: string; // icon name string, to be resolved in component
  popular?: boolean;
  incluye: string[];
  noIncluye?: string[];
  nota?: string;
  ejemplos?: string[];
}

export const planesWeb: Plan[] = [
  {
    id: 'landing-basica',
    nombre: 'Landing Page Básica',
    precio: '$80.000',
    descripcion: 'Página web profesional ideal para pequeños negocios',
    icono: 'IconPackage',
    incluye: [
      'Página web profesional',
      'Adaptada para celulares',
      'Hasta 5 secciones',
      'Botón de WhatsApp',
      'Formulario de contacto',
      'Sitio seguro (SSL)',
      'Optimización básica para Google',
      'Publicación online',
    ],
    noIncluye: [
      'Compra del dominio',
      'Tienda online',
      'Panel administrador',
      'Sistemas de turnos',
      'Funcionalidades avanzadas',
    ],
    nota: 'El dominio es contratado y abonado por el cliente',
  },
  {
    id: 'web-institucional',
    nombre: 'Web Institucional',
    precio: 'Desde $250.000',
    descripcion: 'Ideal para empresas, estudios y negocios más grandes',
    icono: 'IconWorld',
    popular: true,
    incluye: [
      'Sitio web profesional',
      'Adaptado para celulares',
      'Hasta 5 páginas internas',
      'Formulario de contacto',
      'Botón de WhatsApp',
      'Galería de imágenes',
      'Google Maps',
      'Optimización para Google',
      'Sitio seguro (SSL)',
      'Diseño más personalizado',
    ],
    noIncluye: [
      'Tienda online',
      'Panel administrador avanzado',
      'Sistemas personalizados',
    ],
    nota: 'El dominio es contratado y abonado por el cliente',
    ejemplos: ['Inicio', 'Nosotros', 'Servicios', 'Galería', 'Contacto'],
  },
  {
    id: 'turnos-online',
    nombre: 'Plan Turnos Online',
    precio: 'Desde $450.000',
    descripcion: 'Ideal para profesionales y negocios con citas',
    icono: 'IconCalendar',
    popular: true,
    incluye: [
      'Todo lo del sitio institucional',
      'Sistema de turnos',
      'Calendario disponible',
      'Reservas online',
      'Confirmación básica',
      'Administración simple de turnos',
    ],
    noIncluye: [
      'Pagos online',
      'Sistemas complejos de gestión',
      'Integraciones empresariales',
    ],
    nota: 'El dominio es contratado y abonado por el cliente',
  },
  {
    id: 'catalogo-online',
    nombre: 'Plan Catálogo Online',
    precio: 'Desde $350.000',
    descripcion: 'Ideal para emprendimientos y tiendas pequeñas',
    icono: 'IconShoppingCart',
    incluye: [
      'Catálogo de productos',
      'Categorías',
      'Imágenes',
      'Botón de consulta por WhatsApp',
      'Filtros básicos',
      'Adaptado para celulares',
      'Optimización básica para Google',
    ],
    noIncluye: [
      'Pagos online automáticos',
      'Gestión avanzada de stock',
      'Facturación',
    ],
    nota: 'El dominio es contratado y abonado por el cliente',
  },
  {
    id: 'tienda-online',
    nombre: 'Plan Tienda Online',
    precio: 'Desde $700.000',
    descripcion: 'Ecommerce completo para vender online',
    icono: 'IconShoppingCart',
    popular: true,
    incluye: [
      'Tienda online completa',
      'Carrito de compras',
      'Pagos online',
      'Gestión de productos',
      'Panel administrador',
      'Categorías',
      'Seguimiento de pedidos',
      'Adaptada para celulares',
      'Optimización para Google',
    ],
    noIncluye: [
      'Sistemas ERP',
      'Integraciones empresariales complejas',
      'Aplicación móvil',
    ],
    nota: 'El dominio es contratado y abonado por el cliente',
  },
  {
    id: 'web-personalizada',
    nombre: 'Web Personalizada',
    precio: 'Cotización personalizada',
    descripcion: 'Sistemas especiales, plataformas e ideas personalizadas',
    icono: 'IconBolt',
    incluye: [
      'Desarrollo a medida',
      'Funcionalidades personalizadas',
      'Diseño específico',
      'Escalabilidad',
      'Análisis del proyecto',
    ],
    nota: 'Precio adaptado a tus necesidades',
  },
];

export interface PlanMantenimiento {
  id: string;
  nombre: string;
  precio: string;
  descripcion: string;
  incluye: string[];
  noIncluye?: string[];
}

export const planesMantenimiento: PlanMantenimiento[] = [
  {
    id: 'mant-basico',
    nombre: 'Mantenimiento Básico',
    precio: '$6.000/mes',
    descripcion: 'Mantenimiento esencial para tu sitio web',
    incluye: [
      'Página online 24/7',
      'Mantenimiento técnico',
      'Seguridad del sitio',
      'Monitoreo básico',
      'Renovación de configuraciones necesarias',
    ],
    noIncluye: [
      'Cambios en el contenido',
      'Nuevas secciones',
      'Modificaciones de diseño',
    ],
  },
  {
    id: 'mant-profesional',
    nombre: 'Mantenimiento Profesional',
    precio: '$20.000/mes',
    descripcion: 'Soporte completo con cambios mensuales',
    incluye: [
      'Todo lo del plan básico',
      'Cambios pequeños en textos',
      'Reemplazo de imágenes',
      'Actualización de información',
      'Soporte por WhatsApp',
      'Hasta 3 cambios mensuales',
    ],
    noIncluye: [
      'Nuevas páginas',
      'Rediseño completo',
      'Funcionalidades nuevas',
      'Integraciones avanzadas',
    ],
  },
];

export interface Extra {
  servicio: string;
  precio: string;
}

export const extras: Extra[] = [
  { servicio: 'Nueva sección', precio: 'Desde $10.000' },
  { servicio: 'Página adicional', precio: 'Desde $20.000' },
  { servicio: 'Integración Google Maps', precio: 'Desde $10.000' },
  { servicio: 'Cambios fuera del plan', precio: 'Cotización aparte' },
];
