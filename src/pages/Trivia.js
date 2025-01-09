import { useState, useEffect, useRef } from "react";
import AnswerButton from "../components/AnswerButton";

// Function to apply the Fisher-Yates Shuffle
function randomize(array) {
  // Iterate over the array in reverse order
  for (let i = array.length - 1; i > 0; i--) {
    // Generate Random Index
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Trivia = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(questions[currentQuestion]);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const [buttonColors, setButtonColors] = useState(
    Array(questions[0].incorrect_answers.length + 1).fill("white")
  );
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [lockScore, setLockScore] = useState(
    Array(questions.length).fill(false)
  );

  useEffect(() => {
    // Update question and reset button colors when currentQuestion changes
    setQuestion(questions[currentQuestion]);
    setButtonColors(
      Array(questions[currentQuestion].incorrect_answers.length + 1).fill(
        "white"
      )
    );
    setComplete(false); // Reset complete state for each question

    // Randomize answers only when the question changes
    const combinedAnswers = [
      questions[currentQuestion].correct_answer,
      ...questions[currentQuestion].incorrect_answers,
    ];
    setShuffledAnswers(randomize([...combinedAnswers])); // Create a new randomized array
  }, [currentQuestion, questions]);

  function handleBack() {
    if (currentQuestion > 0) setCurrentQuestion((s) => s - 1);
  }

  function handleNext() {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
  }

  const handleAnswer = (buttonIndex, buttonAnswer) => {
    setButtonColors((prevColors) =>
      prevColors.map((color, index) =>
        index === buttonIndex
          ? color === "white"
            ? "DeepSkyBlue"
            : "white"
          : color
      )
    );

    if (!lockScore[currentQuestion]) {
      if (buttonAnswer === question.correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }

      setLockScore((prevLockScore) => {
        const updatedLockScore = [...prevLockScore];
        updatedLockScore[currentQuestion] = true; // Lock the score for the current question
        return updatedLockScore;
      });
    }

    setComplete(true);
  };

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
          {shuffledAnswers.map((answer, i) => (
            <AnswerButton
              key={i}
              answer={answer}
              score={score}
              complete={complete}
              handleAnswer={() => handleAnswer(i, answer)}
              bgColor={{ backgroundColor: buttonColors[i] }}
            />
          ))}
        </div>
        <div>
          <button
            onClick={handleBack}
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
            onClick={handleNext}
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

        {`Current Score: ${score}`}
      </div>
    </>
  );
};

export default Trivia;
