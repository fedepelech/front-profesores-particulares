import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";

import './styles.scss';

export const AuthButton = ({ type, setSelected }) => {

  const selectCurrent = () => {
    setSelected(true);
  };

  return (
      <Card
        onClick={selectCurrent}
        className="card-auth"
        style={{
          width: "30%",
        }}
      >
        <div className="container-img">
          <img
            alt="Sample"
            src={`/assets/${ type === 'Profesor' ? "teacher-icon.png" : "student-icon.png"}`}
            style={{
              height: 270,
              width: 250
            }}
            />
        </div>
        <CardBody>
          <CardTitle tag="h5">{type}</CardTitle>
          {/* <CardText>
            
          </CardText> */}
        </CardBody>
      </Card>
  );
};
