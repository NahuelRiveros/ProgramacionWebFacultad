import logo from "../assets/logo/logoNutri.png";
import img_Servicios from '../assets/img/contactanos.png';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav
      
        className="navbar bg_Nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item " to={"/"}>
            <img className="logoEmpresa" src={logo} alt='logo'/>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="desplegar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="desplegar" className="navbar-menu">
          <div className="navbar-start">
            <Link to={'/'} className="navbar-item selectBtn">
              Quienes somos
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link selectBtn"> Nuestros Productos </a>
              <div className="navbar-dropdown">
                <Link to={"/ProductosAlimentos"} className="navbar-item selectBtn">
                Alimentos
                </Link>
                <Link to={"/ActividadFisica"} className="navbar-item selectBtn">
                Actividad física
                </Link>
                <Link to={"/CuidMedAmbiente"} className="navbar-item selectBtn">
                cuidado del medioambiente
                </Link>
              </div>
            </div>
            <Link to={'/ClientOpinan'} className="navbar-item selectBtn">
              Nuestros Clientes Opinan
            </Link>
            <strong className="navbar-item textEmpresa">Nutrición-UP</strong>
            
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link selectBtn"> <img className="image imgtest" src={img_Servicios}/> Contactanos </a>
              <div className="navbar-dropdown">
                <Link to={'/Contactanos'} className="navbar-item selectBtn">
                  Email
                </Link>
                <Link to={'/Contactanos'} className="navbar-item selectBtn">
                  Instagram
                </Link>
                <Link to={'/Contactanos'} className="navbar-item selectBtn">
                  Telefono
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        
      </nav>
    </div>
  );
}

//Ejecucion para que funcione la hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  // obtener todas las clases "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // al evento del click cargar el forEach
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // obtener si el estado de si se apreto o no el botton de la hamburguesa desplegable
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // agregar atributo a la clase y cambiar a activo para que se mantenga desplegado
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
