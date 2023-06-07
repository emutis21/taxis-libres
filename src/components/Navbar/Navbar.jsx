import { useEffect, useState } from "react";

import "../../styles/Navbar.scss";
import NavLinks from "./NavLinks";
import Mobile from "./Mobile";

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
      <div className="desktop">
        <NavLinks scrolled={scrolled} />
      </div>
      <div className="mobile">
        <Mobile scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Navbar;
