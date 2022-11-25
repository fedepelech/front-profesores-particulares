import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { Context } from "../../context";
import { createComment } from "../../services/class";

import './styles.scss';

export const SectionComment = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  const { user } = useContext(Context);
  const [newComment, setNewComment] = useState('');
  const [commentSent, setCommentSent] = useState(false);
  const [comments, setComments] = useState(classInformation?.comments);
  const [subscribed, setSubscribed] = useState(false);
  const isTeacher = user?.role === 'teacher' && user?.id === classInformation?.teacher?._id;

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

  return (
    <Container className="comment-container">
      <div className="comment-section">
        <div className="comment-side">
          <div className="comment-box">
            <h2>Reseñas</h2>
            {comments.length > 0
              ? comments.map((message) => (
                  <>
                    <p>
                      <b>{message.student}</b>{" "}
                      <span>
                        {" "}
                      </span>
                    </p>
                    <p>{message.content}</p>
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
      </Container>
  );
};
