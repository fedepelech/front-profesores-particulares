import React from "react";
import { useNavigate } from 'react-router-dom';

import "./styles.scss";

export const TopPage = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  }

  return (
    <div className="top-page w-100 p-2">
      <p>¿Todavía no tenés cuenta? <span onClick={() => goToSignup()}>Registraté ahora</span></p>
    </div>
  );
};
