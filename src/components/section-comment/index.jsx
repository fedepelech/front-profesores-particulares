import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { createComment } from "../../services/class";

import './styles.scss';

export const SectionComment = () => {
  const {state} = useLocation();
  const {classInformation} = state;
  const [newComment, setNewComment] = useState('');
  const [commentSent, setCommentSent] = useState(false);
  const [comments, setComments] = useState(classInformation?.comments);

  const createNewComment = () => {
    if(!newComment) {
      return;
    }
    createComment(classInformation.id, newComment)
      .then((commentcreated) => {
        console.log('comentario creado con exito', commentcreated);
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
          <div className="new-message">
            <input
              disabled
              className="msg"
              type="text"
              placeholder="Escribe tu reseña sobre la clase"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {!commentSent ? (
              <button
                className="button-triangle"
                type="button"
                onClick={createNewComment}
              >
                <img src="/assets/Triangle.svg" alt="triangle" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      </Container>
  );
};
