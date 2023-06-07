import { useState, useEffect } from "react";

const TimeBar = ({ startAutoplay, duration }) => {
  const [progress, setProgress] = useState(0);
  let startTime = Date.now();
  let animationFrameId;

  useEffect(() => {
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const calculatedProgress = (elapsedTime / duration) * 100;

      if (calculatedProgress >= 100) {
        startAutoplay();
      } else {
        setProgress(calculatedProgress);
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [startAutoplay, duration]);

  return (
    <div
      className="time-bar"
      style={{ width: `calc(0% + ${progress}%)`}}
    ></div>
  );
};

export default TimeBar;
