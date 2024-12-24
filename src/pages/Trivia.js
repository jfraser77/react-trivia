import { useState, useEffect } from "react";
import AnswerButton from "../components/AnswerButton";

const Trivia = ({ questions }) => {
  const [question, setQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);

  const handleClick = () => {};

  return (
    <>
      <div style={{ border: "solid", borderRadius: "12px", padding: "12px" }}>
        <div>
          <h1>Trivia Game</h1>
        </div>
        <div>
          <h3>{question.question}</h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AnswerButton answer={question.incorrect_answers[2]} />
          <AnswerButton answer={question.incorrect_answers[1]} />
          <AnswerButton answer={question.correct_answer} />
          <AnswerButton answer={question.incorrect_answers[0]} />
        </div>
        <div>
          <button
            style={{
              padding: "5px",
              margin: "5px",
              borderRadius: "6px",
              width: "10%",
            }}
          >
            Back
          </button>
          <button
            style={{
              padding: "5px",
              margin: "5px",
              borderRadius: "6px",
              width: "10%",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Trivia;
