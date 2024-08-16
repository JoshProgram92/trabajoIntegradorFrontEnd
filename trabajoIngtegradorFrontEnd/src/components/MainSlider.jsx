import { useEffect, useState } from "react";
import styles from "../styles/Mainslider.module.css";

function MainSlider() {
  const images = [
    "../src/assets/poster-1.jpg",
    "../src/assets/poster-2.jpg",
    "../src/assets/poster-3.jpg",
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.background}></div>

        <div
          className={styles.slider_images}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {images.map((movie, index) => (
            <img
              className={styles.mainslider_img}
              key={index}
              src={movie}
            ></img>
          ))}
        </div>

        <div className={styles.button_div}>
          <button onClick={prev} className={(styles.button, styles.left)}>
            <img
              className={styles.arrow_img}
              src="../src/assets/left-arrow.png"
              alt=""
            />
          </button>
          <button onClick={next} className={(styles.button, styles.right)}>
            <img
              className={styles.arrow_img}
              src="../src/assets/right-arrow.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default MainSlider;
