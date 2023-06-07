import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = ({ title, tooltipR, tooltipL, arrow, children, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsMoreOpen(false);
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMoreOpen(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="dropdown" onMouseDown={handleClick} ref={dropdownRef}>
      <div
        className={`dropdown-toggle ${isOpen ? "dropdown-toggle-open" : ""}`}
      >
        {title}
        {tooltipR && (
          <tool-tip
            role="tooltip"
            style={{
              left: "-185%",
              bottom: "5%",
            }}
          >
            {tooltipR}
          </tool-tip>
        )}
        {tooltipL && <tool-tip role="tooltip">{tooltipL}</tool-tip>}
        {arrow && (
          <MdOutlineKeyboardArrowDown
            className={`${isOpen ? "open-rotate" : "close-rotate"}`}
          />
        )}
      </div>
      {isOpen && (
        <div
          className={`dropdown-menu ${
            isOpen ? "dropdown-menu-open" : "dropdown-menu-close"
          } ${t ? "true" : ""}`}
          onMouseDown={stopPropagation}
        >
          {children}
        </div>
      )}
      {isMoreOpen && (
        <div
          className={`dropdown-menu ${
            isMoreOpen ? "dropdown-menu-open" : "dropdown-menu-close"
          }`}
          onMouseDown={stopPropagation}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
