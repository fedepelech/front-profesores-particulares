import React from "react";
import { Col, FormGroup, Input, List, Row } from "reactstrap";

export const SchoolSelect = () => {
  const options = ["No iniciado", "En curso", "Finalizado"];
  const degreeOptions = ['Primario', 'Secundario', 'Terciario', 'Universitario'];

  const completeOptions = (
    <FormGroup>
      <Input id="select" name="select" type="select">
        {options.map((option) => <option>{option}</option>)}
      </Input>
    </FormGroup>
  );

  return (
    <List type="unstyled">
      { degreeOptions.map((degree) => 
        <li>
          <Row>
            <Col md={4}>
              <p>{degree}</p>
            </Col>
            <Col md={8}>
              {completeOptions}
            </Col>
          </Row>
        </li>
      )}
    </List>
  );
};
