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

export const getBlog = async (id) => {
  const result = await axios.get(`/api/blogs/${id}`);
  return result.data;
};
export const postComment = async (blogId, comment) => {
  const result = await axios.post(`/api/blogs/${blogId}/comments`, comment);
  return result.data;
};
export default { getAll, setToken, create, put, remove, getBlog, postComment };
