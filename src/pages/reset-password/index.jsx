import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { sendNewPassword } from "../../services/auth";

import "./styles.scss";

export const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const restore = () => {
    setError(false);
    if(newPassword !== repeatPassword) {
      setError(true);
      return;
    }
    const token = query.get('token');
    sendNewPassword(token, newPassword)
      .then(() => {
        alert('La contraseña fue reestablecida');
        navigate('/');
        window.location.reload();
      })
  }

  return (
    <Container className="container-restore-password">
      <h4 className="my-5">Reestablecé tu contraseña</h4>
      <Input
        id="newPassword"
        name="newPassword"
        placeholder="Ingresa la nueva contraseña..."
        className="my-2"
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
      />
      <Input
        id="newPassword"
        name="newPassword"
        placeholder="Reingresa la nueva contraseña..."
        onChange={(e) => setRepeatPassword(e.target.value)}
        type="password"
      />
      <Button color="primary" className="mt-2" block="true" onClick={restore}>
        Reestablecer
      </Button>
      { error && <p>Las contraseñas no coinciden</p>}
    </Container>
  );
};
