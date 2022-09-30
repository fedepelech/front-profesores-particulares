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
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{type}</CardTitle>
          {/* <CardText>
            
          </CardText> */}
        </CardBody>
      </Card>
  );
};
