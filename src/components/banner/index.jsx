import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

import './styles.css';

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
          Card Title
        </CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">
            Last updated 3 mins ago
          </small>
        </CardText>
      </CardImgOverlay>
    </Card>
  );
};
