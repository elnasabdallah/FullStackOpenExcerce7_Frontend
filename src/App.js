import React, { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import Login from "./components/Login";
import loginServices from "./services/login";
import BlogForm from "./components/BlogForm";
import Alert from "./components/Alert";
import "./index.css";
import Toggleable from "./components/Toggleable";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);
  const blogFormRef = useRef();

  /*****handle user login********** */
  const handleLogin = async loginDetails => {
    try {
      const user = await loginServices.login(loginDetails);
      setUser(user);
      window.localStorage.setItem("loggedlogerUser", JSON.stringify(user));
      blogService.setToken(user.token);
    } catch (error) {
      setAlert({ type: "error", msg: "Invalid username or password" });
    }

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  /***function to update a blog post****/
  const updateBlog = async (id, updatedBlog) => {
    try {
      const result = await blogService.put(id, updatedBlog);
      const updatedBlogs = blogs.map(blog =>
        blog.id === result.id ? result : blog
      );
      updatedBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      setBlogs(updatedBlogs);
    } catch (error) {
      setAlert({ type: "error", msg: error.message });
    }
  };

  /***logout function***/
  const logOut = () => {
    setUser(null);
    window.localStorage.clear();
  };

  /**Create a new blog */
  const addBlog = async newBlog => {
    try {
      const addedBlog = await blogService.create(newBlog);
      // blogFormRef.current.toggleVisibility();
      setAlert({
        type: "success",
        msg: `a new blog ${addedBlog.title} by ${addedBlog.author} added`,
      });

      const newBlogs = [...blogs, addedBlog];
      newBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      setBlogs(newBlogs);
    } catch (error) {
      setAlert({ type: "error", msg: error.message });
    }

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const deleteBlog = async id => {
    try {
      const result = await blogService.remove(id);
      console.log(result);
      const newBlogs = blogs.filter(blog => blog.id !== id);
      newBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      setBlogs(newBlogs);
      setAlert({
        type: "success",
        msg: `blog removed successfully`,
      });
    } catch (error) {
      setAlert({ type: "error", msg: error.message });
    }

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedlogerUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      blogService.setToken(user.token);
    }
    async function fetchedData() {
      const fetchedBlogs = await blogService.getAll();
      fetchedBlogs.sort((a, b) => (a.likes > b.likes ? -1 : 1));
      setBlogs(fetchedBlogs);
    }

    fetchedData();
  }, []);

  if (user === null) {
    return (
      <Toggleable label='login'>
        <Login handleLogin={handleLogin} alert={alert} />
      </Toggleable>
    );
  } else {
    return (
      <div>
        <h2>blogs</h2>
        {alert && <Alert alert={alert} />}
        <p>
          {user.username} logged In <button onClick={logOut}>logout</button>
        </p>
        <Toggleable label='create new blog' ref={blogFormRef}>
          <BlogForm addBlog={addBlog} />
        </Toggleable>
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            updateBlog={updateBlog}
            deleteBlog={deleteBlog}
          />
        ))}
      </div>
    );
  }
};

export default App;
