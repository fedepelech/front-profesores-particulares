import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { signupService } from "../../services/auth";

import './styles.scss';

export const TeacherSignupForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [phoneCod, setPhoneCod] = useState(null);
  const [phone, setPhone] = useState(null);
  const [degree, setDegree] = useState('');
  const [experience, setExperience] = useState(null);

  const [userCreated, setUserCreated] = useState(false);

  const signup = () => {
    if (!firstName || !surName || !email || !password || !repeatPassword || !degree || !phone || !phoneCod || !experience) {
      return; //marcar error
    }
    const information = {
      firstName,
      surName,
      email,
      password,
      degree,
      phone,
      phoneCod,
      role: 'teacher',
      experience
    };
    signupService(information)
      .then((data) => {
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
      setDegree('');
      setExperience(null);
      setTimeout(() => {
        navigate('/');
      }, 4000);
    }
  }, [userCreated])
  

  return (
    <>
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nombre/s</Label>
            <Input id="name" placeholder="Juan Rodrigo" onChange={(e) => setFirstName(e.target.value)} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="surname">Apellido/s</Label>
            <Input id="surname" placeholder="Farias" onChange={(e) => setSurName(e.target.value)} />
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
            <Label for="code">Código de area</Label>
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
        <Col md={8}>
          <FormGroup>
            <Label for="degree">Título</Label>
            <Input
              id="degree"
              name="degree"
              placeholder="Licenciado en matemática"
              onChange={(e) => setDegree(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="experience-years" className="experience">Experiencia (en años)</Label>
            <Input
              id="experience-years"
              name="experience-years"
              placeholder="2.5"
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button block={true} onClick={signup}>Registrarse</Button>
      {userCreated && <p className="successful-message">Usuario creado con éxito. Será redirigido al inicio</p>}
    </Form>
    </>
  );
};
