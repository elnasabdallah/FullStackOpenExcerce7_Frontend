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
        <h3>add commnets</h3>
        <div className="row mb-3">
          <div className="col-12">
            <textarea
              className="form-control"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>{" "}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <button className="w-100 btn btn-primary">add comment</button>
          </div>
        </div>
      </form>
      <div className="mt-2">
        {blog && (
          <div className="list-gorup">
            {blog.comments.map((comment, i) => (
              <div className="list-group-item" key={i}>
                {comment.comment}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
Comment.propTypes = {
  blog: PropTypes.object,
};

export default Comment;
