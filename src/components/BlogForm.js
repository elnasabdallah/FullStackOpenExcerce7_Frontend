import React, { useState } from "react";
import PropTypes from "prop-types";
import { addBlog } from "../redux/actions/blogActions";
import { useDispatch } from "react-redux";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog({ title, author, url }));
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <div className="d-flex  justify-content-center">
      <form onSubmit={onSubmit} className="blogForm w-50 text-center">
        <h1>Create new blog </h1>
        <div className="row mb-2">
          <label className="col-2 form-label" htmlFor="title">
            Title
          </label>
          <div className="col-10">
            <input
              type="text"
              required
              className="title form-control"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="col-2 form-label" htmlFor="title">
            Author
          </label>
          <div className="col-10">
            <input
              type="text"
              required
              className="author form-control"
              onChange={({ target }) => setAuthor(target.value)}
              value={author}
            />
          </div>
        </div>

        <div className="row mb-2">
          <label className="col-2 form-label" htmlFor="title">
            URL
          </label>
          <div className="col-10">
            <input
              type="text"
              required
              className="url form-control"
              onChange={({ target }) => setUrl(target.value)}
              value={url}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              className="w-100 btn btn-primary mb-2"
              id="create"
              type="submit"
            >
              create{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default BlogForm;
