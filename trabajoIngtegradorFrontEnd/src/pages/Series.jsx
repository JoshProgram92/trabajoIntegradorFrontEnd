import Slider from "../components/Slider";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";

export default function Series() {
  return (
    <>
      <Header />
      <MainSlider className="mainslider" />
      <Slider type={"series"} genre={"mysterious"} section="Destacados" />
      <Slider
        type={"series"}
        genre={"adventure"}
        section="La aventura continúa"
      />
      <Footer />
    </>
  );
}
