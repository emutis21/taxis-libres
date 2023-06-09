import { useState, useEffect, useRef } from "react";

import Slide from "./Slide";
import TimeBar from "./TimeBar";

import "../styles/Carousel.scss";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayTimer = useRef(null);

  const duration = 14000;

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const getTransformValue = () => {
    return `translateX(-${activeIndex * 100}%)`;
  };

  const getNextIndex = () => {
    return activeIndex === images.length - 1 ? 0 : activeIndex + 1;
  };

  const startAutoplay = () => {

    autoplayTimer.current = setTimeout(() => {
      const nextIndex = getNextIndex();
      setActiveIndex(nextIndex);
    }, duration);
  };

  const stopAutoplay = () => {
    clearTimeout(autoplayTimer.current);
  };

  const handleSpanClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, []);

  useEffect(() => {
    stopAutoplay();
    startAutoplay();
  }, [activeIndex]);

  return (
    <section className="slider-box">
      <div
        className="slider"
        style={{
          transform: getTransformValue(),
        }}
      >
        {images.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            id={`btn${index + 1}`}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleSpanClick(index)}
          ></span>
        ))}
      </div>
      <TimeBar startAutoplay={startAutoplay} duration={duration} />
    </section>
  );
};

export default Carousel;
