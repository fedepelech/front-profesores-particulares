import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,PopoverBody, UncontrolledPopover } from "reactstrap";
import { Context } from "../../context";
import { FormSuscription } from "../form-suscription";

import "./styles.scss";

export const SuscriptionRow = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [modal, setModal] = useState(false);
  const [popover, setPopover] = useState(false);
  const [showContent, setShowContent] = useState(null);
  const {state} = useLocation();
  const {classInformation} = state;
  const { user } = useContext(Context);
  const [subscribed, setSubscribed] = useState(false);
  const isTeacher = user?.role === 'teacher' && user?.id === classInformation?.teacher?._id;

  useEffect(() => {
    if(!isTeacher && classInformation?._id && user?.id) {
      const sub = user.subscribedClasses?.find((id) => id === classInformation._id);
      if(sub) {
        setSubscribed(sub);
      }
    }
  }, [user])

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

  const forTeacher = (
    <div className="suscription-row-section teacher">
      <div className="container-sub-button" id="SuscriptionRow">
        <Button
          className="suscription-button"
          color="secondary"
          size="lg"
          onClick={() => navigate('/class/edit', {state: {classInformation}})}
        >Editar</Button>
        <Button
          className="suscription-button valorations"
          color="secondary"
          size="lg"
          onClick={() => navigate('/class/valorations')}
        >Gestionar reseñas</Button>
      </div>
    </div>
  );

  const forSuscribers = (
    <div className="suscription-row-section">
      <div className="container-sub-button" id="SuscriptionRow">
        <Button
          className="suscription-button"
          color="secondary"
          size="lg"
          onClick={() => null}
        >Ver clases</Button>
      </div>
    </div>
  )

  const forAll = (
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

  return (
    <>
      { isTeacher ? forTeacher : 
        <>
          {subscribed ? forSuscribers : forAll}
        </>
      }
    </>
  );
};