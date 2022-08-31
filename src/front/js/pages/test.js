import React from "react";

const Test = () => {
  return (
    <div id="test-div" className="container-fluid pb-5">
      <h1 className="row justify-content-center m-0 pt-3 mb-3">
        <strong className="col-auto">Test de Ansiedad Psiento</strong>
      </h1>
      <div className="rounded bg-white container shadow">
        <form
          id="fs-frm"
          name="survey-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/xnqrnydn"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <div className="container mt-3">
              <label for="timely">
                1. ¿TIENES PREOCUPACIONES CONSTANTES, ANGUSTIA AL PENSAR,
                IMAGINAR DETERMINADAS COSAS O ANTICIPAR LO PEOR EN DISTINTAS
                CIRCUNSTANCIAS?
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
                2. ¿SIENTES TEMBLORES, GANAS DE LLORAR O SENSACIÓN DE ALARMA?
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
                3. ¿SIENTES MIEDO SI ESTAS SOLO, A LA OSCURIDAD, O A QUE PASE
                ALGO IMPREVISTO?
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
                4. ¿SUFRES DE INSOMNIO O SIENTES INCAPACIDAD PARA PODER
                DESCANSAR?
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
                5. ¿TIENES DIFICULTAD PARA DECIDIR, CONCENTRARTE, REFLEXIONAR O
                SUFRES DE FALLOS DE MEMORIA?
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
                6. ¿TIENES DESÁNIMO, TE LEVANTAS CON NEGATIVIDAD Y TIENES LA
                SENSACIÓN DE QUE VA A SER UN MAL DÍA?
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
                POR FAVOR AQUÍ PUEDES EXPRESAR CUALQUIER DETALLE ADICIONAL DE
                ¿CÓMO TE SIENTES AL MOMENTO DE RESPONDER ESTE TEST?
              </label>
            </div>
            <textarea
              cols="120"
              rows="4"
              name="message"
              id="message"
              placeholder="¡Inserta cualquier información extra que consideres importante!"
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
