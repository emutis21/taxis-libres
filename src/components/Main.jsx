import Card from "./Card";
import Carousel from "./Carousel";
import ImagesList from "./ImageList";
import card1 from "../assets/images/card-1.webp";
import CellApp from "../assets/images/card-3-1.webp";
import CellWpp from "../assets/images/card-3-2.webp";
import card4 from "../assets/images/card-4.webp";
import Cells from "./Cells";

function Main() {
  const citys = {
    Bogota: {
      name: "Bogotá",
      href: "https://www.taxislibres.com.co/taxis-bogota",
    },
    Medellin: {
      name: "Medellín",
      href: "https://www.taxislibres.com.co/taxis-medellin",
    },
    Cali: { name: "Cali", href: "https://www.taxislibres.com.co/taxis-cali" },
    Bucaramanga: {
      name: "Bucaramanga",
      href: "https://www.taxislibres.com.co/taxis-bucaramanga",
    },
    Cucuta: {
      name: "Cúcuta",
      href: "https://www.taxislibres.com.co/taxis-cucuta",
    },
    Manizales: {
      name: "Manizales",
      href: "https://www.taxislibres.com.co/taxis%E2%80%93manizales",
    },
  };
  const cellPhones = {
    cellApp: {
      image: CellApp,
      title: "Taxis Libres App",
      description:
        "Ten viajes tranquilos y seguros pidiendo tu taxi por una aplicación 100% colombiana.",
      buttonText: "Descargar Taxis Libres App",
      href: "https://www.taxislibres.com.co/descarga-taxis-libres-app",
    },
    cellWpp: {
      image: CellWpp,
      title: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=3102112111&text=Hola%20taxis%20libres",
      description: (
        <>
          Pide tu taxi al{" "}
          <a
            className="number"
            href="https://api.whatsapp.com/send?phone=3102112111&text=Hola%20taxis%20libres"
          >
            <b>310 2111111</b>
          </a>{" "}
          de forma fácil y rápida, guardando el número en tus contactos.
        </>
      ),
      buttonText: "Pedir por WhatsApp",
    },
  };
  return (
    <main>
      <Carousel images={ImagesList} />
      <Card
        className="card-1"
        image={card1}
        alt="Imagen de la tarjeta"
        title="Taxis Libres, transporte seguro en tu ciudad."
        subtitle="Transporte para empresas"
        text="Moviliza a los colaboradores de tu compañía mientras llevas un control de todos los gastos."
        buttonText="Ver más"
        href="https://www.taxislibres.com.co/transporte-empresas"
      />
      <Card
        className="card-2"
        subtitle="Cobertura"
        text="Cuenta con Taxis Libres en las principales ciudades del país para transportarte de forma segura en taxi"
        information={citys}
      />
      <Cells info={cellPhones} />
      <Card
        className="card-4"
        imageEnd={card4}
        alt="Imagen de la tarjeta"
        title="¿Necesitas ayuda?"
        subtitle="Envía tus consultas y obtén respuestas personalizadas"
        text="Usa este canal para dejar tus preguntas, quejas, reclamos, peticiones o sugerencias sobre nuestro servicio y recibe una respuesta de acuerdo a tu necesidad"
        buttonText="Ver más"
        href="https://www.taxislibres.com.co/transporte-empresas"
      />
      
    </main>
  );
}

export default Main;
