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
    <div className="d-flex justify-content-center">
      <div>
        <h2 className="text-center m-5">{userDetails.name}</h2>

        <h3 className="text-center">Added blogs</h3>
        <ul>
          {userDetails.blogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
