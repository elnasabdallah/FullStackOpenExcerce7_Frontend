import React, { useRef } from "react";
import Blog from "./Blog";

import BlogForm from "./BlogForm";

import "../index.css";
import Toggleable from "./Toggleable";
import { useSelector } from "react-redux";

const Home = () => {
  const blogFormRef = useRef();

  const {
    blogs: { blogs },
  } = useSelector((state) => state);

  return (
    <div className="container">
      <Toggleable label="create new blog" ref={blogFormRef}>
        <BlogForm />
      </Toggleable>
      <div className="d-flex justify-content-center ">
        <div className="list-group w-50">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
