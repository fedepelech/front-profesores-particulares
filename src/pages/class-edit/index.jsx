import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { editClass } from "../../services/class";

import "./styles.scss";

export const ClassEdit = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {classInformation} = state;

  const [name, setName] = useState(classInformation?.name);
  const [subject, setSubject] = useState(classInformation?.subject);
  const [cost, setCost] = useState(classInformation?.cost);
  const [quantityClasses, setQuantityClasses] = useState(classInformation?.duration);
  const [frequency, setFrequency] = useState(classInformation?.frequency);
  const [type, setType] = useState(classInformation?.grupal ? 'Grupal' : 'Individual');
  const [description, setDescription] = useState(classInformation?.description);
  const [status, setStatus] = useState(classInformation?.status === "PUBLISHED");
  const [error, setError] = useState(false);

  const modify = () => {
    setError(false);
    if(!name || !subject || !cost || !quantityClasses || !frequency || !type || !description) {
      setError(true);
      return;
    }
    const statusToSend = status ? 'PUBLISHED' : 'HIDDEN';
    const classToModify = {
      id: classInformation._id,
      name,
      subject,
      cost,
      quantityClasses,
      frequency,
      type,
      description,
      status: statusToSend
    }
    editClass(classToModify)
      .then(() => {
        alert("Se ha guardado con éxito");
        navigate('/');
      })
  }

  return (
    <div className="container-class-edit">
    { classInformation !== null ? 
      <div className="form-class-edit">
        <h3 className="mb-4">Editar clase</h3>
        <Form>
          <FormGroup>
            <Label for="name">Nombre</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="exampleName"
              name="name"
              placeholder="name"
              type="text"
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Materia</Label>
            <Input
              onChange={(e) => setSubject(e.target.value)}
              id="exampleName"
              name="name"
              placeholder="name"
              type="text"
              value={subject}
            />
          </FormGroup>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="cost">Precio ($)</Label>
                <Input id="cost" name="cost" placeholder="11" value={cost} onChange={(e) => setCost(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for="quantity-class">Cantidad de clases</Label>
                <Input
                  id="quantity-class"
                  name="quantity-class"
                  placeholder="20"
                  value={quantityClasses}
                  onChange={(e) => setQuantityClasses(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label for="frequency-select">Frecuencia</Label>
              <Input id="frequency-select" name="frequency-select" type="select" onChange={(e) => setFrequency(e.target.value)} value={frequency}>
                <option value="Única">Única</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
              </Input>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="quantity-class">Tipo</Label>
                <Input id="frequency-select" name="frequency-select" type="select" onChange={(e) => setType(e.target.value)} value={type}>
                  <option value="Única">Grupal</option>
                  <option value="Semanal">Individual</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          
          <FormGroup>
            <Label for="cost">Descripción</Label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </FormGroup>
          <FormGroup>
            <Label for="status" className="status-radio">
              Publicada (si está tildado, la clase estará visible para los usuarios)
            </Label>
            <Input
              type="radio"
              name="status"
              checked={status}
              value={status}
              onClick={(e) => setStatus(!status)}
            />
          </FormGroup>
          <Button block={true} onClick={modify}>Guardar cambios</Button>
          {error && <span>Error, ningún campo puede quedar vacío</span>}
        </Form>
      </div>
    : <></>}
    </div>
  );
};
