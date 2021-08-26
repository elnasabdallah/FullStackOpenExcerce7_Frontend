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
    <div className="container d-flex justify-content-center">
      <div className="w-50">
        <h3 className="title text-center m-3">{blog.title}</h3>
        <div className="mb-3">
          <span className="url">
            {" "}
            <Link to={`${blog.url}`}>{blog.url}</Link>
          </span>
        </div>
        <div className="mb-3">
          Likes <span className="likes">{blog.likes}</span>
          <button className="btn btn-success mx-3" onClick={() => onLike(blog)}>
            like
          </button>
        </div>

        {/* <button style={btn} onClick={() => handleDelete(blog)}>
        remove
      </button> */}
        <div className="mb-3">
          added by<span className="author"> {blog.author}</span>
        </div>

        <Comment blog={blog} />
      </div>
    </div>
  );
};

// const btn = {
//   background: "blue",
// };
