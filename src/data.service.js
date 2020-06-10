const { fetchData } = require("./http");

const loadTitle = () => {
  return fetchData().then((response) => response.title);
};

const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};

exports.loadTitle = loadTitle;
