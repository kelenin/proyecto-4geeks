import React, { useContext } from "react";
import { Container, Nav, Navbar, Button  } from "react-bootstrap";
import { Context } from "../store/appContext";
import psiqueImageUrl from "../../img/Psiento1.png";
import { FaUser } from "react-icons/fa";

export const Navigationabar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar id="navbar" className="navbar navbar-expand-lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={psiqueImageUrl} alt="" width="140" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" to="/">Home</Nav.Link>
            <Nav.Link href="/blog" to="/blog">Blog</Nav.Link>
            <Nav.Link href="/videos" to="/videos">Videos</Nav.Link>
            <Nav.Link href="/foro" to="/blog">Foro</Nav.Link>
            <Nav.Link href="/test" to="/blog">Test</Nav.Link>
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/login" className="text-success"><Button variant="outline-success"><FaUser /> Login</Button></Nav.Link>

            ) : (
              <Nav.Link href="/login"><Button onClick={() => actions.logout()} variant="outline-success"> Cerrar Sesión</Button></Nav.Link>
            )}
          </Nav>
          <Nav>
            {!store.token ? (
              <Nav.Link href="/registro">
                <Button variant="outline-success"><FaUser /> registrarse</Button>
              </Nav.Link>
              ) : null
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
