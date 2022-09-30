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

export const ClassCard = ({ classInformation }) => {
  const navigate = useNavigate();
  const {id, title, teacher, score, quantityValorations, price, description} = classInformation;
  const [showPopover, setShowPopover] = useState(false);

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
        id={`ClassInformation${id}`}
        onMouseOver={onHover}
        onMouseLeave={onHoverLeave}
        onClick={() => navigate('/class/id/detail', {state: {classInformation}})}>
        <Card color="light">
          <CardImg
            alt="Card image cap"
            src={`https://picsum.photos/318/${180 + id}`}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h6" className="mt-0">
              {title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted class-teacher">
              <img src="/assets/student.png" className="icon-teacher" alt="icon-teacher" />
              {teacher}
            </CardSubtitle>
            <Row>
              <Col md={10} xs={9}>
                <Progress className="mt-2 mb-1" max="5" value={score} color={colorProgressBar(score)}>
                  {score}/5
                </Progress>
              </Col>
              <Col md={2} xs={3} className="p-0">
                <span className="quantity-valorations">({quantityValorations})</span>
              </Col>
            </Row>
            <p className="price-class">${price}</p>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </div>
      <Popover
          placement="right"
          isOpen={showPopover}
          target={`ClassInformation${id}`}
          toggle={toggle}
        >
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>
          {description}
        </PopoverBody>
      </Popover>
    </>
  );
};
