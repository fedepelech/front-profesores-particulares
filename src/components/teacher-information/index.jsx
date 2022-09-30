import React from 'react'
import { useLocation } from 'react-router-dom';

import './styles.scss';

import teachers from './../../../src/data/teachers-mock.json';

export const TeacherInformation = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  const teacher = teachers.find((teacher) => (`${teacher.firstName} ${teacher.surName}`) === classInformation.teacher);
  return (
    <div className='section-teacher-information'>
      <div className='section-content'>
        <h6 className='font-weight-bold mb-5'>Información del profesor</h6>
        <p>{`Nombre: ${teacher.firstName} ${teacher.surName}`}</p>
        <p>{`Título: ${teacher.degree}`}</p>
        <p>{`Experiencia: ${teacher.experience}`}</p>
      </div>
    </div>
  )
}
