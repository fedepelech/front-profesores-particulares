import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { createClass } from "../../services/class";
import UploadFile from "../upload-file";

import "./styles.scss";

export const NewClassForm = () => {
  const navigate = useNavigate();

  const [fileId, setFileId] = useState(null);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState(null);
  const [quantityClasses, setQuantityClasses] = useState(null);
  const [frequency, setFrequency] = useState('Única');
  const [type, setType] = useState('Grupal');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const create = () => {
    setError(false);
    console.log(fileId);
    console.log(name, subject, cost, quantityClasses, frequency, type, description);
    if(!name || !subject || !cost || !quantityClasses || !frequency || !type || !description) {
      setError(true);
      return;
    }
    const statusToSend = status ? 'PUBLISHED' : 'HIDDEN';
    const classToCreate = {
      name,
      subject,
      cost,
      duration: quantityClasses,
      frequency,
      grupal: type === 'Grupal',
      description,
      status: statusToSend,
      fileId
    }
    createClass(classToCreate)
      .then(() => {
        alert('La clase fue creada correctamente')
        navigate('/');
      })
      .catch(() => {
        alert('Ocurrió un error inesperado');
        navigate('/');
      })
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          id="exampleName"
          name="name"
          placeholder="Curso Inglés Nivel A2"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Materia</Label>
        <Input
          onChange={(e) => setSubject(e.target.value)}
          id="exampleName"
          name="name"
          placeholder="Lengua"
          type="text"
          value={subject}
        />
      </FormGroup>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="cost">Precio ($)</Label>
            <Input
              id="cost"
              name="cost"
              placeholder="11"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
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
          <Input
            id="frequency-select"
            name="frequency-select"
            type="select"
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
          >
            <option value="Única">Única</option>
            <option value="Semanal">Semanal</option>
            <option value="Mensual">Mensual</option>
          </Input>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="quantity-class">Tipo</Label>
            <Input
              id="frequency-select"
              name="frequency-select"
              type="select"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
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
          placeholder="Escriba una breve descripción sobre los temas que se van a abordar en el curso..."
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
      <UploadFile setFileId={setFileId} />
      <Button
        block={true}
        className="button-create"
        onClick={create}
      >
        Crear clase
      </Button>
      {error && <span>Error, ningún campo puede quedar vacío</span>}
    </Form>
  );
};
