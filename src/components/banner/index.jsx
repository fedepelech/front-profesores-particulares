import React from "react";
import { useState } from "react";
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Collapse, Input, InputGroup, Label, Row } from "reactstrap";
import { getClassesWithFilters } from "../../services/class";

import './styles.scss';

export const Banner = ({ setClasses, setHasSearch }) => {
  const [collapse, setCollapse] = useState(false);
  const [normalSearch, setNormalSearch] = useState('');
  const [filters, setFilters] = useState({
    subject: null,
    grupal: null,
    frequency: null,
    calification: null
  })
  const [error, setError] = useState(false);

  const toggle = () => setCollapse(!collapse);

  const setCalification = (newCalification) => {
    console.log('newCalification: ', newCalification);
    if(newCalification < 1 ) {
      setError(true);
      setFilters({ ...filters, calification: 1});
      return;
    }
    if(newCalification > 5 ) {
      setError(true);
      setFilters({ ...filters, calification: 5});
      return;
    }
    setFilters({ ...filters, calification: Number(newCalification)});
  }

  const getFilteredClasses = () => { 
    let filtersObject = {};
    if(!collapse) {
      filtersObject.name = normalSearch;
    } else {
      filtersObject = filters;
    }
    getClassesWithFilters({ filters: filtersObject})
      .then((data) => {
        setHasSearch(true)
        setClasses(data);
      })
  }

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
              <Button className="button-search" onClick={getFilteredClasses}>
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
                      <Input id="materia" placeholder="Materia" onChange={(e) => setFilters({ ...filters, subject: e.target.value})}/>
                    </Col>
                    <Col md={3}>
                      <Label for="tipo-select" className="labels-advanced">Tipo</Label>
                      <Input id="tipo-select" name="tipo-select" type="select" onChange={(e) => setFilters({ ...filters, grupal: e.target.value})}>
                        <option value="">Ambas</option>
                        <option value="Individual">Individual</option>
                        <option value="Grupal">Grupal</option>
                      </Input>
                    </Col>
                    <Col md={3}>
                      <Label for="frequency-select" className="labels-advanced">Frecuencia</Label>
                      <Input id="frequency-select" name="frequency-select" type="select" onChange={(e) => setFilters({ ...filters, frequency: e.target.value})}>
                        <option value="">Cualquiera</option>
                        <option value="Única">Única</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensual">Mensual</option>
                      </Input>
                    </Col>
                    <Col md={3}>
                      <Label for="materia" className="labels-advanced">Mínima Calif.</Label>
                      <Input
                        id="materia"
                        placeholder="Entre 1 y 5"
                        onChange={(e) => setCalification(e.target.value)}
                        value={filters.calification ? filters.calification : ''} />
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
