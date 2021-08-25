import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { fetchBlogs } from "./redux/actions/blogActions";
import { fetchUsers, setUser } from "./redux/actions/userAction";
import blogService from "./services/blogs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BlogView } from "./components/BlogView";
import Alert from "./components/Alert";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedlogerUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(setUser(user));
      blogService.setToken(user.token);
    }

    dispatch(fetchBlogs());
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="container">
      <Router>
        <Switch>
          <>
            <Header />
            <Alert />
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:id" component={User} />
            <Route path="/blogs/:id" component={BlogView} />
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
