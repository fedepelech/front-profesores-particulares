import React from "react";
import { Container, Row } from "reactstrap";
import { ClassCard } from "../class-card";

import classes from './../../../src/data/classes-mock.json';

import './styles.scss';

export const ClassCategories = () => {
  return (
    <Container className="class-categories">
      <h3 className="mb-4">Explorá nuestras clases</h3>
        <div className="classes">
          { classes.map((classInformation) => <ClassCard classInformation={classInformation} />)}
        </div>
    </Container>
  );
};
