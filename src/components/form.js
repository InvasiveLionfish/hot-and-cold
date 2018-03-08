import React from 'react'

import './form.css';

export default function Form(props) {
  let userGuess, message;

  const computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);

  const giveClue = (userGuess, computerGuess) => {
    let result = ((computerGuess - userGuess) / computerGuess) * 100;
    console.log('result is', computerGuess);
    if (result <= 10) {
      alert('You are hot');
    } else {
      alert('You are cold');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user submission", userGuess.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Guess the Number</h1>
        <div>
          <label htmlFor="userGuess">Guess:</label>
          <input type="number"
            id="userGuess"
            min={0}
            max={100}
            ref={guess => userGuess = guess}
          />
        </div>
        <div className="button">
          <button type="submit" onClick={giveClue}>Submit</button>
        </div>
    </form>
  );
}
