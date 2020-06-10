const axios = require("axios");

const fetchData = () => {
  return axios.get("http://localhost:3000/posts/1").then((response) => {
    return response.data;
  });
};

exports.fetchData = fetchData;
