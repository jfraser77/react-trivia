const AnswerButton = ({ answer, handleAnswer, bgColor }) => {
  return (
    <>
      <button
        value={answer}
        onClick={() => handleAnswer(answer)}
        style={{
          ...bgColor,
          width: "20%",
          color: "black",
          border: "solid",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "16px",
          margin: "5px",
          borderRadius: "12px",
        }}
      >
        {answer}
      </button>
    </>
  );
};

export default AnswerButton;
