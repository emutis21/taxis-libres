import { useEffect, useRef } from "react";
import { MdChevronRight } from "react-icons/md";

const Slide = ({ image }) => {
  const {
    src,
    name,
    content: { title, text, sponsor, button },
  } = image;

  const slideRef = useRef(null);

  useEffect(() => {
    const parallaxScroll = () => {
      if (slideRef.current) {
        const scrollPosition = window.pageYOffset;
        const speed = 0.5; // Ajusta la velocidad de parallax según tus necesidades
        slideRef.current.style.transform = `translateY(${
          scrollPosition * speed
        }px)`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);
    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  return (
    <div className="slide">
      <img ref={slideRef} src={src} alt={name} className="slide-image" />
      <div className="sponsor">
        <figure>
          <figcaption>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
          </figcaption>
          {sponsor && <img src={sponsor.src} alt={sponsor.name} />}

          <a href={button.href} className="button">
            {button.title} <MdChevronRight />
          </a>
        </figure>
      </div>
    </div>
  );
};

export default Slide;
