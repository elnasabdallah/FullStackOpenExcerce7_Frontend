import React, { useState } from "react";

const Blog = ({ blog, updateBlog, deleteBlog }) => {
  const [visibilty, setVisibilty] = useState(false);

  const bodyStyle = { display: visibilty ? "" : "none" };
  const topStyle = { display: visibilty ? "none" : "" };

  const handleToggle = () => {
    setVisibilty(!visibilty);
  };
  const onLike = blog => {
    const updatedBlog = {
      title: blog.title,
      author: blog.author,
      likes: blog.likes + 1,
      url: blog.url,
      user: blog.user.id,
    };

    updateBlog(blog.id, updatedBlog);
  };
  const handleDelete = id => {
    const confirm = window.confirm(
      `remove blog ${blog.title} by ${blog.author}`
    );
    if (confirm) {
      deleteBlog(blog.id);
    }
  };
  return (
    <div style={blogStyle}>
      <div style={topStyle}>
        {blog.title} {blog.author} <button onClick={handleToggle}>view</button>
      </div>
      <div style={bodyStyle}>
        {blog.title} <button onClick={handleToggle}>hide</button>
        <br />
        {blog.url}
        <br />
        Likes {blog.likes} <button onClick={() => onLike(blog)}>like</button>
        <br />
        <button style={btn} onClick={() => handleDelete(blog)}>
          remove
        </button>
        <br />
        {blog.author}
      </div>
    </div>
  );
};

const btn = {
  background: "blue",
};
const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
  borderColor: "black",
};
export default Blog;
