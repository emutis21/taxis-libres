import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { MdOutlineDownload, MdOutlineRadio, MdWhatsapp } from "react-icons/md";
import { SiHuawei } from "react-icons/si";
import { TbDotsVertical } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

import DropdownMenu from "./DropdownMenu";
import logo from "../assets/images/logo.webp";

const motionProps = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const NavLinks = ({ scrolled, isOpenSidebar, toggleSidebar }) => {
  return (
    <nav className={`${scrolled ? "scrolled" : ""}`}>
      <motion.button
        {...motionProps}
        className={isOpenSidebar ? "btn-sidebar-close" : "btn-sidebar"}
        onClick={() => toggleSidebar(!isOpenSidebar)}
      >
        <GiHamburgerMenu />
      </motion.button>
      <motion.div {...motionProps} className="navlinks">
        <a href="https://www.taxislibres.com.co/transporte-empresas">
          Empresas
        </a>
        <div className="icons iconsR">
          <DropdownMenu
            title={<MdOutlineDownload className="iconDownload" />}
            tooltipL="Descargar App"
            isOpenSidebar={isOpenSidebar}
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.ul>
          </DropdownMenu>
          <a
            href="https://api.whatsapp.com/send?phone=573102111111&text=Hola,%20guarda%20este%20contacto%20para%20pedir%20taxi%20f%C3%A1cil,%20r%C3%A1pido%20y%20seguro%20solo%20con%20enviar%20tu%20ubicaci%C3%B3n.%20%F0%9F%93%8D%F0%9F%9A%95"
            className="icon"
          >
            <MdWhatsapp />
            <tool-tip role="tooltip">WhatsApp</tool-tip>
          </a>
          <a href="https://www.taxislibres.com.co/emisora" className="icon">
            <MdOutlineRadio />
            <tool-tip role="tooltip">Emisora taxis libres</tool-tip>
          </a>
        </div>
      </motion.div>

      <motion.a
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        href="https://www.taxislibres.com.co"
        className="img"
      >
        <img src={logo} alt="logo-taxislibres" />
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="navlinks"
      >
        <div className="iconsR">
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
                <DropdownMenu title="Otros">
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
      </motion.div>
    </nav>
  );
};

export default NavLinks;
