import { Question, Answer } from './constants';


export const randomNum = (level: number): Question => {
    const Num1 = Math.ceil(Math.random() * 10 ** level);
    const Num2 = Math.ceil(Math.random() * 10 ** level);
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    return { Num1, Num2, operator };
  };

  export const options = (correctAnswer: number): Answer[] => {
    const answers: Answer[] = [
      { value: correctAnswer, isCorrect: true },
      { value: correctAnswer + Math.ceil(Math.random() * 5), isCorrect: false },
      { value: correctAnswer - Math.ceil(Math.random() * 5), isCorrect: false },
    ];
    return shuffle(answers);
  };

  export const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  export const getCorrectAnswer = (q: Question) => {
    switch (q.operator) {
      case '+':
        return q.Num1 + q.Num2;
      case '-':
        return q.Num1 - q.Num2;
      case '*':
        return q.Num1 * q.Num2;
      case '/':
        return q.Num1 / q.Num2;
      default:
        return 0;
    }
  };