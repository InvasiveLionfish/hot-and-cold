import React from 'react'

import './form.css';
import Output from './output';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userGuess: 0,
      // computerGuess: Math.floor(Math.random() * 100),
      computerGuess: 45,
      result: 'cold'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUserGuess(userGuess) {
    this.setState({
      userGuess
    })
  }

  setComputerGuess(computerGuess) {
    this.setState({
      computerGuess
    })
  }

  handleChange(event) {
    // event.preventDefault();
    this.setState({userGuess: event.target.value});
    console.log('userguess is' + this.state.userGuess);
  }

  handleSubmit(event) {
    alert('Your guess is: ' + this.state.userGuess);
    event.preventDefault();
  }

  giveClue(guess) {
    console.log('Form was submitted');
    // let guess = ((this.state.computerGuess - this.state.userGuess) / this.state.computerGuess) * 100;
    // if (guess <= 10) {
    //   alert('You are hot')
    // } else {
    //   alert('You are cold')
    // }
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
               // onChange={this.handleChange}
               onChange={this.handleChange}
             />
           </div>
           <div className="button">
             <button type="submit" onClick={this.giveClue(this.state.userGuess)}>Submit</button>
           </div>

           <Output id="user-guess" label="Submitted Guess: " value={this.state.result}
/>
       </form>
     );
  }

}
