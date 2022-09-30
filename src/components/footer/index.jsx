import React from "react";
import { CardFooter } from "reactstrap";

import './styles.scss';

export const Footer = () => {
  return (
      <footer
        className="text-center text-lg-start text-white footer-container"
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  derepaso
                </h6>
                <p>
                  Nuestro objetivo es brindar un soporte a aquellas personas
                  que necesiten refrescar o adquirir conocimientos
                  sobre educación escolar, de finanzas, en nuevos idiomas, etc.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-1 col-lg-2 col-xl-2 mx-auto mt-3">
                
              </div>

              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Links útiles
                </h6>
                <p>
                  <a className="text-white" href="/">Términos y Condiciones</a>
                </p>
                <p>
                  <a className="text-white" href="/">¿Querés dar clases?</a>
                </p>
                <p>
                  <a className="text-white font-weight-bold" href="/">Sumate a derepaso</a>
                </p>
                <p>
                  <a className="text-white" href="/">Ayuda</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contacto
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Íbera 2411 (CP 1429)
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> soporte@derepaso.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> 54 11-3333-3333
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> 0800-111-2222
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  <span className="mr-5">© 2022 Copyright: </span>
                  <a className="text-white" href="/">
                    derepaso
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
  );
};
