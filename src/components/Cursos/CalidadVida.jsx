import img_Aliment from "../../assets/img/imgCursos/Alimentos.jpg";
import img_direccObj from "../../assets/img/imgCursos/direccObj.jpg";
import img_limMent from "../../assets/img/imgCursos/LimMent.jpg";

function CalidadVida() {
  return (
    <div className="contianer">
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={img_Aliment} alt="img_Alimentos" />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    Aprenda a elegir los alimentos{" "}
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  Los alimentos nos aportan los nutrientes que el cuerpo
                  necesita para llevar a cabo sus funciones adecuadamente. Según
                  la función que desempeñan, podemos clasificar los nutrientes
                  en: Nutrientes con función energética: hidratos de carbono y
                  grasas. Nutrientes con función estructural o plástica:
                  proteínas.
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 430</p>
                <button className="button is-danger"> Comprar </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src={img_limMent}
                      alt="límites 
                      mentales"
                    />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    Conociendo mis límites mentales
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  ¿Cuáles son los límites mentales? Dificultad en las funciones
                  mentales como las relacionadas con el trastorno de la
                  conciencia, retraso mental y las alteraciones de la conducta
                  del individuo con otras personas en su entorno social.
                  Instituto Nacional de Estadísticas y Geografía
                  <strong> INEGI.</strong>
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 300</p>
                <button className="button is-danger"> Comprar </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      src={img_direccObj}
                      alt="El esfuerzo en dirección al objetivo"
                    />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    El esfuerzo en dirección al objetivo
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  Para poder lograr nuestros objetivos y metas, en primer lugar,
                  debemos tener seguridad en nosotros mismos. La confianza es la
                  clave del progreso. Tú eres capaz de lograr todo aquello que
                  te propongas y estas capacitado para conseguirlo. No dejes que
                  nada te haga dudar de tus aptitudes, cree y confía en tus
                  habilidades.
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 240</p>
                <button className="button is-danger"> Comprar </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalidadVida;
