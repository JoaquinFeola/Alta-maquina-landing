export interface ServicioPC {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  precio?: string;
  nota?: string;
}

export const serviciosPC: ServicioPC[] = [
  {
    id: 'limpieza',
    titulo: 'Limpieza Física Completa',
    descripcion: 'Limpieza profunda de tu equipo: polvo, pasta térmica, ventiladores y componentes. Tu PC como nueva.',
    icono: 'IconSparkles',
    precio: '$14.000',
  },
  {
    id: 'diagnostico',
    titulo: 'Diagnóstico y Revisión',
    descripcion: 'Revisión completa de tu equipo para detectar problemas de hardware y software. Incluye informe detallado.',
    icono: 'IconSearch',
    precio: '$5.000',
    nota: 'Se descuenta si tomás el servicio',
  },
  {
    id: 'armado',
    titulo: 'Armado de PC',
    descripcion: 'Armamos tu PC con los componentes que ya tengas. Configuración completa y testeado del equipo.',
    icono: 'IconTool',
    precio: 'Cotización personalizada',
    nota: 'Solo si tenés los componentes',
  },
];

export const ubicacion = {
  zona: 'Partido de la Costa',
  localidad: 'San Bernardo del Tuyú',
  provincia: 'Buenos Aires',
  pais: 'Argentina',
};
