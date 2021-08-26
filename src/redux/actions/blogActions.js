import {
  ADD_COMMENT,
  FETCH_BLOG,
  FETCH_BLOGS,
  RESET_ALERT,
  SET_ALERT,
} from "../types";
import blogService from "./../../services/blogs";

export const fetchBlogs = () => async (dispatch) => {
  const fetchedBlogs = await blogService.getAll();
  fetchedBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));

  dispatch({ type: FETCH_BLOGS, payload: fetchedBlogs });
};

export const addBlog = (newBlog) => async (dispatch, getState) => {
  const {
    blogs: { blogs },
  } = getState();
  try {
    const addedBlog = await blogService.create(newBlog);
    const alert = {
      type: "success",
      msg: `a new blog ${addedBlog.title} by ${addedBlog.author} added`,
    };

    dispatch({ type: SET_ALERT, payload: alert });

    const newBlogs = [...blogs, addedBlog];
    newBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
    dispatch({ type: FETCH_BLOGS, payload: newBlogs });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  } catch (error) {
    const alert = { type: "error", msg: error.message };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  }
};
export const updateBlog = (id, updatedBlog) => async (dispatch, getState) => {
  const {
    blogs: { blogs },
  } = getState();

  try {
    const result = await blogService.put(id, updatedBlog);
    const updatedBlogs = blogs.map((blog) =>
      blog.id === result.id ? result : blog
    );
    updatedBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));

    //fecth populated blog
    const result2 = await blogService.getBlog(id);
    dispatch({ type: FETCH_BLOGS, payload: updatedBlogs });
    dispatch({ type: FETCH_BLOG, payload: result2 });
  } catch (error) {
    const alert = { type: "error", msg: error.message };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  }
};

export const deleteBlog = (id) => async (dispatch, getState) => {
  const {
    blogs: { blogs },
  } = getState();
  try {
    await blogService.remove(id);

    const newBlogs = blogs.filter((blog) => blog.id !== id);
    newBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
    dispatch({ type: FETCH_BLOGS, payload: newBlogs });
    const alert = {
      type: "success",
      msg: `blog removed successfully`,
    };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  } catch (error) {
    const alert = { type: "error", msg: error.message };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  }
};

export const fetchBlog = (id) => async (dispatch) => {
  try {
    const blog = await blogService.getBlog(id);

    dispatch({ type: FETCH_BLOG, payload: blog });
  } catch (error) {
    const alert = { type: "error", msg: error };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  }
};

export const addComment = (blogId, comment) => async (dispatch) => {
  try {
    const commentObj = { text: comment };
    const result = await blogService.postComment(blogId, commentObj);
    dispatch({ type: ADD_COMMENT, payload: result });
  } catch (error) {
    const alert = { type: "error", msg: error };
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: RESET_ALERT });
    }, 5000);
  }
};
