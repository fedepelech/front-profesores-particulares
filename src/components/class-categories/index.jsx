import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { getClasses } from "../../services/class";
import { ClassCard } from "../class-card";

import classes from './../../../src/data/classes-mock.json';

import './styles.scss';

export const ClassCategories = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses()
      .then((data) => {
        setClasses(data);
      })
  }, [])
  
  return (
    <Container className="class-categories">
      <h3 className="mb-4">Explorá nuestras clases</h3>
        <div className="classes">
          { classes.map((classInformation, index) => <ClassCard classInformation={classInformation} idx={index} />)}
        </div>
    </Container>
  );
};
