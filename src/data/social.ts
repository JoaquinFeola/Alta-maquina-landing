export interface SocialLink {
  nombre: string;
  url: string;
  icono: string;
  color: string;
  colorHover: string;
}

export const socialLinks: SocialLink[] = [
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/altamaquina.sb/',
    icono: 'IconBrandFacebook',
    color: 'bg-blue-600',
    colorHover: 'hover:bg-blue-700',
  },
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/altamaquinasb/',
    icono: 'IconBrandInstagram',
    color: 'bg-gradient-to-br from-purple-600 to-pink-500',
    colorHover: 'hover:from-purple-700 hover:to-pink-600',
  },
  {
    nombre: 'Gmail',
    url: 'mailto:altamaquinassb@gmail.com?subject=Consulta desde la web&body=Hola! Me interesa saber más sobre los servicios de Alta Maquina',
    icono: 'IconMail',
    color: 'bg-red-500',
    colorHover: 'hover:bg-red-600',
  },
];

export const nombreContacto = 'Joaquín Feola';
