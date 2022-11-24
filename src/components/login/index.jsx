import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import './styles.scss';

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { loginService } from "../../services/auth";

export const Login = () => {
  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [dataError, setDataError] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(Context);

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

  return (
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
          onClick={() => console.log('llevar a pantalla reset password')}
        >
          Reestablecer contraseña
        </span>
        {userError && <span className="reset-password-text error-text">Datos incompletos</span>}
        {dataError && <span className="reset-password-text error-text">Datos inválidos</span>}
      </Form>
  );
};
