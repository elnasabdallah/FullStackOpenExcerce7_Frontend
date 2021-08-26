import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const { users } = useSelector((state) => state.user);
  if (!users) return null;
  return (
    <div className="d-flex justify-content-center ">
      <div>
        <h3 className="text-center m-3">Users</h3>
        <table className="table">
          <thead>
            <tr>
              <th>user</th>
              <th>Blogs created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.blogs.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
