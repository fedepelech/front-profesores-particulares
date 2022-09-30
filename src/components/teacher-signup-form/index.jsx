import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const TeacherSignupForm = () => {
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
            <Label for="code">Código de area</Label>
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
        <Col md={8}>
          <FormGroup>
            <Label for="degree">Título</Label>
            <Input
              id="degree"
              name="degree"
              placeholder="Licenciado en matemática"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="experience-years">Experiencia</Label>
            <Input
              id="experience-years"
              name="experience-years"
              placeholder="2.5 años"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button block={true}>Registrarse</Button>
    </Form>
  );
};
