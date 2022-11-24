import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Col, Container, Row } from "reactstrap";
import { ClassCard } from "../../components/class-card";
import { UserInformation } from "../../components/academic-information";
import { Context } from "../../context";
import { getClassesByUser } from "../../services/class";
import { getStudentInformation } from "../../services/student";
import { useNavigate } from 'react-router-dom';

import "./styles.scss";
import { getTeacherInformation } from "../../services/teacher";
import { TeacherInformation } from "../../components/teacher-information";
import { StudentProfile } from "../../components/student-profile";
import { TeacherProfile } from "../../components/teacher-profile";

export const Profile = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  let body;

  if(!user || !user.id) {
    navigate('/');
  }

  if (user?.id) {
    if(user.role === 'student') {
      body = (
        <StudentProfile studentId={user.id} />
      )
    }
    if(user.role === 'teacher') {
      body = (
        <TeacherProfile teacherId={user.id} />
      )
    }
  }

  return <Container className="container-profile">
    <Row>
      <h2 className="py-5">
        {user.firstName} {user.surName}
      </h2>
    </Row>
    <Row>
      <div className="container-body-profile">
        {body}
      </div>
    </Row>
  </Container>;
};
