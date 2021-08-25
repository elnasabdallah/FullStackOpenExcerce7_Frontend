import { ADD_COMMENT, FETCH_BLOG, FETCH_BLOGS } from "../types";
const initialState = {
  blogs: [],
  blog: null,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return { ...state, blogs: action.payload };
    case FETCH_BLOG:
      return { ...state, blog: action.payload };
    case ADD_COMMENT: {
      const { blog } = state;

      blog.comments = blog.comments.concat(action.payload);

      return { ...state, blog: blog };
    }

    default:
      return state;
  }
};
export default blogsReducer;
