// import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="has-text-centered pt-5">
        <p>
          <strong> Cursos disponibles </strong>
        </p>
      </div>
      <div className="tabs is-centered">
        <ul>
          <li>
            <Link to={"/CalidadVida"}>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Calidad de vida</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span className="icon is-small">
                <i className="fas fa-music" aria-hidden="true"></i>
              </span>
              <span>Plan de actividad física</span>
            </Link>
          </li>
          <li>
            <Link to={"/PequeAcciones"}>
              <span className="icon is-small">
                <i className="fas fa-film" aria-hidden="true"></i>
              </span>
              <span>Pequeñas acciones</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* footerS */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Edgardo Nahuel Riveros</strong> by
            <Link href=""> Servicio Host </Link>. © Copyright.
          </p>
          <p>Contacto</p>
          <footer className="card-footer">
            <a className="card-footer-item">
              Nahuel42425@gmail.com
            </a>
            <a  className="card-footer-item">
              3704-081082
            </a>
            <a href="https://www.instagram.com/riveros.nahuel/" className="card-footer-item">
           Instagram
            </a>
          </footer>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
