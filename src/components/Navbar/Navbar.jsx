import { MdOutlineDownload, MdOutlineRadio, MdWhatsapp } from "react-icons/md";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { TbDotsVertical } from "react-icons/tb";
import { SiHuawei } from "react-icons/si";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.webp";
import DropdownMenu from "../DropdownMenu";

import "../../styles/Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 64) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="navlinks">
          <a href="https://www.taxislibres.com.co/transporte-empresas">
            Empresas
          </a>
          <div className="icons">
            <DropdownMenu
              tooltipL="Descargar"
              title={<MdOutlineDownload className="iconDownload" />}
            >
              <ul>
                <li>
                  <a href="">
                    Android
                    <AiFillAndroid className="iconApp" />
                  </a>
                </li>
                <li>
                  <a href="">
                    iOS
                    <AiFillApple className="iconApp" />
                  </a>
                </li>
                <li>
                  <a href="">
                    Huawei
                    <SiHuawei className="iconApp" />
                  </a>
                </li>
              </ul>
            </DropdownMenu>
            <a href="" className="icon">
              <MdWhatsapp />
              <tool-tip role="tooltip">WhatsApp</tool-tip>
            </a>
            <a href="https://www.taxislibres.com.co/emisora" className="icon">
              <MdOutlineRadio />
              <tool-tip role="tooltip">Emisora taxis libres</tool-tip>
            </a>
          </div>
        </div>

        <a href="https://www.taxislibres.com.co" className="img">
          <img src={logo} alt="logo-taxislibres" />
        </a>

        <div className="navlinks">
          <DropdownMenu title="Servicios" arrow>
            <ul>
              <li>
                <a href="">Conductores</a>
              </li>
              <li>
                <a href="">Propietarios</a>
              </li>
              <li>
                <a href="">Beneficios</a>
              </li>
              <li>
                <a href="">Mi perfil</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li className="more">
                <DropdownMenu title="Más">
                  <ul>
                    <li>
                      <a href="">Sedes Bogotá</a>
                    </li>
                    <li>
                      <a href="">Vacantes</a>
                    </li>
                    <li>
                      <a href="">Centro de conocimiento</a>
                    </li>
                    <li>
                      <a href="">Podcast</a>
                    </li>
                  </ul>
                </DropdownMenu>
              </li>
            </ul>
          </DropdownMenu>
          <a href="https://www.taxislibres.com.co/wrpqs">Ayuda</a>
          <DropdownMenu
            title={<TbDotsVertical className="iconDownload" />}
            tooltipR="Más"
            t
          >
            <ul>
              <li>
                <a href="https://www.taxislibres.com.co/nosotros">Nosotros</a>
              </li>
              <li>
                <a href="https://www.taxislibres.com.co/pasajeros">Viajeros</a>
              </li>
            </ul>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
