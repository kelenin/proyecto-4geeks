import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const ModalNuevoPost = () => {
  const { store, actions } = useContext(Context);
  const [tituloPosts, setTituloPosts] = useState("");
  const [descripcionPost, setDescripcionPost] = useState("");
  const [topicos, setTopicos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(
    store.token && store.token != "" && store.token != undefined ? true:
       alert("Si deseas Registrar un Post debe ingresar a la opción Login e ingrese con su usuario y contraseña. Luego intente nuevamente registrar el post.")
    );

  //let navigate = useNavigate();

  const handleclick = () =>{
    const iduser=store.user && store.user.id

    actions.RegistroPost(tituloPosts,descripcionPost,iduser,topicos);
  }

  return (
    <>
      <div id="boton-post" className="container justify-content w-30 p-3">
        <Button variant="success" onClick={handleShow}>
        Registrar Post
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Agregar Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="selecttopicos">
              <Form.Label>Tópicos</Form.Label>
              <Form.Select defaultValue={topicos} aria-label="Default select example" onChange={(e) => setTopicos(e.target.value)}>
              <option value={""}>Seleccione</option>
              {
                store.topicos.map(elemento =>{
                  return <option key={elemento.id} value={elemento.id}>{elemento.nombre_tema}</option>
                })
              }           
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="titulopost">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="email"
                placeholder="titulo"
                autoFocus
                value={tituloPosts} 
                onChange={(e) => setTituloPosts(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="descripcionpost"
            >
              <Form.Label>Descripción</Form.Label>
              <Form.Control value={descripcionPost} onChange={(e) => setDescripcionPost(e.target.value)} as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclick}>
           Registrar Datos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  /*return (
    store.token && store.token != "" && store.token != undefined ?
      (
        <>
          <div id="boton-post" className="container-fluid justify-content w-30 p-3">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#nuevoPost"
            data-bs-whatever="@nuevoPost"
          >
            NUEVO POST
          </button>
          <div
            className="modal fade"
            id="nuevoPost"
            tabindex="-1"
            aria-labelledby="nuevoPostLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="nuevoPostLabel">
                    NUEVO POST
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="col-form-label">
                        TÓPICOS:
                      </label>
                      <select id="topico" defaultValue={topicos} onChange={(e) => setTopicos(e.target.value)}>
                        <option value={""}>Seleccione</option>
                        <option value={1}>ANSIEDAD</option>
                        <option value={2}>ESTRES</option>
                        <option value={3}>DEPRESION</option>
                        <option value={4}>AYUDAME</option>
                        <option value={5}>GENERAL</option>
                    </select>
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">
                        TÍTULO:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tituloPost"
                        value={tituloPosts} 
                        onChange={(e) => setTituloPosts(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="col-form-label">
                        MENSAJE:
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        value={descripcionPost} 
                        onChange={(e) => setDescripcionPost(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleclick}>
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      ) :   
      (
        <Alert variant="light">
          <p>Si deseas Registrar un Post debe ingresar al opción:{' '}
          <Alert.Link href="#">Login</Alert.Link> con su usuario y clave.</p>
        </Alert>)
  )*/
}