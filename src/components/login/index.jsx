import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './styles.css';

export const Login = () => {
  return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
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
        <Button block={true} className="mb-2">ingresar</Button>
        <span
          className="reset-password-text"
          onClick={() => console.log('llevar a pantalla reset password')}
        >
          Reestablecer contraseña
        </span>
      </Form>
  );
};
