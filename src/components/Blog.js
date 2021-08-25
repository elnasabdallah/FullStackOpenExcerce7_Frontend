import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  return (
    <div style={blogStyle}>
      <Link to={`/blogs/${blog.id}`}>
        {blog.title} {blog.author}
      </Link>
    </div>
  );
};

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
  borderColor: "black",
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
