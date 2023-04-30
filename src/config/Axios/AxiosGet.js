import axios from "axios";

export const getDataFromApi = () => {
  axios
    .get("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple")
    .then((result) => {
      localStorage.setItem("dataSoal", JSON.stringify(result.data.results));
      return result.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};
getDataFromApi();
