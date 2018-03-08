import React from 'react'

import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userGuess: 0,
      computerGuess: Math.floor(Math.random() * 100),
      result: 0
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
    // alert('Guess was submitted: ' + this.state.userGuess);
    event.preventDefault();
  }

  giveClue(result) {
    console.log('Form was submitted');
    let result = ((this.state.computerGuess - this.state.userGuess) / this.state.computerGuess) * 100;
    if (result <= 10) {
      alert('You are hot')
    } else {
      alert('You are cold')
    }
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
             <button type="submit" onClick={this.giveClue(this.state.result)}>Submit</button>
           </div>
       </form>
     );
  }

}

// default function Form(props) {
//   let userGuess, message;
//
//   const computerGuess = Math.floor(Math.random() * 100);
//   console.log(computerGuess);
//
//   const giveClue = (userGuess, computerGuess) => {
//     let result = ((computerGuess - userGuess) / computerGuess) * 100;
//     console.log('result is', computerGuess);
//     if (result <= 10) {
//       alert('You are hot');
//     } else {
//       alert('You are cold');
//     }
//   }
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("user submission", userGuess.value)
//   }
//
//
// }
