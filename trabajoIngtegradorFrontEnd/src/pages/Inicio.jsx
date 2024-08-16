import Slider from "../components/Slider";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <>
      <Header />
      <MainSlider className="mainslider" />
      <Slider type={"series"} genre={"crime"} section="Destacados" />
      <Slider type={"movie"} genre={"horror"} section="Noche de terror" />
      <Footer />
    </>
  );
}

export default Inicio;
