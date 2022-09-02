import React from "react";

const Test = () => {
  return (
    <div id="test-div" className="container-fluid pb-5 ">
      <div className="row justify-content-center">
        <h1 className="row justify-content-center m-0 pt-3 pb-1 mb-0 ">
          <strong className="col-auto">TEST DE ANSIEDAD PSIENTO</strong>
        </h1>
        <h5 className="row text-justify w-75 py-3">
          El bienestar mental es la habilidad de manejar la vida y sus múltiples
          tensiones y desafíos. El TEST DE ANSIEDAD por lo tanto, es una
          fotografía de su auto-percepción junto a varias dimensiones de la
          función mental que determinan su bienestar mental. No es una medida de
          felicidad o satisfacción con la vida. Por ejemplo, usted puede estar
          viviendo circunstancias muy difíciles o tristes y aún así contar con
          todos los mecanismos para enfrentarlas lo mejor posible, y por lo
          tanto tener un alto nivel de bienestar mental.
        </h5>
      </div>
      <div className="rounded bg-white container shadow-lg">
        <form
          id="fs-frm"
          name="survey-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/xnqrnydn"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <div className="container mt-3">
              <label className="m-0 pt-3 mb-3 " for="email-address">
                Direccion Email: 
              </label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="email@domain.tld"
                required=""
              />
              <label for="timely">
                <strong>
                  1. ¿TIENES PREOCUPACIONES CONSTANTES, ANGUSTIA AL PENSAR,
                  IMAGINAR DETERMINADAS COSAS O ANTICIPAR LO PEOR EN DISTINTAS
                  CIRCUNSTANCIAS?
                </strong>
              </label>
              <div>
                <select
                  className="select"
                  placeholder="Example placeholder"
                  name="timely"
                  id="timely"
                  required=""
                >
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                <strong>
                  2. ¿SIENTES TEMBLORES, GANAS DE LLORAR O SENSACIÓN DE ALARMA?
                </strong>
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                <strong>
                  3. ¿SIENTES MIEDO SI ESTAS SOLO, A LA OSCURIDAD, O A QUE PASE
                  ALGO IMPREVISTO?
                </strong>
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                <strong>
                  4. ¿SUFRES DE INSOMNIO O SIENTES INCAPACIDAD PARA PODER
                  DESCANSAR?
                </strong>
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                <strong>
                  5. ¿TIENES DIFICULTAD PARA DECIDIR, CONCENTRARTE, REFLEXIONAR
                  O SUFRES DE FALLOS DE MEMORIA?
                </strong>
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
            <div className="container mt-3">
              <label for="timely">
                <strong>
                  6. ¿TIENES DESÁNIMO, TE LEVANTAS CON NEGATIVIDAD Y TIENES LA
                  SENSACIÓN DE QUE VA A SER UN MAL DÍA?
                </strong>
              </label>
              <div>
                <select name="quality" id="quality" required="">
                  <option value="" selected="" disabled="">
                    Responde
                  </option>
                  <option value="1">Si</option>
                  <option value="3">No</option>
                </select>
              </div>
            </div>
          </fieldset>
          <div className="container mt-3">
            <div>
              <label for="message">
                <strong>
                  POR FAVOR AQUÍ PUEDES EXPRESAR CUALQUIER DETALLE ADICIONAL DE
                  ¿CÓMO TE SIENTES AL MOMENTO DE RESPONDER ESTE TEST?
                </strong>
              </label>
            </div>
            <textarea
              cols="120"
              rows="4"
              name="message"
              id="message"
              placeholder="¡Inserta cualquier información extra que consideres importante, te enviaremos los resultados de tu Test en forma privada a tu email!"
              required=""
              className="w-100"
            ></textarea>
          </div>
          <div className="container mt-3 pb-5">
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Survey Responses"
            />
            <input
              type="submit"
              value="Enviar Respuestas"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Test;
