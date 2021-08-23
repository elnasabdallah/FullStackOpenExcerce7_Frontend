import React, { useState } from "react";
import PropTypes from "prop-types";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, author, url });
  };

  return (
    <div>
      <h1>Create new </h1>
      <form onSubmit={onSubmit} className="blogForm">
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            className="title"
            onChange={({ target }) => setTitle(target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="title">Author : </label>
          <input
            type="text"
            className="author"
            onChange={({ target }) => setAuthor(target.value)}
            value={author}
          />
        </div>
        <div>
          <label htmlFor="title">URL : </label>
          <input
            type="text"
            className="url"
            onChange={({ target }) => setUrl(target.value)}
            value={url}
          />
        </div>
        <button id="create" type="submit">
          {" "}
          create{" "}
        </button>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default BlogForm;
