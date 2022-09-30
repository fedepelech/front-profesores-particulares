import React from "react";
import { useContext } from "react";
import { Container, Row } from "reactstrap";
import { Context } from "../../context";

export const Profile = () => {
  const { user } = useContext(Context);
  return <Container>
    <Row>
      <h2 className="p-5">
        {user.firstName} {user.surName}
      </h2>
    </Row>
    <Row>
      <h4 className="px-5">
        Mis clases
      </h4>
    </Row>
  </Container>;
};
