import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { ClassInformation } from '../../components/class-information'
import { SectionComment } from '../../components/section-comment'
import { SuscriptionRow } from '../../components/suscription-row'
import { TeacherInformation } from '../../components/teacher-information'

import './styles.scss';

export const ClassDetailPage = () => {
  return (
    <>
      <ClassInformation />
      <SuscriptionRow />
      <Container className='section-comment-teacher'>
        <Row>
          <Col md={8}>
            <SectionComment />
          </Col>
          <Col md={4}>
            <TeacherInformation />
          </Col>
        </Row>
      </Container>
    </>
  )
}
