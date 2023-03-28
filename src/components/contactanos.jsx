import { Formik, Form, Field } from "formik";
import img_Contact from "../assets/img/contactanos.png";
function Contactanos() {
  const eventListener = (e) => {
    console.log(e);
  };
  return (
    <div className="container is is-full-fullhd">
      <img className="image p-2" src={img_Contact} alt="" />
      <div className="columns">
        <div className="column is-half is-offset-3">
          <div className="card-content">
            <h2 className="title has-text-centered">Ingrese sus datos</h2>
            <Formik
              className="box"
              initialValues={{
                apellido: "",
                nombre: "",
                correo: "",
                horario: "",
                telefono: "",
                textArea: "",
              }}
              onSubmit={eventListener}
            >
              {/* formulario */}
              <Form className="card-content">
                {/* inpurt 1 */}
                <div className="field">
                  <div className="control">
                    <p className="label"> Ingresar Apellido</p>
                    <Field className="input" name="apellido" type="text" />
                  </div>
                </div>
                {/* inpurt 2 */}
                <div className="field">
                  <div className="control">
                    <p className="label"> Ingresar Nombre</p>
                    <Field className="input" name="nombre" type="text" />
                  </div>
                </div>
                {/* inpurt 3 */}
                <div className="field">
                  <div className="control">
                    <p className="label"> Ingresar@Correo</p>
                    <Field className="input" name="correo" type="email" />
                  </div>
                </div>
                {/* inpurt 4 */}
                <div className="field">
                  <p className="label"> Escribir Horario</p>
                  <Field
                    name="horario"
                    type="time"
                    min="14:00"
                    max="18:00"
                    required
                  />
                  <p className="help"> Horario de atencion 14:00 a 18:00</p>
                  <div>
                    <datalist id="horario">
                      <option value="14:00" />
                      <option value="18:00" />
                    </datalist>
                  </div>
                </div>
                {/* inpurt 5 */}
                <p className="label"> Ingrese un número de telefono</p>
                <div className="field">
                  <div className="control">
                    <Field className="input" type="number" name="telefono" />
                  </div>
                </div>
                {/* inpurt 6 */}
                <div className="field">
                  <div className="control">
                    <p className="label"> Mensaje</p>
                    <textarea
                      className="textarea"
                      type="textarea"
                      name="textArea"
                    />
                  </div>
                </div>
                <div className="control">
                  <button type="submit" className="button is-info">
                    Enviar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
