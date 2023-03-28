import ReactPlayer from "react-player";
import vid_Cuidado from "../assets/video/cuidado sustentable.mp4";

function CuidMedAmbiente() {
  return (
    <div className="container is-full-fullhd">
      <div className="colmns">
        <div className="column">
          <article className="message is-warning">
            <div className="message-body">
              Pero, <strong> ¿qué es la conciencia ambiental? </strong> Algunos
              la definen como la convicción de una persona, organización, grupo
              o una sociedad entera, de que los recursos naturales deben
              protegerse y usarse racionalmente en beneficio del presente y el
              futuro de la humanidad.
            </div>
          </article>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Conciencia Por el Medio Ambiente
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="columns">
              <div className="column">
                <div className="card-content">
                  <div className="content">
                    Libro Publicado por Nahuel Riveros <br />
                    <a href="https://bulma.io"> @bulmaio</a>.
                    <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                      #css
                    </a>
                    <a href="https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design">
                      #responsive
                    </a>
                    <br />
                    <p>3:56 PM - 28 Mar 2023</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card-content">
                  <div className="content">
                    Libro Publicado por Nahuel Riveros <br />
                    <a href="https://www.educaciontrespuntocero.com/familias/ted-sobre-medioambiente/"> #Educacion Ambiental </a>.
                    <a href="https://www.consumer.es/medio-ambiente/las-10-mejores-charlas-ted-sobre-medio-ambiente-que-te-haran-pensar.html">
                      #Charlas
                    </a>
                    <br />
                    <p>3:56 PM - 28 Mar 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <footer className="card-footer image vid_Cuidado">
              <ReactPlayer url={vid_Cuidado} controls />
            </footer>
            <div className="card-content">
              <p className="title">
                “Actualmente, la contaminación ambiental es uno de los principales problemas para el medio ambiente en nuestro planeta y aumenta cada día con el mayor desarrollo social.”
              </p>
              <p className="subtitle">Jeff Atwood</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
}
export default CuidMedAmbiente;
