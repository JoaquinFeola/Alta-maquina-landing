export interface NavLink {
  label: string;
  href: string;
}

export const navLinksWeb: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Planes', href: '#planes' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export const navLinksPC: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
];

export const pcPageLink: NavLink = {
  label: 'Servicio Técnico PC',
  href: '/servicio-tecnico',
};

export const webPageLink: NavLink = {
  label: 'Desarrollo Web',
  href: '/',
};
