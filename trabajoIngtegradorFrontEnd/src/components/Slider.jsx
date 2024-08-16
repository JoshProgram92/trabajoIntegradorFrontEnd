import { useState, useEffect } from "react";
import "../styles/Slider.css";

function Slider({ section, type, genre }) {
  // API call
  const [data, setData] = useState();

  const posterRequest = async () => {
    const url = `https://www.omdbapi.com/?type=${type}&s=${genre}&apikey=9548f013`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setData((data) => responseJson.Search);
  };

  useEffect(() => {
    posterRequest();
  }, []);

  // Lógica de movimiento
  const [curr, setCurr] = useState(0);

  const prev = () => {
    if (curr != 0) {
      setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
    }
  };

  const next = () => {
    if (curr != 4) {
      setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
    } else setCurr((curr) => (curr = 0));
  };

  return (
    <>
      <div className="slider-container">
        <h2>{section}</h2>
        <div
          className="slider-images"
          style={{ transform: `translateX(-${curr * 10}%)` }}
        >
          {data?.map((movie, index) => (
            <img className="slider-img" key={index} src={movie.Poster}></img>
          ))}
        </div>

        <div className="button-div">
          <button onClick={prev} className="left">
            <img
              className="arrow-img"
              src="../src/assets/left-arrow.png"
              alt=""
            />
          </button>
          <button onClick={next} className="right">
            <img
              className="arrow-img"
              src="../src/assets/right-arrow.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
