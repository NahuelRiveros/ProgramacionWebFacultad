import vis_Mis from "../assets/ico/VisionMision.png"
function QuienesSomos() {
  return (
    <div className="contianer">
        <div className="card-footer">
        <div className="card-footer-item">
          <img src={vis_Mis} alt="" />
        </div>
        
        
      </div>
      <div className="columns">
        {/* Mision de la empresa */}
        <div className=" column bd-notification is-info">
          <div className="card">
            <div className="card-content">
              <p className="title">
                Misión: La formación de personas en las pácticas de una vida
                saludable constituye nuestra misión, tratando de llegar a la
                mayor cantidad de personas conformando grupos de divulgación de
                las actividades favorables a todo ser humano
              </p>
              <p className="subtitle">
                Nutrición-UP una empresa de más de 20 años, dedicada a promover
                y difundir la buena alimentación y la vida saludable
              </p>
            </div>
          </div>
        </div>
        {/* Vision de la empresa */}
        <div className="column">
          <div className="card ">
            <div className="card-content">
              <p className="title">
                Visión: Tranformarnos en gestores del cambio, en motivadores
                hacia una sociedad respetuosa del medioambiente y de la salud
                actual y de futuras generaciones
              </p>
              <p className="subtitle">
                Nutrición-UP una empresa de más de 20 años, dedicada a promover
                y difundir la buena alimentación y la vida saludable
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default QuienesSomos;
