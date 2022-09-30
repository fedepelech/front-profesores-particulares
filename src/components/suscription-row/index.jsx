import React from "react";
import { Button, Row } from "reactstrap";

import "./styles.scss";

export const SuscriptionRow = () => {
  return (
    <div className="suscription-row-section">
      <div className="container-sub-button">
        <Button className="suscription-button" color="secondary" size="lg">Contratar</Button>
      </div>
    </div>
  );
};
