// This function fetches data from the Open Trivia Database API and stores it in local storage
import axios from "axios";

export const getDataFromApi = () => {
  axios
    .get("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple")
    .then((result) => {
      // Store the fetched data in local storage
      localStorage.setItem("dataSoal", JSON.stringify(result.data.results));
      return result.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
};
// Call the function to fetch data when the module is loaded
getDataFromApi();
