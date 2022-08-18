import React, { Component } from "react";
import psiqueImageUrl from "../../img/Psiento1.png";

export const Footer = () => (
  <div className="container-fluid">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img className="bi" src={psiqueImageUrl} width="110" height="30" />
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2022 @PsientoWell</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-muted" href="#">
            <img className="bi" width="24" height="24" />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <img className="bi" width="24" height="24" />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="#">
            <img className="bi" width="24" height="24" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
