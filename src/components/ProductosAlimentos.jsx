import img_frutSeco from "../assets/img/frutosSecos.jpg";
import img_microOnd from "../assets/img/Microond.jpg";
import img_frescos from '../assets/img/fescos.jpg';
import img_bajoSodio from '../assets/img/bajoSodio.png';
import img_sinGluten from '../assets/img/sinGluten.jpg';

function ProductosAlimentos() {
  return (
    <div className="container is-full-fullhd">
      <div className="columns">
        {/* primer tabla */}
        <div className="column">
          <div className="card-content">
            <article className="message is-success">
              <div className="message-header">
                <p>Frutos secos</p>
              </div>
              <div className="message-body">
                Los frutos secos son alimentos de origen vegetal en los que la
                parte comestible es la semilla de la planta. Son productos de
                cáscara dura y con un porcentaje de agua inferior al 50%.
              </div>
              <div className="card-content card-image">
                <figure className="image is-square">
                  <img className="imgtest" src={img_frutSeco} alt="Placeholder image" />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* segunda tabla */}
        <div className="column">
          <div className="card-content">
            <article className="message is-warning">
              <div className="message-header">
                <p>¿Qué comida se puede meter al microondas?</p>
              </div>
              <div className="message-body">
                <ol>
                  <li>Alcachofas cocidas.</li>
                  <li>Pastel de calabacín.</li>
                  <li>Boniatos asados.</li>
                  <li>Patatas cocidas.</li>
                  <li>Arroz blanco.</li>
                  <li>Tarta de manzana.</li>
                  <li className="listText">Entre Otras...</li>
                </ol>
              </div>
              <div className="card-content card-image">
                <figure className="image is-square">
                  <img className="imgtest" src={img_microOnd} alt="Placeholder image" />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* tercer tabla */}
        <div className="column">
          <div className="card-content">
            <article className="message is-info">
              <div className="message-header">
                <p>Frescos</p>
              </div>
              <div className="message-body">
              La fruta, en términos gastronómicos, es el producto alimenticio comestible que se obtiene de plantas o árboles y que se caracteriza por ser generalmente de sabor dulce.
              </div>
              <div className="card-content card-image">
                <figure className="image is-square">
                  <img className="imgtest" src={img_frescos} alt="Placeholder image" />
                </figure>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="columns">
         {/* cuarta tabla */}
         <div className="column">
          <div className="card-content">
            <article className="message is-black">
              <div className="message-header">
                <p>¿Cómo hacer una dieta baja en sodio?</p>
              </div>
              <div className="message-body">
              <strong> Por ejemplo:</strong>  caldos, sopas y vegetales enlatados sin sal o bajos en sodio. Elija verduras frescas o congeladas en su lugar. Elija nueces o semillas sin sal o frutas o verduras frescas como bocadillos. Lea las etiquetas de los alimentos y elija los alimentos sin sal o con bajo o muy bajo contenido de sodio.
              </div>
              <div className="card-content card-image">
                <figure className="image is-square">
                  <img className="imgtest" src={img_bajoSodio} alt="Placeholder image" />
                </figure>
              </div>
            </article>
          </div>
        </div>
        {/* quinta tabla */}
        <div className="column">
          <div className="card-content">
            <article className="message is-danger">
              <div className="message-header">
                <p>¿Qué comidas se pueden comer sin gluten?</p>
              </div>
              <div className="message-body">
              <strong> Ejemplo:</strong> La harina hecha con alimentos sin gluten, como papa, arroz, maíz, soya, nueces, mandioca, amaranto, quinua, trigo sarraceno o frijol, es segura para comer.
              </div>
              <div className="card-content card-image">
                <figure className="image is-square">
                  <img className="imgtest" src={img_sinGluten} alt="Placeholder image" />
                </figure>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductosAlimentos;
