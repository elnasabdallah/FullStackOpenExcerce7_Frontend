import React, { useState } from "react";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    addBlog({ title, author, url });
  };

  return (
    <div>
      <h1>Create new </h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='title'>Title : </label>
          <input
            type='text'
            onChange={({ target }) => setTitle(target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor='title'>Author : </label>
          <input
            type='text'
            onChange={({ target }) => setAuthor(target.value)}
            value={author}
          />
        </div>
        <div>
          <label htmlFor='title'>URL : </label>
          <input
            type='text'
            onChange={({ target }) => setUrl(target.value)}
            value={url}
          />
        </div>
        <button type='submit'> create </button>
      </form>
    </div>
  );
};

export default BlogForm;
