import React from "react";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Input, InputGroup, Label } from "reactstrap";

import './styles.scss';

export const Banner = () => {
  return (
    <Card inverse>
      <CardImg
        alt="Card image cap"
        src="/assets/banner12.jpg"
        style={{
          height: "400px",
          objectFit: "cover",
          borderRadius: 0,
        }}
        width="100%"
      />
      <CardImgOverlay className="overlay">
        <CardTitle tag="h5" className="card-title">
          Clases para todos los niveles<br />
          y de todas las temáticas
        </CardTitle>
          <InputGroup className="input-search">
            <Input
              placeholder="¿Qué querés repasar?"
            />
            <Button className="button-search">
              Buscar
            </Button>
          </InputGroup>
      </CardImgOverlay>
    </Card>
  );
};
