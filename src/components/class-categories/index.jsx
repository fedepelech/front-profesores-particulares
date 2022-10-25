import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { getClasses } from "../../services/class";
import { ClassCard } from "../class-card";

import classes from './../../../src/data/classes-mock.json';

import './styles.scss';

export const ClassCategories = ({ classes, hasSearch }) => {
  return (
    <Container className="class-categories">
      <h3 className="mb-4">{hasSearch ? 'Resultados de tu búsqueda': 'Explorá nuestras clases'}</h3>
        <div className="classes">
          { classes.map((classInformation, index) => <ClassCard classInformation={classInformation} idx={index} />)}
        </div>
    </Container>
  );
};
