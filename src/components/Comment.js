import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "./../redux/actions/blogActions";
import PropTypes from "prop-types";

const Comment = ({ blog }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(blog.id, comment));
    setComment("");
  };
  return (
    <div>
      {" "}
      <form onSubmit={onSubmit}>
        <h1>add commnets</h1>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>{" "}
        <button>add comment</button>
      </form>
      {blog && (
        <div>
          <ul>
            {blog.comments.map((comment, i) => (
              <li key={i}>{comment.comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
Comment.propTypes = {
  blog: PropTypes.object,
};

export default Comment;
