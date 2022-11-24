import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Col, Container, Progress, Row } from 'reactstrap'
import { Context } from '../../context';

import './style.scss';

export const ClassInformation = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  
  const colorProgressBar = (score) => {
    if(score < 2.5) {
      return 'danger';
    }
    if(score < 3.5) {
      return 'warning';
    }
    if(score < 4.2) {
      return '';
    }
    if(score <= 5) {
      return 'success';
    }
  }

  return (
    <section className='class-information'>
        <Container className='class-content'>
            <Row>
                <Col md={8}>
                    <div className='description'>
                        <h2>{classInformation.name}</h2>
                        <div className='text-description'>
                          <p className='text-information'>{classInformation.description}</p>
                        </div>
                        <Row className='valoration'>
                          <Col md={5}>
                            <Progress
                              className="mt-2 mb-1"
                              max="5"
                              value={classInformation.score}
                              color={colorProgressBar(classInformation.score)}>
                              {classInformation.score}/5
                            </Progress>
                          </Col>
                          <Col md={7}>
                            <p className='text-light'>{`(${classInformation.quantityValorations} valoraciones)`}</p>
                          </Col>
                        </Row>
                        <p className='text-light quantity-frequency'>10 clases || Semanal</p>
                    </div>
                </Col>
                <Col md={4}>
                  <div className='personal-col'>
                    <img
                      src='/assets/ggg.png'
                      className='class-photo'
                      alt='profile'
                    />
                    <p className='text-information'>{`${classInformation.teacher.firstName} ${classInformation.teacher.surName}`}</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}