import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,PopoverBody, UncontrolledPopover } from "reactstrap";
import { FormSuscription } from "../form-suscription";

import "./styles.scss";

export const SuscriptionRow = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [modal, setModal] = useState(false);
  const [popover, setPopover] = useState(false);
  const [showContent, setShowContent] = useState(null);

  const renderContent = () => {
    const token = localStorage.getItem('token');
    if(!token) {
      setShowContent('popover');
      return;
    }
    setShowContent('modal');
  }

  const toggle = () => setShowContent(null);

  const toggleModal = () => setShowContent(null);

  return (
    <>
      <div className="suscription-row-section">
        <div className="container-sub-button" id="SuscriptionRow">
          <Button
            className="suscription-button"
            color="secondary"
            size="lg"
            onClick={renderContent}
          >Contratar</Button>
          { showContent === 'popover' && 
            <UncontrolledPopover
              trigger="focus"
              placement="bottom"
              isOpen={showContent === 'popover'}
              target="SuscriptionRow"
              toggle={toggle}
            >
              <PopoverBody>
                Debés estár logeado para poder contratar una clase.
              </PopoverBody>
            </UncontrolledPopover>
          }
        </div>
      </div>
      { showContent === 'modal' &&
        <Modal isOpen={showContent === 'modal'} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Rellene el formulario para contactar al profesor</ModalHeader>
          <ModalBody>
            <FormSuscription />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal}>
              Enviar
            </Button>{' '}
            <Button color="secondary" onClick={toggleModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      }
    </>
  );
};