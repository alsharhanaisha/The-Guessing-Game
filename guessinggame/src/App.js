import "./App.css";
import { useState } from "react";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

function App() {
  const [guessbtn, setGuessBtn] = useState("");
  const [number, setNumber] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  // const [hints, setHints] = useState();

  const GuessButton = () => {
    setGuessBtn(number);
    winningGame();
  };

  const typeNumber = (event) => {
    setNumber(event.target.value);
  };

  const incrementAttempt = () => {
    setAttempt(attempt + 1);
  };

  const newRound = () => {
    setAttempt(0);
    setRandomNumber(getRandomNumber());
  };

  const winningGame = () => {
    incrementAttempt();
    if (number == randomNumber) {
      alert("Winner Winner! Chicken Dinner!");
      newRound();
    } else if (attempt === 4) {
      alert("LOSER! .... let's restart the game ");
      newRound();
    } else {
      alert(`WRONG! only ${4 - attempt} attempts left`);
    }
  };

  // const getHints = () => {
  //   //retreive randomNumber
  //   let hintNumbers = [randomNumber];
  //   hintNumbers.push(getRandomNumber());

  //   //display an array of hintNumbers that takes in randomNumber as the first element
  //   //getRandomNumber that takes 5 digits less than the randomNumber and 5 digits less than
  // };

  return (
    <div className="App">
      <header className="titleheader">
        <h1>Aisha's Guessing Game</h1>
      </header>
      <input
        className="inputholder"
        placeholder="Guess any number between 0 - 100"
        type="number"
        onChange={(event) => typeNumber(event)}
      />
      <button onClick={GuessButton} className="submit-button">
        Submit Your Guess
      </button>
      <button className="hint-button">Hint ?</button>
    </div>
  );
}

export default App;
