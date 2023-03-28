import img_ActFis from "../assets/img/actiFisc.jfif";

function ActividaFis() {
  return (
    <div className="container is-full-fullhd">
      <div className="content card-content is-medium">
        <h1>Entrenar ¿Qué importancia importancia tiene?</h1>
        <p>
          La actividad física regular puede mejorar la fuerza muscular y
          aumentar la resistencia. El ejercicio suministra oxígeno y nutrientes
          a los tejidos y ayuda a que el sistema cardiovascular funcione de
          manera más eficiente. Y cuando tu salud cardíaca y pulmonar mejora,
          tienes más energía para hacer las tareas diarias.
        </p>
        <img src={img_ActFis} alt="Entrenar" />
        <h2>Ventajas del entrenamiento personal</h2>

        <ul>
          <li> Perder peso.</li>
          <li> Tonificar músculos.</li>
          <li> Ganar fuerza y resistencia.</li>
          <li> Aumentar la masa muscular, etc.</li>
        </ul>
        <div className="columns">
          <div className="column">
            <div className="card bg-card">
                <div className="card-content">

            <h1 className="">Clases</h1>
            8 deportes ideales para la salud física y mental
            <ol>
              <li>Atletismo</li>
              <li>Natación</li>
              <li>Tenis</li>
              <li>Flag fútbol</li>
              <li>Ciclismo</li>
              <li>Esquí</li>
              <li>Básquetbol</li>
              <li>Tae Kwon Do</li>
            </ol>
          </div>
                </div>
            </div>
          <div className="column">
            <div className="card bg-card">
                <div className="card-content">

            <h1>Equipamiento</h1>
            <p>Entre los materiales se pueden nombrar pelotas, cuerdas, colchonetas, palas, raquetas entre otros. Estos son materiales específicos y que por lo general son utilizados en las clases de educación física.</p>
          </div>
                </div>
            </div>
          <div className="column">
            <div className="card bg-card">
                <div className="card-content">

            <h1>Indumentaria</h1>
            <p>
            Es posible utilizar una combinación de ropa ajustada y suelta. Por ejemplo, puede utilizar una camiseta suelta transpirable o una camiseta sin mangas con pantalones cortos ajustados. Puede elegir lo que sea más cómodo para usted. Solo asegúrese de que el material que elija le ayude a alejar el sudor de su piel.
            </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActividaFis;
