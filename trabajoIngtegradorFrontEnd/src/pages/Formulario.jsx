import "../styles/form-styles.css";
import Header from "../components/Header";

function Formulario() {
  return (
    <>
      <Header />

      <form action="">
        <h1>Suscribirse</h1>
        <input type="text" name="nombre" placeholder="Nombre" id="nombre" />
        <input
          type="text"
          name="correo"
          placeholder="nombre@nombre.com"
          id="correo"
        />
        <input type="button" value="ENVIAR" id="boton" />
      </form>
    </>
  );
}

export default Formulario;
