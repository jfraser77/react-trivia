const AnswerButton = ({ answer }) => {
  return (
    <>
      <button
        style={{
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

// function TriviaButton({
//   triviaQuestion,
//   buttonText,
//   toggleColor,
//   initialColor,
// }) {
//   const [bgColor, setBgColor] = useState(initialColor);

//   const handleClick = () => {
//     // Toggle initial color to toggle color
//     setBgColor((prevColor) =>
//       prevColor === initialColor ? toggleColor : initialColor
//     );
//   };

//   return (
//     <>
//       <div>
//         <h3>{triviaQuestion}</h3>
//       </div>
//       <div>
//         <button
//           onClick={handleClick}
//           style={{
//             backgroundColor: bgColor,
//             color: "black",
//             border: "solid",
//             padding: "10px 20px",
//             cursor: "pointer",
//             fontSize: "16px",
//             margin: "10px",
//           }}
//         >
//           {buttonText}
//         </button>
//       </div>
//     </>
//   );
// }
