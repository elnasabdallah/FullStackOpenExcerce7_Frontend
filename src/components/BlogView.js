import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchBlog, updateBlog } from "./../redux/actions/blogActions";
import Comment from "./Comment";

export const BlogView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { blog } = useSelector((state) => state.blogs);

  const onLike = (blog) => {
    const updatedBlog = {
      title: blog.title,
      author: blog.author,
      likes: blog.likes + 1,
      url: blog.url,
      user: blog.user.id,
    };

    dispatch(updateBlog(blog.id, updatedBlog));
  };

  //   const handleDelete = () => {
  //     const confirm = window.confirm(
  //       `remove blog ${blog.title} by ${blog.author}`
  //     );
  //     if (confirm) {
  //       dispatch(deleteBlog(blog.id));
  //     }
  //   };
  useEffect(() => {
    dispatch(fetchBlog(id));
  }, []);

  if (!blog) {
    return null;
  }

  return (
    <div>
      <h1 className="title">{blog.title}</h1>
      <br />
      <span className="url">
        {" "}
        <Link to={`${blog.url}`}>{blog.url}</Link>
      </span>
      <br />
      Likes <span className="likes">{blog.likes}</span>{" "}
      <button onClick={() => onLike(blog)}>like</button>
      <br />
      {/* <button style={btn} onClick={() => handleDelete(blog)}>
        remove
      </button> */}
      <br />
      added <span className="author"> {blog.author}</span>
      <Comment blog={blog} />
    </div>
  );
};

// const btn = {
//   background: "blue",
// };
