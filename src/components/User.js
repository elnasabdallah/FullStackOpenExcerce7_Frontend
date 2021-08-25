import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../redux/actions/userAction";
import { useSelector } from "react-redux";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  if (!userDetails) {
    return null;
  }

  return (
    <div>
      <h1>{userDetails.name}</h1>

      <h3>added blogs</h3>
      <ul>
        {userDetails.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
