import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Popover,
  PopoverBody,
  PopoverHeader,
  Progress,
  Row,
} from "reactstrap";

import "./styles.scss";

const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;

export const ClassCard = ({ classInformation, idx, valoration = null }) => {
  const navigate = useNavigate();
  const {name, teacher, score, quantityValorations, cost, description} = classInformation;
  const [showPopover, setShowPopover] = useState(false);
  const imgSrc = classInformation?.file && classInformation.file.path ? `${API_IMAGE_URL}${classInformation.file.path}` : `https://picsum.photos/318/${180 + idx}`;
  
  const toggle = () => setShowPopover(!showPopover);

  const onHover = () => setShowPopover(true);
  const onHoverLeave = () => setShowPopover(false);

  const colorProgressBar = (score) => {
    if(score < 2.5) {
      return 'danger';
    }
    if(score < 3.5) {
      return 'warning';
    }
    if(score < 4.2) {
      return '';
    }
    if(score <= 5) {
      return 'success';
    }
  }

  return (
    <>
      <div
        className="card-class"
        id={`ClassInformation${idx}`}
        onMouseOver={onHover}
        onMouseLeave={onHoverLeave}
        onClick={() => navigate('/class/detail', {state: {classInformation, valoration}})}>
        <Card color="light">
          <CardImg
            alt="Card image cap"
            // src={``}
            src={imgSrc}
            top
            width="100%"
            height="200rem"
          />
          <CardBody>
            <CardTitle tag="h6" className="mt-0">
              {name}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted class-teacher">
              <img src="/assets/student.png" className="icon-teacher" alt="icon-teacher" />
              {`${teacher.firstName} ${teacher.surName}`}
            </CardSubtitle>
            <Row>
              <Col md={10} xs={9}>
                { quantityValorations === 0 ? <span className="no-valorations-text">No tiene valoraciones</span> : 
                <Progress className="mt-2 mb-1" max="5" value={score} color={colorProgressBar(score)}>
                  {score}/5
                </Progress>}
              </Col>
              <Col md={2} xs={3} className="p-0">
                <span className="quantity-valorations">({quantityValorations})</span>
              </Col>
            </Row>
            <p className="price-class">${cost}</p>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
      <Popover
          placement="right"
          isOpen={showPopover}
          target={`ClassInformation${idx}`}
          toggle={toggle}
        >
        <PopoverHeader>{name}</PopoverHeader>
        <PopoverBody>
          {description}
        </PopoverBody>
      </Popover>
    </>
  );
};
