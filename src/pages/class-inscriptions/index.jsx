import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { InscriptionsAccordeon } from "../../components/inscriptions-accordeon";

import './styles.scss';

export const ClassInscriptions = () => {
  const { state } = useLocation();
  const { classInformation } = state;
  return (
    <Container className="container-inscriptions-page">
      <InscriptionsAccordeon classInformation={classInformation} />
    </Container>
  );
};
