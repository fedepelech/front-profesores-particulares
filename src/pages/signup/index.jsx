import React, {useState} from "react";
import { useEffect } from "react";
import { Container } from "reactstrap";
import { AuthButton } from "../../components/auth-button";
import { StudentSignupForm } from "../../components/student-signup-form";
import { TeacherSignupForm } from "../../components/teacher-signup-form";

import "./styles.scss";

export const Signup = () => {
  const [teacherRole, setTeacherRole] = useState(false);
  const [studentRole, setStudentRole] = useState(false);
  return (

    <Container className="signup-page">
      <h3>{!teacherRole && !studentRole ? 'Elige una opción' : 'Ingrese sus datos'}</h3>
      <div className="signup-body">
        { !teacherRole && !studentRole ?
          <>
            <AuthButton type={"Alumno"} setSelected={setStudentRole} />
            <AuthButton type={"Profesor"} setSelected={setTeacherRole} />
          </>
        : (teacherRole ? <TeacherSignupForm /> : <StudentSignupForm />)}
      </div>
    </Container>
  );
};
