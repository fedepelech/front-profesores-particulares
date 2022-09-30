import React, { useState } from "react";
import { Container } from "reactstrap";

import comments from './../../../src/data/comments-mock.json';

import './styles.scss';

export const SectionComment = () => {
  const [newComment, setNewComment] = useState('');
  const [commentSent, setCommentSent] = useState(false);

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
                onClick={() => null}
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
