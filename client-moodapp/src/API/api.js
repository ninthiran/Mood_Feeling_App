import axios from "axios";

const getDataList = (path = "") => {
  return new Promise(resolve => {
    axios
      .get(`/`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error + `/api/getList`);
      });
  });
};

export default { getDataList };
