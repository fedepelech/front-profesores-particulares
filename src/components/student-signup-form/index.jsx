import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, List, Row } from "reactstrap";
import { SchoolSelect } from "../school-select";

export const StudentSignupForm = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nombre/s</Label>
            <Input id="name" placeholder="Juan Rodrigo" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="surname">Apellido/s</Label>
            <Input id="surname" placeholder="Farias" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="juanfarias@gmail.com"
          type="email"
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              placeholder="contraseña"
              type="password"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Reingrese su contraseña</Label>
            <Input
              id="repeatPassword"
              name="repeatPassword"
              placeholder="reingresar contraseña"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="code">Código de área</Label>
            <Input id="code" name="code" placeholder="11" />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="experience-years">Número</Label>
            <Input
              id="experience-years"
              name="experience-years"
              placeholder="44128876"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <FormGroup>
          <Label for="exampleDate">Fecha de nacimiento</Label>
          <Input id="date" name="date" placeholder="10/04/1999" type="date" />
        </FormGroup>
      </Row>
      <Row>
        <h5 className="mt-4 mb-2">Información académica</h5>
        <p>Seleccione las opciones que correspondan</p>
        <SchoolSelect />
      </Row>
      <Button block={true}>Registrarse</Button>
    </Form>
  );
};
