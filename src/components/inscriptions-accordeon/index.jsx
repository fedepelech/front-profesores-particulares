import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Col,
  Row,
  Table,
} from "reactstrap";
import { acceptSuscriptionClass, cancelSuscriptionClass, getSuscriptions } from "../../services/class";

import "./styles.scss";

export const InscriptionsAccordeon = ({ classInformation = null }) => {
  const [open, setOpen] = useState("");
  const [openAccept, setOpenAccept] = useState("");
  const [openCancel, setOpenCancel] = useState("");
  const [pendings, setPendings] = useState([]);
  const [accepts, setAccepts] = useState([]);
  const [canceled, setCanceled] = useState([]);
  const [finished, setFinished] = useState([]);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const toggleAccept = (id) => {
    if (openAccept === id) {
      setOpenAccept();
    } else {
      setOpenAccept(id);
    }
  };

  const toggleCancel = (id) => {
    if (openCancel === id) {
      setOpenCancel();
    } else {
      setOpenCancel(id);
    }
  };

  useEffect(() => {
    getSuscriptions(classInformation?._id).then((suscriptions) => {
      setPendings(suscriptions.pending);
      setAccepts(suscriptions.accepted);
      setFinished(suscriptions.finished);
      setCanceled(suscriptions.canceled);
    });
  }, []);

  const PendingAccordeon = ({
    id,
    firstName,
    surName,
    email,
    phoneCod,
    phone,
    timeToContact,
    message,
    subId
  }) => {
    return (
      <AccordionItem>
        <AccordionHeader targetId={id}>{`${firstName} ${surName}`}</AccordionHeader>
        <AccordionBody accordionId={id}>
          <Row>
            <Col md={5}>
              <h6>Información para contactarlo</h6>
              <p>Email: {email}</p>
              <p>{`Teléfono: (${phoneCod}) ${phone}`}</p>
              <p>Horario contacto: {timeToContact}</p>
            </Col>
            <Col md={7}>
              <h6>Mensaje</h6>
              <p className="message">{message}</p>
              <div className="suscriptions-buttons">
                <Button color="danger" onClick={() => cancelSuscription(subId)}>Cancelar</Button>
                <Button color="success" className="mx-4" onClick={() => acceptSuscription(subId)}>
                  Aceptar
                </Button>
              </div>
            </Col>
          </Row>
        </AccordionBody>
      </AccordionItem>
    );
  };
  
  const acceptSuscription = (id) => {
    acceptSuscriptionClass(id)
      .then(() => {
        alert('Suscripción aceptada!')
        window.location.reload();
      })
  }

  const cancelSuscription = (id) => {
    cancelSuscriptionClass(id, 'Cancelada')
      .then(() => {
        alert('Suscripción cancelada!')
        window.location.reload();
      })
  }

  const AcceptedOrCanceledAccordeon = ({
    id,
    firstName,
    surName,
    email,
    phoneCod,
    phone,
    timeToContact,
    message
  }) => {
    return (
      <AccordionItem>
        <AccordionHeader targetId={id}>{`${firstName} ${surName}`}</AccordionHeader>
        <AccordionBody accordionId={id}>
          <Row>
            <Col md={5}>
              <h5>Información para contactarlo</h5>
              <p>Email: {email}</p>
              <p>{`Teléfono: (${phoneCod}) ${phone}`}</p>
              <p>Horario contacto: {timeToContact}</p>
            </Col>
            <Col md={7}>
              <h5>Mensaje</h5>
              <p className="message">{message}</p>
            </Col>
          </Row>
        </AccordionBody>
      </AccordionItem>
    );
  };


  return (
    <div>
        <h3 className="my-5">Inscripciones</h3>
        <Row>
          <Col md={8}>
            <div className="container-accordeon">
              <h5>Pendientes</h5>
              {pendings.length > 0 ? (
                <Accordion flush open={open} toggle={toggle}>
                  {pendings.map((sub) => (
                    <PendingAccordeon
                      id={sub._id}
                      email={sub.student.email}
                      firstName={sub.student.firstName}
                      surName={sub.student.surName}
                      phone={sub.phone}
                      phoneCod={sub.phoneCod}
                      message={sub.message}
                      timeToContact={sub.timeToContact}
                      subId={sub._id}
                    />
                  ))}
                </Accordion>
              ) : (
                <p>No se encontraron inscripciones pendientes</p>
              )}
              <h5 className="mt-5">Aceptadas</h5>
              {accepts.length > 0 ? (
                <Accordion flush open={openAccept} toggle={toggleAccept}>
                  {accepts.map((sub) => (
                    <AcceptedOrCanceledAccordeon
                      id={sub._id}
                      email={sub.student.email}
                      firstName={sub.student.firstName}
                      surName={sub.student.surName}
                      phone={sub.phone}
                      phoneCod={sub.phoneCod}
                      message={sub.message}
                      timeToContact={sub.timeToContact}
                    />
                  ))}
                </Accordion>
              ) : (
                <p>No se encontraron inscripciones aceptadas</p>
              )}
              <br />
              <h5 className="mt-5">Canceladas</h5>
              {canceled.length > 0 ? (
                <Accordion flush open={openCancel} toggle={toggleCancel}>
                  {canceled.map((sub) => (
                    <AcceptedOrCanceledAccordeon
                      id={sub._id}
                      email={sub.email}
                      firstName={sub.student.firstName}
                      surName={sub.student.surName}
                      phone={sub.phone}
                      phoneCod={sub.phoneCod}
                      message={sub.message}
                      timeToContact={sub.timeToContact}
                    />
                  ))}
                </Accordion>
              ) : (
                <p>No se encontraron inscripciones canceladas</p>
              )}
            </div>
          </Col>
          <Col md={4}>
            <h5 className="mt-5">Finalizadas</h5>
            { finished.length > 0 ? 
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {finished.map((sub, idx) => (
                  <tr>
                    <th scope="row">{idx}</th>
                    <td>{sub.student.firstName}</td>
                    <td>{sub.student.surName}</td>
                    <td>{sub.email}</td>
                    <td>{`(${sub.phoneCod}) ${sub.phone}`}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            : <p>No se encontraron inscripciones finalizadas</p>}
          </Col>
        </Row>
      </div>
  );
};
