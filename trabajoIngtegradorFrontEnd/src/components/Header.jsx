import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  const styles = {
    textDecoration: "none",
  };
  return (
    <div className="header-container">
      <img className="logo" src="../src/assets/maxmovies.png" alt="" />
      <ul className="header-list">
        <li>
          <Link to="/" style={styles}>
            <h4>Inicio</h4>
          </Link>
        </li>
        <li>
          <Link to="/Peliculas" style={styles}>
            <h4>Peliculas</h4>
          </Link>
        </li>
        <li>
          <Link to="/Series" style={styles}>
            <h4>Series</h4>
          </Link>
        </li>
        <li>
          <Link to="/Formulario" style={styles}>
            <h4>Suscribirse</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
