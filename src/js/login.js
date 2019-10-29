import code from './acceptedCode';

let inputedPassword = '';

export const login = password => {
  inputedPassword = password;
};

export const checkLogin = () => inputedPassword === code;
