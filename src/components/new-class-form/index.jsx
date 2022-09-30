import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";

import './styles.scss';

export const NewClassForm = () => {
  const navigate = useNavigate();
  const options = ["Única", "Semanal", "Mensual"];

  return (
    <Form>
      <Row>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input id="name" placeholder="Matemática Discreta" />
        </FormGroup>
        <FormGroup>
          <Label for="classesQuantity">Cantidad de clases</Label>
          <Input id="classesQuantity" placeholder="20" />
        </FormGroup>
        <FormGroup>
          <Label for="frequency">Frecuencia</Label>
          <Input id="frequency" name="frequency" type="select">
            {options.map((option) => <option>{option}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="cost">Costo ($)</Label>
          <Input id="cost" placeholder="7500,99" />
        </FormGroup>
        <FormGroup>
          <Label for="cost">Descripción</Label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </FormGroup>
      </Row>
      <Button
        block={true}
        className='button-create'
        onClick={() => navigate('/profile')}
        >Crear clase</Button>
    </Form>
  );
};
