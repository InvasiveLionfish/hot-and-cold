import React from 'react'

import './form.css';

export default function Form(props) {
  let userGuess, message;

  const computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);

  const giveClue = (user_guess, computerGuess) => {
    // console.log(user_guess);
    if (userGuess === computerGuess) {
      alert('You are correct')
    }
    // +=10 from computerGuess, alert hot
    // else cold
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
