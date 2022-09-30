import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import './styles.scss';

import teachers from './../../../src/data/teachers-mock.json';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

export const Login = () => {
  const [emailUser, setEmailUser] = useState('');
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const login = () => {
    setUserError(false);
    const teacher = teachers.find((teacher) => teacher.email === emailUser);
    if(!teacher) {
      setUserError(true);
      return;
    }
    setUser({
      firstName: teacher.firstName,
      surName: teacher.surName,
      email: teacher.email,
      role: 'teacher'
    })
    navigate('/profile');
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
        {userError && <span className="reset-password-text error-text">No existe este usuario</span>}
      </Form>
  );
};
