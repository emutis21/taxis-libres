import { useRef, useEffect } from "react";
import "../styles/sidebar.scss";
import NavLinks from "./NavLinks";

const Sidebar = ({ isOpenSidebar, toggleSidebar }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      isOpenSidebar &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      toggleSidebar(false);
    }
  };

  useEffect(() => {
    if (isOpenSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenSidebar, toggleSidebar]);

  return (
    <div>
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpenSidebar ? "active" : ""}`}
      >
        <h2>Taxis Libres</h2>
        <NavLinks />
      </div>
    </div>
  );
};

export default Sidebar;
