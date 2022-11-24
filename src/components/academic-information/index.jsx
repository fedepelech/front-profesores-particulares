import moment from 'moment/moment';
import React from 'react'
import { Col, Row } from 'reactstrap';

import "./styles.scss";

export const AcademicInformation = ({academic = null, teacher = false}) => {

  let body = (
    <>
      <h5>Información académica</h5>
      <ul>
        <li>Primario: {academic?.primarySchool}</li>
        <li>Secundario: {academic?.secondarySchool === 'Si' ? 'Finalizado' : 'No'}</li>
        <li>Terciario: {academic?.tertiarySchool === 'Si' ? 'Finalizado' : 'No'}</li>
        <li>Universidad: {academic?.university === 'Si' ? 'Finalizada' : 'No'}</li>
      </ul>
      <p>Fecha de nacimiento: {moment(academic?.birthDate).format('DD/MM/YYYY')}</p>
    </>
  );

  if(teacher) {
    body = (
    <>
      <h5>Información profesional</h5>
      <ul>
        <li>Título: {academic?.degree}</li>
        <li>Experiencia: {academic?.experience} años</li>
      </ul>
    </>
    );
  }

  return (
    <div className='container-user-information'>
      {body}        
    </div>
  )
}
