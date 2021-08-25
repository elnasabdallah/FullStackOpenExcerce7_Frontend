import axios from "axios";

const baseUrl = "/api/users";

const getAll = async () => {
  const result = await axios.get(baseUrl);
  return result.data;
};
const getUser = async (id, token) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const result = await axios.get(`/api/users/${id}`, config);
  return result.data;
};
export default { getAll, getUser };
