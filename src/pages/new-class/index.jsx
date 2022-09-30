import React from 'react'
import { Container } from 'reactstrap'
import { NewClassForm } from '../../components/new-class-form'

import './styles.scss';

export const NewClass = () => {
  return (
    <Container className='container-form-new-class'>
      <h2 className='mb-5'>Nueva clase</h2>
      <NewClassForm />
    </Container>
  )
}
