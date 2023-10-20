import { useState } from "react";

import PropTypes from "prop-types";
import Timer from "./Timer";
const Survey = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIDX] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answerTimer, setAnswerTimer] = useState(true);

  const { question, choices } = questions[currentQuestion];
  const onAnswerClick = (answer, index) => {
    setAnswerIDX(index);
  };
  console.log(question.length, "aw");

  const onClickNext = () => {
    setAnswerIDX(null);
    setAnswerTimer(false);
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setAnswerTimer(true);
    });
  };

  const handleTimeUp = () => {
    onClickNext(false);
  };
  return (
    <div className="flex justify-center content-center pt-[100px]">
      {/* <p className="text-white text-4xl font-bold">
        Please fill in this survey form
      </p> */}
      {!showResult ? (
        <div className="flex my-10 flex md:w-[700px] w-[320px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
          {answerTimer && <Timer duration={10} onTimeUp={handleTimeUp} />}
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
            <span>Question {currentQuestion + 1}</span>
            <span>/{questions.length}</span>
          </div>
          <div className=" px-5 pb-5">
            <p className="text-xl font-medium py-[40px]">{question}</p>
            <div className="text-sm">
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={
                      answerIdx === index
                        ? "bg-slate-600 rounded-md p-[11px] border-solid border-2 border-slate-950 cursor-pointer mb-[10px] text-white font-bold"
                        : "rounded-md p-[11px] border-solid border-2 border-slate-950 cursor-pointer mb-[10px]"
                    }
                    //   className="rounded-md p-[11px] border-solid border-2 border-slate-950"
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center ">
                <button
                  className="rounded-md w-[190px] my-[40px] p-[11px] border-solid border-2 border-slate-950 cursor-pointer hover:bg-slate-400  disabled:bg-slate-100 disabled:border-slate-300 disabled:cursor-not-allowed"
                  onClick={onClickNext}
                  disabled={answerIdx === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white font-bold text-5xl">
          Thank you for filling out this survey
        </div>
      )}
    </div>
  );
};

Survey.propTypes = {
  questions: PropTypes.func,
};

Survey.defaultProps = {
  questions: () => {},
};
export default Survey;
