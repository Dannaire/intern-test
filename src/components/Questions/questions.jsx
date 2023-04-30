// Import useState and useEffect hooks from React
import { useState,useEffect } from "react";

// Import Countdown component and other hooks from React
import Countdown from "react-countdown";
import { useNavigate, useParams } from "react-router-dom";

// Import matchSorter function from match-sorter library
import { matchSorter } from "match-sorter";

// Define QuestionsComps component
const QuestionsComps = () => {
  // Get navigate and id from useNavigate and useParams hooks
  const navigate = useNavigate();
  let id = useParams();

  // Set jumlahjawaban to the length of localStorage "answer" array
  let jumlahjawaban = localStorage.getItem("answer") === null ? 0 : localStorage.getItem("answer").split(",");

  // Set startTime to the time when the component is mounted or to the value saved in localStorage
  const [startTime] = useState(parseInt(localStorage.getItem("startTime")) || Date.now());

  // Set remainingTime to the time left before the timer ends or to the value saved in localStorage
  const [remainingTime] = useState(parseInt(localStorage.getItem("remainingTime")) || 300000);

  // Define handleAnswer function to handle the user's answer
  const handleAnswer = (e) => {
    // If "answer" is not saved in localStorage, set it to an empty string
    if (localStorage.getItem("answer") === null) {
      localStorage.setItem("answer", "");
    }

    // Split the "answer" string in localStorage into an array and add the user's answer
    let arr = localStorage.getItem("answer").split(",");
    arr.push(e.target.value);

    // Save the updated "answer" array and the next question ID in localStorage
    localStorage.setItem("answer", arr);
    localStorage.setItem("id", parseInt(id.id) + 1);

    // Get the correct answer(s) from the "soal" array in localStorage and check if the user's answer matches
    const getAnswer = JSON.parse(localStorage.getItem("soal")).map((res) => {
      return res.correct_answer;
    });
    if (matchSorter(getAnswer, e.target.value).length > 0) {
      // If the user's answer matches the correct answer, add 20 points to the "nilai" in localStorage
      const nilai = parseInt(localStorage.getItem("nilai")) + 20;
      localStorage.setItem("nilai", nilai);
    }
    if (parseInt(localStorage.getItem("id")) > 5) {
      // If the user has answered all questions, remove all saved data and navigate to the result page
      let removedItems = ["dataSoal", "soal", "timer", "answer"];
      removedItems.forEach((element) => {
        localStorage.removeItem(element);
      });
      localStorage.setItem("finished", true);
      navigate("/pages");
    }
  };

  // Get the "soal" array from localStorage and save it to the "questions" state
  const [questions] = useState(JSON.parse(localStorage.getItem("soal")));

  // Use useEffect hook to save the remaining time to localStorage every second
  useEffect(() => {
    const timerId = setInterval(() => {
      localStorage.setItem("remainingTime", remainingTime - (Date.now() - startTime));
    }, 1000);
    return () => clearInterval(timerId);
  }, [startTime, remainingTime]);

  // Define the renderer function for the Countdown component
  const renderer = ({ minutes, seconds }) => {
    // When the timer ends, reset the startTime and remainingTime in localStorage and navigate to the result page
    if (minutes === 0 && seconds === 0) {
      localStorage.setItem("startTime", Date.now());
      localStorage.setItem("remainingTime", 300000);
      navigate("/pages");
    }
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };
  return (
    <section className="h-full w-full flex flex-row justify-center items-center my-10">
      <div className="artboard artboard-horizontal phone-5 flex flex-col px-8 justify-around items-center rounded-xl shadow-lg drop-shadow-xl bg-stone-100">
      <Countdown date={startTime + remainingTime} renderer={renderer} className="self-start" />
        <div className="questions-anwer-option">
          <div>{questions[parseInt(id.id) - 1].question}</div>
          {parseInt(id.id) > 4 ? (
            <div className="answer-option flex flex-row gap-x-4 justify-center mt-5 ">
              {questions[parseInt(id.id) - 1].incorrect_answers.map((res, idx) => {
                return (
                  <button value={res} name={`${idx}`} onClick={handleAnswer} className="bg-red-600 px-4 py-2 rounded-xl max-w-xs text-white">
                    {res}
                  </button>
                );
              })}
              <button onClick={handleAnswer} name={`jwb-${4}`} className="bg-red-600 px-4 py-2 rounded-xl max-w-xs text-white" value={questions[parseInt(id.id) - 1].correct_answer}>
                {questions[parseInt(id.id) - 1].correct_answer}
              </button>
            </div>
          ) : (
            <div className="answer-option flex flex-row gap-x-4 justify-center mt-5">
              {questions[parseInt(id.id) - 1].incorrect_answers.map((res, idx) => {
                return (
                  <a href={"/questions/" + (parseInt(id.id) + 1)}>
                    <button value={res} name={`${idx}`} onClick={handleAnswer} className="bg-red-600 px-4 py-2 rounded-xl max-w-xs text-white">
                      {res}
                    </button>
                  </a>
                );
              })}
              <a href={"/questions/" + (parseInt(id.id) + 1)}>
                <button onClick={handleAnswer} name={`jwb-${4}`} className="bg-red-600 px-4 py-2 rounded-xl max-w-xs text-white" value={questions[parseInt(id.id) - 1].correct_answer}>
                  {questions[parseInt(id.id) - 1].correct_answer}
                </button>
              </a>
            </div>
          )}
        </div>
        <div className="info flex flex-row gap-x-10">
          <p>{localStorage.getItem("answer") === null ? 0 : jumlahjawaban.length - 1} Terjawab</p>
          <p>Nilai = {localStorage.getItem("nilai")}</p>
        </div>
      </div>
    </section>
  );
};

export default QuestionsComps;