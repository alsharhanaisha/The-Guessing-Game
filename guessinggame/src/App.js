import "./App.css";
import { useState } from "react";

const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

function App() {
  const [guessbtn, setGuessBtn] = useState("");
  const [number, setNumber] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [round, setRound] = useState(getRandomNumber);

  const GuessButton = () => {
    setGuessBtn(number);
    incrementAttempt();
  };

  const typeNumber = (event) => {
    setNumber(event.target.value);
  };

  const incrementAttempt = () => {
    setAttempt(attempt + 1);
    if (attempt === 4) {
      alert("LOSER! .... let's restart the game ");
      newRound();
    }
  };

  const newRound = () => {
    setAttempt(0);
    setRound(getRandomNumber());
  };

  return (
    <div className="App">
      <header>Aisha's Guessing Game</header>
      <input
        className="inputholder"
        placeholder="Guess any number between 0-100"
        type="number"
        onChange={(event) => typeNumber(event)}
      />
      <button onClick={GuessButton} className="button-class">
        Submit Your Guess
      </button>
    </div>
  );
}

export default App;
