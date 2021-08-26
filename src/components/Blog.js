import PropTypes from "prop-types";
// import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  return (
    <div className="list-group-item">
      <Link to={`/blogs/${blog.id}`}>
        {blog.title} {blog.author}
      </Link>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
