import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTeacherInformation } from '../../services/teacher';

import './styles.scss';

export const TeacherInformation = ({teacherId = null}) => {
  const [degree, setDegree] = useState('');
  const [experience, setExperience] = useState('');
  const [firstName, setFirstname] = useState('');
  const [surName, setSurname] = useState('');

  useEffect(() => {
    getTeacherInformation(teacherId)
      .then(({academic, personal}) => {
        setDegree(academic.degree);
        setExperience(academic.experience);
        setExperience(academic.experience);
        setFirstname(personal.firstName)
        setSurname(personal.surName);
      })
  }, [teacherId])

  return (
    <div className='section-teacher-information'>
      { degree && experience ?
        <div className='section-content'>
          <h6 className='font-weight-bold mb-5'>Información del profesor</h6>
          <p>{`Nombre: ${firstName} ${surName}`}</p>
          <p>{`Título: ${degree}`}</p>
          <p>{`Experiencia: ${experience} años`}</p>
        </div>
        : 
        <></>
      }
    </div>
  )
}
