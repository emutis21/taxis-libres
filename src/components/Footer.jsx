import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

import footer1 from "../assets/images/footer-1.webp";
import footer2 from "../assets/images/footer-2.webp";
import footer3 from "../assets/images/footer-3.webp";
import footer4 from "../assets/images/footer-4.webp";
import footer5 from "../assets/images/footer-5.webp";

import AppStore from "../assets/images/App-Store.webp";
import GooglePlay from "../assets/images/Google-Play.webp";
import AppGalley from "../assets/images/AppGallery.webp";

import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-links">
          <div>
            <h2>Servicios</h2>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
          </div>
          <div>
            <h2>Cónocenos</h2>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
          </div>
          <div>
            <h2>Contáctanos</h2>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
          </div>
          <div>
            <h2>Líneas de atención</h2>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
          </div>
          <div>
            <h2>Otros links</h2>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
            <a href="">lorem impsu dolor...</a>
          </div>
        </div>
        <div className="footer-images">
          <div className="img">
            <img src={footer1} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={footer2} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={footer3} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={footer5} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={footer4} alt="Imagen del footer" />
          </div>
        </div>
        <div className="footer-social">
          <div>
            <SiFacebook />
            <tool-tip role="tooltip" >Facebook</tool-tip>
          </div>
          <div>
            <SiTwitter />
            <tool-tip role="tooltip" >Twitter</tool-tip>
          </div>
          <div>
            <SiInstagram />
            <tool-tip role="tooltip" >Instagram</tool-tip>
          </div>
          <div>
            <SiYoutube />
            <tool-tip role="tooltip" >Youtube</tool-tip>
          </div>
          <div>
            <SiTiktok />
            <tool-tip role="tooltip" >TikTok</tool-tip>
          </div>
          <div>
            <SiLinkedin />
            <tool-tip role="tooltip" >Linkedin</tool-tip>
          </div>
        </div>
      </div>
      <div className="end-footer">
        <div className="end-footer-imgs">
          <div className="img">
            <img src={AppStore} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={GooglePlay} alt="Imagen del footer" />
          </div>
          <div className="img">
            <img src={AppGalley} alt="Imagen del footer" />
          </div>
        </div>
        <div className="end-footer-legal">
          <a href="">Aviso legal</a>
          <a href="">Políticas</a>
          <a href="">Términos</a>
        </div>
        <small>© Esteban S Mutis</small>
      </div>
    </footer>
  );
};

export default Footer;
