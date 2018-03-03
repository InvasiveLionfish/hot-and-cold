import React from 'react'

import './form.css';

export default function Form(props) {
  return (
    <div className="form">
      <h1>Guess the Number</h1>
        <div>
          <label htmlFor="guess">Guess:</label>
          <input type="number" id="guess" guess="user_guess"></input>
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
    </div>
  );
}
