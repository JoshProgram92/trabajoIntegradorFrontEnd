import Slider from "../components/Slider";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";

export default function Peliculas() {
  return (
    <>
      <Header />
      <MainSlider className="mainslider" />
      <Slider type={"movie"} genre={"comedy"} section="Destacados" />
      <Slider type={"movie"} genre={"drama"} section="Noche de terror" />
      <Footer />
    </>
  );
}
