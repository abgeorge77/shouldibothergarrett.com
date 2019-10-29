import React from 'react';
import { login, checkLogin } from './js/login';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      incorrectPassword: false,
      attemptsRemaining: 4,
    };
  }

  submit = () => {
    login(this.state.inputText);
    const newAttempts = this.state.attemptsRemaining - 1;
    if (!checkLogin()) {
      this.setState({
        incorrectPassword: true,
        attemptsRemaining: newAttempts,
      });
    } else {
      this.props.checkLogin();
    }
  }

  setInputText = e => {
    this.setState({ inputText: e.target.value });
  }

  render() {
    return (
      <div className='login'>
        <input
          className='login__input'
          type='text'
          placeholder='Enter password here...'
          value={this.state.inputText}
          onChange={this.setInputText}
        />
        <button className='login__button' onClick={() => this.submit()}>
          Submit
        </button>
        {
          this.state.incorrectPassword ?
            <h3>Incorrect password, { this.state.attemptsRemaining } attempts remaining.</h3>
          : null
        }
      </div>
    );
  }
};

export default Login;
