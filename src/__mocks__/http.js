const fetchData = () => {
  console.log("mock");

  return Promise.resolve({ title: "json-server" });
};

exports.fetchData = fetchData;
