//agregar eso de la valoracion aca

import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getClassesByUser } from "../../services/class";
import { getStudentInformation } from "../../services/student";
import { AcademicInformation } from "../academic-information";
import { ClassCard } from "../class-card";

import './styles.scss'

export const StudentProfile = ({ studentId = null}) => {
  const [academic, setAcademic] = useState(null);
  const [personal, setPersonal] = useState(null);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    return Promise.all([getStudentInformation(studentId), getClassesByUser()])
      .then((data) => {
        return {
          academic: data[0].academic,
          personal: data[0].personal,
          classes: data[1]
        };
      })
  }

  useEffect(() => {
      getData()
        .then(({academic, personal, classes}) => {
          setAcademic(academic);
          setPersonal(personal);
          setClasses(classes);
        })
  }, [studentId])

  return (
    <>
      { academic && personal ? 
        <Row>
          <Col sm={6}>
            <p>Email: {personal?.email}</p>
          </Col>
          <Col sm={6}>
            <AcademicInformation academic={academic} />
          </Col>
        </Row>
      : 
        <></>
      }
      <div className="mt-5">
      {
        classes && classes.length > 0 ? (
          <>
            <h4 className="py-3">
              Clases contratadas
            </h4>
            <div className="classes mt-3">
              {  classes.map((classInformation, index) => <ClassCard classInformation={classInformation} idx={index} />)}
            </div>
          </>
        ) : 
        <div className="p-5">
          <h4>No tenés clases contratadas.</h4>
          <h6 className="mt-2 explore-classes" onClick={() => navigate('/')}>Para explorar todas las clases disponibles, click acá</h6>
        </div>
      }
      </div>
    </>
  );
};
