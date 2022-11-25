import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader,PopoverBody, UncontrolledPopover } from "reactstrap";
import { Context } from "../../context";
import { createOrUpdateValoration, createSuscriptionSvc } from "../../services/class";
import { FormSuscription } from "../form-suscription";

import "./styles.scss";

export const SuscriptionRow = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [modal, setModal] = useState(false);
  const [modalValoration, setModalValoration] = useState(false);

  const [popover, setPopover] = useState(false);
  const [showContent, setShowContent] = useState(null);
  const {state} = useLocation();
  const {classInformation, valoration = null} = state;
  const { user } = useContext(Context);
  const [subscribed, setSubscribed] = useState(false);
  const isTeacher = user?.role === 'teacher' && user?.id === classInformation?.teacher?._id;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCod, setPhoneCod] = useState('');
  const [timeToContact, setTimeToContact] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [errorValoration, setErrorValoration] = useState(false);
  const [valorationExist, setValoration] = useState(valoration);

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
  
  const toggleModalValoration = () => setModalValoration(!modalValoration);
  const toggle = () => setShowContent(null);

  const createSuscription = () => {
    if(!email || !phone || !phoneCod || !timeToContact || !description) {
      setError(true);
      return;
    }
    const data = {
      email,
      phone,
      phoneCod,
      timeToContact,
      description
    }
    createSuscriptionSvc(data, classInformation?._id)
      .then((resp) => {
        console.log('resp: ', resp);
        setShowContent(null);
        alert('Inscripción solicitada con éxito.');
        navigate('/');
      })
  }

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
          onClick={() => navigate('/class/inscriptions',  {state: {classInformation}})}
        >Inscripciones</Button>
        <Button
          className="suscription-button valorations"
          color="secondary"
          size="lg"
          onClick={() => navigate('/class/valorations')}
        >Gestionar reseñas</Button>
      </div>
    </div>
  );

  const handleValorationChange = () => {
    setErrorValoration(false);
    if(valorationExist < 1 || valorationExist > 5) {
      setErrorValoration(true);
      return;
    }
    createOrUpdateValoration(valorationExist, classInformation._id)
      .then(() => {
        alert('Calificación creada con éxito');
        navigate('/profile');
        window.location.reload();
      })
  }

  const forSuscribers = (
    <>
      <div className="suscription-row-section">
        <div className="container-sub-button-subs" id="SuscriptionRow">
          <Button
            className="suscription-button"
            color="secondary"
            size="lg"
            onClick={() => null}
          >Ver clases</Button>
          <Button
            className="suscription-button"
            color="success"
            size="lg"
            onClick={toggleModalValoration}
          >{valorationExist ? 'Editar calificación' : 'Calificar'}</Button>
        </div>
      </div>
      { modalValoration && <Modal isOpen={modalValoration} toggle={toggleModalValoration}>
      <ModalHeader toggle={toggleModalValoration}>Calificar clase</ModalHeader>
      <ModalBody>
        <Input type="number" placeholder="3.5" id="valoration" name="valoration" value={valorationExist} onChange={(e) => setValoration(e.target.value)}/>
        {errorValoration && <span className="color-error">El valor debe ser entre 1 y 5</span>}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleValorationChange}>
          Guardar
        </Button>
        <Button color="danger" onClick={() => toggleModalValoration()}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>}
    </>
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
        <Modal isOpen={showContent === 'modal'} toggle={toggle}>
          <ModalHeader toggle={toggle}>Rellene el formulario para contactar al profesor</ModalHeader>
          <ModalBody>
            <FormSuscription
              setDescription={setDescription}
              setEmail={setEmail}
              setPhone={setPhone}
              setPhoneCod={setPhoneCod}
              setTimeToContact={setTimeToContact} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={createSuscription}>
              Enviar
            </Button>{' '}
            <Button color="secondary" onClick={() => toggle()}>
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