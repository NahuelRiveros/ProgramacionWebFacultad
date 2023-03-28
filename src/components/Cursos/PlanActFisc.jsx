import img_Abailar from "../../assets/img/imgCursos/Abailar.jpg";
import img_Fuerza from "../../assets/img/imgCursos/Fuerza.jpg";
import img_OrgAct from "../../assets/img/imgCursos/orgAct.jpg";

function PlanActFisc() {
  return (
    <div className="contianer">
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={img_Abailar} alt="img_A bailar" />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">A bailar</p>
                </div>
              </div>

              <div className="content">
                <p>
                  El baile es una manera emocionante y social de ejercitar su
                  cuerpo. Desde el baile de salón hasta la salsa, bailar
                  ejercita su corazón, ayuda a fortalecer huesos y músculos, y
                  puede mejorar su equilibrio. Y dado que bailar es tan
                  divertido, puede incluso olvidar que está haciendo ejercicio.
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 230</p>
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
                    <img src={img_Fuerza} alt="img_Fuerza" />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    La fuerza también ayuda
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  Al mantener unos músculos fuertes conseguimos una mejor
                  ejecución de movimiento debido a una buena postura. Los
                  ejercicios de fuerza mejoran la densidad ósea, disminuyendo
                  así el posible riesgo de osteoporosis o fracturas y
                  protegiendo a la vez nuestras articulaciones.
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
                      src={img_OrgAct}
                      alt="El esfuerzo en dirección al objetivo"
                    />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    Organizando mis actividades
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  6 consejos sobre gestión del tiempo para lograr más resultados
                  <br />
                  Conecta el trabajo diario con los objetivos. ...
                  <br />
                  Establece prioridades y organiza tu trabajo. ...
                  <br />
                  Planifica con anticipación al final de cada día. ...
                  <br />
                  Di que no o delega. ...
                  <br />
                  Audita tus tareas. ...
                  <br />
                  Olvídate de escribir las tareas pendientes a mano: utiliza una
                  herramienta.
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 280</p>
                <button className="button is-danger"> Comprar </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlanActFisc;
