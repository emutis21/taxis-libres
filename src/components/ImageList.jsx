import fondo1 from "../assets/images/fondo-1.webp";
import fondo2 from "../assets/images/fondo-2.webp";
import fondo3 from "../assets/images/fondo-3.webp";
import fondo4 from "../assets/images/fondo-4.webp";
import fondo5 from "../assets/images/fondo-5.webp";
import fondo6 from "../assets/images/fondo-6.webp";
import fondo7 from "../assets/images/fondo-7.webp";
import fondo8 from "../assets/images/fondo-8.webp";
import bancolombia from "../assets/images/sponsor-bancolombia.webp";
import ursafe from "../assets/images/sponsor-ursafe.webp";
import vanti from "../assets/images/sponsor-vanti.webp";

const ImagesList = [
  {
    src: fondo1,
    name: "Fondo 1",
    content: {
      sponsor: "",
      title: "Descarga Taxis libres app",
      text: "Y pide tu taxi de forma segura, fácil y rápida",
      button: {
        href: "https://www.taxislibres.com.co/descarga-taxis-libres-app",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo2,
    name: "Fondo 2",
    content: {
      sponsor: { src: vanti, name: "sponsor-vanti" },
      title:
        "Explora nuevos horizontes, respira tranquilamente en nuestros taxis",
      text: "Si eres conductor, ahorra con Gas Natural Vehicular en tu taxi y obtén hasta $1.300.000 en beneficios",
      button: {
        href: "https://www.taxislibres.com.co/vanti-consumo",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo3,
    name: "Fondo 3",
    content: {
      sponsor: { src: vanti, name: "sponsor-vanti" },
      title: "Avanzar es respirar un nuevo aire",
      text: "Tanquea tu taxi en estaciones Vanti y recibe grandes beneficios",
      button: {
        href: "https://www.taxislibres.com.co/vanti-consumo",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo4,
    name: "Fondo 4",
    content: {
      sponsor: "",
      title:
        "Nuestra nueva navegación en tiempo real con Google Maps",
      text: "Confía en nuestra solución de navegación avanzada, para ofrecerte una experiencia de viaje excepcional",
      button: {
        href: "https://www.taxislibres.com.co/blog/taxis-libres-implementa-odrd-con-google-maps-platform",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo5,
    name: "Fondo 5",
    content: {
      sponsor: "",
      title: "¡Cuatro gatos inspectores se unen al equipo!",
      text: "Conoce a Guardián, Centinela, Capitana e Inspector, los nuevos integrantes de Taxis Libres.",
      button: {
        href: "https://www.taxislibres.com.co/blog/gatos-inspectores-en-taxis-libres",
        title: "Más información",
      },
    },
  },
  {
    src: fondo6,
    name: "Fondo 6",
    content: {
      sponsor: { src: ursafe, name: "sponsor-ursafe" },
      title: "Viaja con confianza, cuidamos cada detalle en tu experiencia",
      text: "Mantén el control de tu seguridad con nuestro sistema de protección activado por voz",
      button: {
        href: "https://www.taxislibres.com.co/blog/conductores-taxi/ursafe",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo7,
    name: "Fondo 7",
    content: {
      sponsor: { src: bancolombia, name: "sponsor-bancolombia" },
      title: "Paga tus viajes usando códigos QR",
      text: "",
      button: {
        href: "https://www.taxislibres.com.co/blog/conductores-taxi/ganadores-bancolombia-san-andres",
        title: "Ver más",
      },
    },
  },
  {
    src: fondo8,
    name: "Fondo 8",
    content: {
      sponsor: "",
      title: "¡Nuestra jornada de adopción fue un éxito",
      text: "20 peluditos ahora tienen un nuevo hogar",
      button: {
        href: "https://www.taxislibres.com.co/blog/adopcion-perros-y-gatos-en-taxis-libres",
        title: "Ver más",
      },
    },
  },
];

export default ImagesList;
