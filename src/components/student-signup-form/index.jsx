import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, List, Row } from "reactstrap";
import { signupService } from "../../services/auth";

import './styles.scss';

export const StudentSignupForm = () => {
  const navigate = useNavigate();

  const options = ["No iniciado", "En curso", "Finalizado"];
  const degreeOptions = ['Primario', 'Secundario', 'Terciario', 'Universitario'];
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneCod, setPhoneCod] = useState(null);
  const [phone, setPhone] = useState(null);
  const [academicInformation, setAcademicInformation] = useState({
    primarySchool: 'No iniciado',
    secondarySchool: 'No iniciado',
    tertiarySchool: 'No iniciado',
    university: 'No iniciado',
  })

  const [userCreated, setUserCreated] = useState(false);


  const handle = (selectValue, degree) => {
    switch(degree) {
      case 'Primario':
        setAcademicInformation({...academicInformation, primarySchool: selectValue});
        return;
      case 'Secundario':
        setAcademicInformation({...academicInformation, secondarySchool: selectValue});
        return;
      case 'Terciario':
        setAcademicInformation({...academicInformation, tertiarySchool: selectValue});
        return;
      case 'Universitario':
        setAcademicInformation({...academicInformation, university: selectValue});
        return;
      default:
        return;
    }
  }

  const signup = () => {
    if (!firstName || !surName || !email || !password || !repeatPassword || !birthDate || !phone || !phoneCod) {
      return; //marcar error
    }
    const information = {
      firstName,
      surName,
      email,
      password,
      birthDate,
      phone,
      phoneCod,
      role: 'student',
      primarySchool: academicInformation.primarySchool,
      secondarySchool: academicInformation.secondarySchool,
      tertiarySchool: academicInformation.tertiarySchool,
      university: academicInformation.university
    };
    signupService(information)
      .then(() => {
        setUserCreated(true);
      })
  }

  useEffect(() => {
    if(userCreated) {
      setFirstName('');
      setSurName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setPhoneCod(null);
      setPhone(null);
      setBirthDate('');
      setAcademicInformation({
        primarySchool: 'No iniciado',
        secondarySchool: 'No iniciado',
        tertiarySchool: 'No iniciado',
        university: 'No iniciado',
      });
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }
  }, [userCreated])

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nombre/s</Label>
            <Input id="name" placeholder="Juan Rodrigo" onChange={(e) => setFirstName(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="surname">Apellido/s</Label>
            <Input id="surname" placeholder="Farias" onChange={(e) => setSurName(e.target.value)}/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="juanfarias@gmail.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              placeholder="contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Reingrese su contraseña</Label>
            <Input
              id="repeatPassword"
              name="repeatPassword"
              placeholder="reingresar contraseña"
              type="password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="code">Código de área</Label>
            <Input id="code" name="code" placeholder="11" onChange={(e) => setPhoneCod(e.target.value)}/>
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="experience-years">Número</Label>
            <Input
              id="experience-years"
              name="experience-years"
              placeholder="44128876"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <FormGroup>
          <Label for="exampleDate">Fecha de nacimiento</Label>
          <Input id="date" name="date" placeholder="10/04/1999" type="date" onChange={(e) => setBirthDate(e.target.value)}/>
        </FormGroup>
      </Row>
      <Row>
        <h5 className="mt-4 mb-2">Información académica</h5>
        <p>Seleccione las opciones que correspondan</p>
        <List type="unstyled">
          { degreeOptions.map((degree) => 
            <li>
              <Row>
                <Col md={4}>
                  <p>{degree}</p>
                </Col>
                <Col md={8}>
                <FormGroup>
                  <Input id="select" name="select" type="select" onChange={(e) => handle(e.target.value, degree)}>
                    {options.map((option) => <option>{option}</option>)}
                  </Input>
                </FormGroup>
                </Col>
              </Row>
            </li>
          )}
        </List>
      </Row>
      <Button block={true} onClick={signup}>Registrarse</Button>
      {userCreated && <p className="successful-message">Usuario creado con éxito. Será redirigido al inicio</p>}
    </Form>
  );
};
