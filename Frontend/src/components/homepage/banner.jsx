import { useState, useEffect } from "react";
import { bannerSlides } from "../../data/banner.js";
import styles from "./Banner.module.css";
 
const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = bannerSlides[current];

  return (
    <div className={styles.banner}>
      
      {/* Left Content */}
      <div className={styles.content}>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <button>{slide.buttonText}</button>
      </div>

      {/* Right Image */}
      <div className={styles.imageContainer}>
        <img src={slide.image} alt="banner" />
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {bannerSlides.map((_, index) => (
          <span
            key={index}
           className={`${styles.dot} ${
  index === current ? styles.activeDot : ""
}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Banner;