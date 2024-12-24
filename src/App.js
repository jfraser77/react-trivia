import React from "react";
import "./App.css";
import Trivia from "./pages/Trivia";
import { trivia } from "./components/triviaQuestions";

// const strings = ['Home', 'Shop', 'About Me'];

// const listItems = strings.map(string => <li>{string}</li>);

// <ul>{listItems}</ul>

// export default function EditProfile() {
//   const [profile, setProfile] = useState({});

//   const handleChange = ({ target }) => {
//     const {name, value} = target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value
//       }))
//     };

// export default function QuizNavBar({ questions }) {
//   const [questionIndex, setQuestionIndex] = useState(0);

//   // define event handlers
//   const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
//   const goToNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);

//   // determine if on the first question or not
//   const onFirstQuestion = questionIndex === 0;
//   const onLastQuestion = questionIndex === questions.length - 1;

//   return (
//     <nav>
//       <span>Question #{questionIndex + 1}</span>
//       <div>
//         <button onClick={goBack} disabled={onFirstQuestion}>
//           Go Back
//         </button>
//         <button onClick={goToNext} disabled={onLastQuestion}>
//           Next Question
//         </button>
//       </div>
//     </nav>
//   );
// }

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <Trivia questions={trivia} />
    </div>
  );
}

export default App;
