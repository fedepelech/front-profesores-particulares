import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import './styles.scss';

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { loginService, restorePassword } from "../../services/auth";

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [modal, setModal] = useState(false);
  const [emailRestore, setEmailRestore] = useState('');
  const [errorRestore, setRestoreError] = useState(false);
  const toggle = () => setModal(!modal);

  const login = () => {
    setUserError(false);
    if(!emailUser || !password) {
      setUserError(true);
      return;
    }
    loginService(emailUser, password)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setUser({
          id: data.user._id,
          firstName: data.user.firstName,
          surName: data.user.surName, 
          email: data.user.email,
          role: data.user.role,
          subscribedClasses: data.user.classes
        });
        navigate('/profile');
      })
      .catch((err) => {
        setDataError(true);
      })
  }

  const restore = () => {
    if(!emailRestore) {
      setRestoreError(true);
      return;
    }
    restorePassword(emailRestore)
      .then(() => {
        alert('Le llegara un email en los próximos minutos')
        window.location.reload();
      })
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            onChange={(e) => setEmailUser(e.target.value)}
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Contraseña
          </Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="examplePassword"
            name="password"
            placeholder="Contraseña"
            type="password"
          />
        </FormGroup>{" "}
        <Button block={true} className="mb-2" onClick={login}>ingresar</Button>
        <span
          className="reset-password-text"
          onClick={() => setModal(true)}
        >
          Reestablecer contraseña
        </span>
        {userError && <span className="reset-password-text error-text">Datos incompletos</span>}
        {dataError && <span className="reset-password-text error-text">Datos inválidos</span>}
      </Form>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Recuperación de contraseña</ModalHeader>
        <ModalBody>
          <p>Recibirá un correo electrónico para recuperar su clave.</p>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Introduzca su email"
            onChange={(e) => setEmailRestore(e.target.value)}
          />
          {errorRestore && <p>Introduzca un mail válido</p>}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={restore}>
            Solicitar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
