import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY >= 560);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <div className="scrollup__container show">
          <button className="scrollup" onClick={scrollToTop}>
            <IoMdArrowUp className="scrollup__icon" />
            <tool-tip role="tooltip">Ir arriba</tool-tip>
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollUp;
