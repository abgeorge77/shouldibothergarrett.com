import React from 'react';
import answerQuestions from './js/answerQuestions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialQuestion: '',
      initialAnswer: '',
    };
  }

  setInitialQuestion = e => {
    this.setState({ initialQuestion: e.target.value });
  }

  askInitialQuestion = () => {
    let answer = answerQuestions(this.state.initialQuestion);
    this.setState({ initialAnswer: answer || 'What? '});
  }

  render() {
    return (
      <div className='app'>
        <h1>Should I Bother Garrett?</h1>
        <div className='app__initial-question-area'>
          <textarea
            className='app__textarea'
            placeholder="Please type your question for Garrett here..."
            value={this.state.initialQuestion}
            onChange={this.setInitialQuestion}
          />
          <button className='app__button' onClick={() => this.askInitialQuestion()}>
            Should I?
          </button>
          <h2>{this.state.initialAnswer}</h2>
        </div>
      </div>
    );
  }
}

export default App;
