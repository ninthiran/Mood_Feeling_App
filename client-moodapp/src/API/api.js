import axios from "axios";

const getDataList = () => {
  return new Promise(resolve => {
    axios
      .get(`/users`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
  });
};

const postDataList = state => {
  return new Promise(resolve => {
    axios
      .post(`/post`, {
        moodRangeValue: state.moodRangeValue,
        depressed: state.FeelingArray[0].isActive,
        optimistic: state.FeelingArray[1].isActive,
        bored: state.FeelingArray[2].isActive,
        happy: state.FeelingArray[3].isActive,
        comments: `'${state.comments}'`
      })
      .then(response => {
        resolve(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};

export default { getDataList, postDataList };
