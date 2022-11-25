import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const FormSuscription = ({ setEmail , setPhone, setPhoneCod, setTimeToContact, setDescription}) => {
  return (
    <Form>
      <FormGroup>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>{" "}
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="code">Código de área</Label>
            <Input id="code" name="code" placeholder="11" onChange={(e) => setPhoneCod(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="experience-years">Número</Label>
            <Input
              id="experience-years"
              name="experience-years"
              placeholder="44128876"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleTime">
          Hora preferida para que el profesor lo contacte
        </Label>
        <Input
          id="exampleTime"
          name="time"
          placeholder="time placeholder"
          type="time"
          onChange={(e) => setTimeToContact(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
          <Label for="cost">Descripción</Label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
        </FormGroup>
    </Form>
  );
};
