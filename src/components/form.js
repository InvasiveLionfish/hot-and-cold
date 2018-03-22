import React from 'react'

import './form.css';
import Output from './output';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userGuess: 0,
      computerGuess: Math.floor(Math.random() * 100),
      result: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.giveClue = this.giveClue.bind(this);
  }

  setUserGuess(userGuess) {
    this.setState({
      userGuess
    })
  }

  handleChange(event) {
    this.setState({userGuess: event.target.value});
  }

  handleSubmit(event) {
    alert('Your guess is: ' + this.state.userGuess);
    event.preventDefault();
  }

  giveClue() {
    let guess = parseInt(this.state.userGuess)
    const difference = Math.abs(guess - this.state.computerGuess)

    let result;
    if (difference >= 10) {
      result = 'Cold!'
    } else if (difference < 10) {
      result = 'Hot!'
    } else {
      result = 'Correct!'
    }

    this.setState({
      result
    })
  }

  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <h1>Guess the Number</h1>
           <div>
             <label htmlFor="userGuess">Guess:</label>
             <input
               type="number"
               id="userGuess"
               min={0}
               max={100}
               value={this.state.userGuess}
               onChange={this.handleChange}
             />
           </div>
           <div className="button">
             <button type="submit" onClick={this.giveClue}>Submit</button>
           </div>
           { this.state.result && <Output id="user-guess" label="Submitted Guess: " value={this.state.result} /> }
       </form>
     );
  }

}
