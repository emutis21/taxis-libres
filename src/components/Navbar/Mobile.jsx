import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

import { useState } from "react";
import NavLinks from "./NavLinks";

const Mobile = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-sidebar ${isOpen ? "" : "close"}`}>
      <div className="mobile-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <HiOutlineArrowSmLeft /> : <GiHamburgerMenu />}
        </button>
        <NavLinks scrolled={scrolled} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Mobile;
