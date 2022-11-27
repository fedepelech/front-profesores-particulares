import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Context } from "../../context";
import { createComment, statusComment } from "../../services/class";

import './styles.scss';

export const SectionComment = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  const { user } = useContext(Context);
  const [newComment, setNewComment] = useState('');
  const [commentSent, setCommentSent] = useState(false);
  const [comments, setComments] = useState(classInformation?.comments);
  const [subscribed, setSubscribed] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const isTeacher = user?.role === 'teacher' && user?.id === classInformation?.teacher?._id;
  const [modal, setModal] = useState(false);
  const [reasonBlocked, setReasonBlocked] = useState(null);
  const [commentToBlock, setCommentToBlock] = useState(null);
  const navigate = useNavigate();
  const toggle = () => setModal(!modal);

  const buttonBlockClick = (commentToBlock) => {
    setModal(true);
    setCommentToBlock(commentToBlock);
  }

  useEffect(() => {
    if(!isTeacher && classInformation?._id && user?.id) {
      const sub = user.subscribedClasses?.find((id) => id === classInformation._id);
      if(sub) {
        setSubscribed(sub);
      }
    }
  }, [user])

  const createNewComment = () => {
    if(!newComment) {
      return;
    }
    createComment(classInformation._id, newComment)
      .then(() => {
        alert('Comentario creado con éxito!')
        setCommentSent(true);
      })
  }

  const approve = (idComment) => {
    statusComment(idComment, classInformation?._id, 'Aceptado')
      .then(() => {
        alert('Comentario aceptado')
        setShowButtons(false);
      })
  }

  const block = () => {
    if(!commentToBlock || !reasonBlocked) {
      alert('error');
      return;
    }
    statusComment(commentToBlock, classInformation?._id, 'Bloqueado', reasonBlocked)
      .then(() => {
        alert('Comentario aceptado')
        setShowButtons(false);
        setModal(false);
        navigate('/profile');
      })
  }

  return (
    <Container className="comment-container">
      <div className="comment-section">
        <div className="comment-side">
          <div className="comment-box">
            <h2>Reseñas</h2>
            {comments.length > 0
              ? comments.map((message) => (
                <>
                  {message.status !== 'Bloqueado' &&
                    <>
                    { message.status === 'Aceptado' || (isTeacher) ?
                    <Row className="row-button-comment">
                      <Col md={9}>
                        <p>
                          <b>{`${message.student?.firstName} ${message.student.surName}`}</b>{" "}
                          <span>
                            {" "}
                          </span>
                        </p>
                        {console.log(message)}
                        <p>{message.content}</p>
                      </Col>
                      <Col md={3}>
                        { isTeacher && showButtons && 'Pendiente' === message.status ?
                          <>
                            <span onClick={() => approve(message._id)} className="option-comment">Aprobar</span>
                            <span onClick={() => buttonBlockClick(message._id)} className="mx-2 option-comment">Bloquear</span>
                          </>
                        : <></>}
                      </Col>
                    </Row> : <></>}
                    </>
                    }
                </>
                ))
              : null}
          </div>
          { subscribed && !commentSent &&
          <div className="new-message">
            <input
              className="msg"
              type="text"
              placeholder="Escribe tu reseña sobre la clase"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="button-triangle"
              type="button"
              onClick={createNewComment}
            >
              <img src="/assets/Triangle.svg" alt="triangle" />
            </button>
          </div>}
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Razón de bloqueo</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            placeholder="Introduzca la razón del bloqueo"
            onChange={(e) => setReasonBlocked(e.target.value)}
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={block}>
            Enviar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      </Container>
  );
};
