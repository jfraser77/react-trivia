import { useState, useEffect } from "react";
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
  const [currentQuestion, setCurrentQuestion] = useState(0); // keeps track location in array of questions
  const [question, setQuestion] = useState(questions[currentQuestion]); // set current question to render
  const [score, setScore] = useState(0); // tracks correct answers
  const [buttonColors, setButtonColors] = useState(
    Array(questions[0].incorrect_answers.length + 1).fill("white")
  ); // tracks toggled colors
  const [shuffledAnswers, setShuffledAnswers] = useState([]); // loads correct and incorrect answers into shuffled array
  const [lockScore, setLockScore] = useState(
    Array(questions.length).fill(false)
  ); // tracks completed answer
  const [countTrue, setCountTrue] = useState(
    Array(questions.length).fill(false)
  ); // tracks once all answers have been complete
  const [finish, setFinish] = useState(false); // sets quiz to complete

  useEffect(() => {
    // Update question and reset button colors when currentQuestion changes
    setQuestion(questions[currentQuestion]);
    setButtonColors(
      Array(questions[currentQuestion].incorrect_answers.length + 1).fill(
        "white"
      )
    );

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
  // callback once button answered
  function handleAnswer(buttonIndex, buttonAnswer) {
    setButtonColors((prevColors) =>
      prevColors.map((color, index) =>
        index === buttonIndex
          ? color === "white"
            ? "DeepSkyBlue"
            : "white"
          : color
      )
    );
    //
    if (!lockScore[currentQuestion]) {
      if (buttonAnswer === question.correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
      // updates score registered into array as boolean
      setLockScore((prevLockScore) => {
        const updatedLockScore = [...prevLockScore];
        updatedLockScore[currentQuestion] = true; // Lock the score for the current question
        return updatedLockScore;
      });
      // tracks all registered answers
      setCountTrue((prevCountTrue) => {
        const updatedCountTrue = [...countTrue];
        updatedCountTrue[currentQuestion] = true;
        return updatedCountTrue;
      });
    }
  }

  function handleFinish() {
    setFinish(true);
  }

  function handleReset() {
    setCurrentQuestion(0); // Reset to the first question
    setScore(0);
    setButtonColors(
      Array(questions[0].incorrect_answers.length + 1).fill("white")
    );
    setLockScore(Array(questions.length).fill(false));
    setCountTrue(Array(questions.length).fill(false));
    setFinish(false);
  }

  return (
    <>
      <div style={{ border: "solid", borderRadius: "12px", padding: "12px" }}>
        <div>
          <h1>Trivia Game</h1>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            {question.question}
          </h3>
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
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Back
          </button>
          {countTrue.filter(Boolean).length !== questions.length ? (
            <button
              onClick={handleNext}
              style={{
                padding: "5px",
                margin: "5px",
                borderRadius: "6px",
                width: "10%",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleFinish}
              style={{
                padding: "5px",
                margin: "5px",
                borderRadius: "6px",
                width: "10%",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Finish
            </button>
          )}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >{`Trivia Question: ${currentQuestion + 1}`}</div>

        {!finish ? (
          ""
        ) : (
          <>
            <div>{`Great Job! Your Score: ${score} out of 20 questions!`}</div>
            <div>
              <button
                onClick={handleReset}
                style={{
                  padding: "5px",
                  margin: "5px",
                  borderRadius: "6px",
                  width: "10%",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Reset Game
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trivia;
