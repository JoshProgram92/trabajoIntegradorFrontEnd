import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import Formulario from "./pages/Formulario";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
