import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { ClassInformation } from '../../components/class-information'
import { SectionComment } from '../../components/section-comment'
import { SuscriptionRow } from '../../components/suscription-row'
import { TeacherInformation } from '../../components/teacher-information'

import './styles.scss';

export const ClassDetailPage = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  const {teacher} = classInformation;

  return (
    <>
      <ClassInformation />
      <SuscriptionRow />
      <Container className='section-comment-teacher'>
        <Row>
          <Col md={8} xs={12}>
            <SectionComment />
          </Col>
          <Col md={4} xs={12}>
            <TeacherInformation teacherId={teacher?._id} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
