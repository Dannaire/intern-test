import { useState,useEffect } from "react";
import Countdown from "react-countdown";
import {  useNavigate, useParams } from "react-router-dom";
import { matchSorter } from "match-sorter";

const QuestionsComps = () => {
  const navigate = useNavigate();
  let id = useParams();
  let jumlahjawaban = localStorage.getItem("answer") === null ? 0 : localStorage.getItem("answer").split(",");
  const [startTime] = useState(parseInt(localStorage.getItem("startTime")) || Date.now());
  const [remainingTime] = useState(parseInt(localStorage.getItem("remainingTime")) || 300000);
  const handleAnswer = (e) => {
    if (localStorage.getItem("answer") === null) {
      localStorage.setItem("answer", "");
    }
    let arr = localStorage.getItem("answer").split(",");
    arr.push(e.target.value);
    console.log(arr);
    localStorage.setItem("answer", arr);
    localStorage.setItem("id", parseInt(id.id) + 1);
    const getAnswer = JSON.parse(localStorage.getItem("soal")).map((res) => {
      return res.correct_answer;
    });
    if (matchSorter(getAnswer, e.target.value).length > 0) {
      const nilai = parseInt(localStorage.getItem("nilai")) + 20;
      localStorage.setItem("nilai", nilai);
    }
    if (parseInt(localStorage.getItem("id")) > 5) {
      let removedItems = ["dataSoal", "soal", "timer", "answer"];
      removedItems.forEach((element) => {
        localStorage.removeItem(element);
      });
      localStorage.setItem("finished", true);
      navigate("/pages");
    }
  };
  const [questions] = useState(JSON.parse(localStorage.getItem("soal")));

  useEffect(() => {
    // Save the remaining time to localStorage every second
    const timerId = setInterval(() => {
      localStorage.setItem("remainingTime", remainingTime - (Date.now() - startTime));
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timerId);
  }, [startTime, remainingTime]);

  const renderer = ({ minutes, seconds }) => {
    // Update the start time and remaining time when the timer ends
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