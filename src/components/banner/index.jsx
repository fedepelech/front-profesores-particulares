import React from "react";
import { useState } from "react";
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Collapse, Input, InputGroup, Label, Row } from "reactstrap";

import './styles.scss';

export const Banner = () => {
  const [collapse, setCollapse] = useState(false);
  const [normalSearch, setNormalSearch] = useState('');
  const toggle = () => setCollapse(!collapse);

  return (
    <Card inverse>
      <CardImg
        alt="Card image cap"
        src="/assets/banner12.jpg"
        style={{
          height: "400px",
          objectFit: "cover",
          borderRadius: 0,
        }}
        width="100%"
      />
      <CardImgOverlay className="overlay">
        <CardTitle tag="h5" className="card-title">
          Clases para todos los niveles<br />
          y de todas las temáticas
        </CardTitle>
        <div className="content-search">
          <InputGroup className="input-search">
              <Input
                placeholder="¿Qué querés repasar?"
                disabled={collapse}
                onChange={(e) => setNormalSearch(e.target.value)}
                value={collapse ? '' : normalSearch}
              />
              <Button className="button-search">
                Buscar
              </Button>
          </InputGroup>
          <div className="advanced-text">
            <p onClick={toggle}>Búsqueda avanzada {collapse && <span className="close-span">x</span>}</p>
            <Collapse isOpen={collapse}>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={3}>
                      <Label for="materia" className="labels-advanced">Materia</Label>
                      <Input id="materia" placeholder="Materia" />
                    </Col>
                    <Col md={3}>
                      <Label for="tipo-select" className="labels-advanced">Tipo</Label>
                      <Input id="tipo-select" name="tipo-select" type="select">
                        <option>Ambas</option>
                        <option>Individual</option>
                        <option>Grupal  </option>
                      </Input>
                    </Col>
                    <Col md={3}>
                      <Label for="frequency-select" className="labels-advanced">Frecuencia</Label>
                      <Input id="frequency-select" name="frequency-select" type="select">
                        <option>Cualquiera</option>
                        <option>Única</option>
                        <option>Semanal</option>
                        <option>Mensual</option>
                      </Input>
                    </Col>
                    <Col md={3}>
                      <Label for="materia" className="labels-advanced">Mínima Calif.</Label>
                      <Input id="materia" placeholder="Entre 1 y 5" />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
      </CardImgOverlay>
    </Card>
  );
};
