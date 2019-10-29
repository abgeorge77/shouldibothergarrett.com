import importantWords from './importantWords';

const answerQuestions = question => {
  question = question.toLowerCase();
  let wordList = Object.keys(importantWords);
  const keyword = wordList.find((word) => question.includes(word));
  return keyword ? importantWords[keyword].answer : null;
};

export default answerQuestions;
