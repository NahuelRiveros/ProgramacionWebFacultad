
import img_NuestroHijos from "../../assets/img/imgCursos/NuestrosHijos.jpg";


function PequeAcciones() {
  return (
    <div className="contianer">
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={""} alt="img_Pequeñas acciones" />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">Pequeñas acciones</p>
                </div>
              </div>

              <div className="content">
                <p>La accion mas pequeña vale mas que la intecion mas grande</p>
                <br />
                <p className="subtitle is-6 textCursos">$0</p>
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
                    <img src={''} alt="img_CuidNaturaleza" />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                    Divulgando el cuidado de la naturaleza
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                  La importancia del cuidado del medio ambiente es un debate que
                  trata de erradicar la contaminación ambiental, de tal manera
                  que la conservación de la naturaleza es parte activa de las
                  primeras experiencias de los infantes, ya que el medio
                  ambiente es el lugar del hábitat y desarrollo integral de los
                  mismos.
                </p>
                <br />
                <p className="subtitle is-6 textCursos">$ 310</p>
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
                      src={img_NuestroHijos}
                      alt="El esfuerzo en dirección al objetivo"
                    />
                  </figure>
                </div>
                <div>
                  <p className="title is-4 textCursos">
                  Que les dejamos a nuestros hijos
                  </p>
                </div>
              </div>

              <div className="content">
                <p>
                Me parece clave el aspecto de la responsabilidad máxima de los padres para educar a sus hijos. De ellos, nosotros, depende la solidez de los cimientos éticos, morales, culturales, de relación con sus congéneres, con la naturaleza, etc.
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
export default PequeAcciones;
