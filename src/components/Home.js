import React, { useRef } from "react";
import Blog from "./Blog";

import Login from "./Login";
import BlogForm from "./BlogForm";

import "../index.css";
import Toggleable from "./Toggleable";
import { useSelector } from "react-redux";

const Home = () => {
  const blogFormRef = useRef();

  const {
    blogs: { blogs },
    user: { signedUser },
  } = useSelector((state) => state);

  if (signedUser === null) {
    return (
      <Toggleable label="login">
        <Login />
      </Toggleable>
    );
  } else {
    return (
      <div>
        <Toggleable label="create new blog" ref={blogFormRef}>
          <BlogForm />
        </Toggleable>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    );
  }
};

export default Home;
