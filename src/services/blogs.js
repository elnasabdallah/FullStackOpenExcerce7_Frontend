import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newBlog) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const request = await axios.post(baseUrl, newBlog, config);
  return request.data;
};
const put = async (id, blog) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = await axios.put(`/api/blogs/${id}`, blog, config);
  return request.data;
};
const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const remove = async (id) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const result = await axios.delete(`/api/blogs/${id}`, config);
  return result;
};
export default { getAll, setToken, create, put, remove };
