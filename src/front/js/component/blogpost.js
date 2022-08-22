import React from "react";
import PropTypes from "prop-types";

export const BlogPost = (props) => {
  return (
    <div className="row wrap container-fluid p-0 m-0">
      <div className="card mb-3 p-0">
        <div className="title card-title rounded-top mb-0">
          <h5 className="card-title px-2 pt-1">{props.title}</h5>
        </div>
        <img src={props.imageSource} className="img-fluid" alt="..." />
        <div className="card-body rounded-bottom">
          <p className="card-text postText crop-text-2">{props.text}</p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={props.modalTargeter}
          >
            Leer más.
          </button>
          <div
            className="modal fade bd-example-modal-lg"
            id={props.modalId}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header">
                  <p className="h1 text-center">{props.title}</p>
                </div>

                <div className="modal-body">
                  <p>{props.text}</p>
                </div>

                <div className="row pe-3 mb-2 justify-content-end modal-footer">
                  <button className="btn btn-primary w-auto col-4 mx-1" data-bs-dismiss="modal">
                    Cerrar
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
