import React, { useState } from "react";
import "./App.css";

function TriviaButton({
  triviaQuestion,
  buttonText,
  toggleColor,
  initialColor,
}) {
  const [bgColor, setBgColor] = useState(initialColor);

  const handleClick = () => {
    // Toggle initial color to toggle color
    setBgColor((prevColor) =>
      prevColor === initialColor ? toggleColor : initialColor
    );
  };

  return (
    <>
      <div>
        <h3>{triviaQuestion}</h3>
      </div>
      <div>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: bgColor,
            color: "black",
            border: "solid",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "16px",
            margin: "10px",
          }}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <div>
        <h1>Trivia Game</h1>
      </div>
      <div>
        <TriviaButton
          triviaQuestion="1. Who was the voice of Smurfette in the 2013 movie 'The Smurfs 2'?"
          buttonText="Jack Black"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Katy Perry"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Dwayne The Rock Johnson"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="2. What is the first name of the FBI agent who goes up against Hannibal Lecter?"
          buttonText="Jose"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Smith"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Clarice"
          toggleColor="green"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="3. What is the first name of the FBI agent who goes up against Hannibal Lecter?"
          buttonText="Jose"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Smith"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Clarice"
          toggleColor="green"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="4. In the 2003 film 'Daredevil', which actor portrayed the superhero?"
          buttonText="Jesus"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Ben Affleck"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Tom Cruise"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="5. President Snow is a villain in which series of movies?"
          buttonText="Hunger Games"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Wizard of Oz"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Armagedon"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="6. Which of these is NOT a Marvel superhero?"
          buttonText="Spiderman"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Batman"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Doctor Strange"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="7. Which of these is NOT a Marvel superhero?"
          buttonText="Spiderman"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Batman"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Doctor Strange"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="8. How did Julius Caesar die?"
          buttonText="Allergies"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Murder"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Old Age"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="9. Who directed the first Jurassic Park film?"
          buttonText="Tim Burton"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Snyder"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText=" Steven Spielberg"
          toggleColor="green"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="10. Who has been following Sam and Frodo?"
          buttonText="The Riders"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Gollum"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Saromon"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="11. Who was the Greek God of the Sun?"
          buttonText="Helios"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Hephaestus"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Athena"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="12. Who was the wife of Zeus in Greek Myth?"
          buttonText="Athena"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Hera"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Diana"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="13. Who was the Norse god of thunder?"
          buttonText="Odin"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Thor"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Loki"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="14. How many US No.1 hits did Michael Jackson's 1987 album 'Bad' produce?"
          buttonText="5"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="7"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="2"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="15. How many US No.1 hits did Michael Jackson's 1987 album 'Bad' produce?"
          buttonText="5"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="7"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="2"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="16. In what year did the United States declare its independence from Great Britain?"
          buttonText="1812"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="1776"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="1999"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="17. Who was the Prime Minister of the United Kingdom during World War II?"
          buttonText="Winston Churchill"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Thomas Blake"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Lord Chamberlain"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="18.  Which U S president issued the Emancipation Proclamation?"
          buttonText="Thomas Edison"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Abraham Lincoln"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="George Washington"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="19.  What is the name of the character played by Geena Davis in the movie 'Thelma & Louise' (1991)?"
          buttonText="Johny"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Thelma"
          toggleColor="green"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Patrick Swayze"
          toggleColor="red"
          initialColor="white"
        />
      </div>
      <div>
        <TriviaButton
          triviaQuestion="20.  The ancient Romans built 'aqueducts' to carry what?"
          buttonText="People"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Gold"
          toggleColor="red"
          initialColor="white"
        />
        <TriviaButton
          triviaQuestion=""
          buttonText="Water"
          toggleColor="green"
          initialColor="white"
        />
      </div>
    </div>
  );
}

export default App;
