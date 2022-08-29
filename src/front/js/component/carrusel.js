import React, { Component } from "react";
import psiqueImageUrl from "../../img/Psiento1.png";
import psiqueImageUrl1 from "../../img/psi2.png";
import psiqueImageUrl2 from "../../img/secondimg.jpg";
import psiqueImageUrl3 from "../../img/psi3.png";
import psiqueImageUrl4 from "../../img/psi5.png";

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default TextControlsExample;

export const Carrusel = () => (
  <div
    id="carouselExampleCaptions"
    className="carousel slide text-dark"
    data-bs-ride="false"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active p-0">
        <img
          src="https://pbs.twimg.com/media/FSfPoZRXsAAzLYK.jpg"
          className="ratio ratio 16x9"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div
          id="texto-carrusel-1"
          className="carousel-caption d-none d-md-block"
        >
          <h1>
            <strong>SALUD MENTAL</strong>
          </h1>
          <p>BIENESTAR EMOCIONAL, PSICOLOGICO Y SOCIAL</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://plus.telushealth.co/blogs/physician-pulse/wp-content/uploads/image-1200x500.jpg"
          className="ratio ratio 16x9"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>
            <strong>PSICOLOGÍA EN LÍNEA</strong>
          </h1>
          <p>FORO DE ATENCIÓN 24/7</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://neuronpsicologia.com/wp-content/uploads/15.jpeg"
          className="ratio ratio 16x9"
          alt="..."
          width={"auto"}
          height={"620px"}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1>
            <strong>AYÚDAME</strong>
          </h1>
          <p>APOYO EMOCIONAL</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
