import React, { useState } from 'react';

interface Question {
  firstNumber: number;
  secondNumber: number;
  operator: string;
}

interface Answer {
  value: number;
  isCorrect: boolean;
}

const generateQuestion = (level: number): Question => {
  const firstNumber = Math.ceil(Math.random() * 10 ** level);
  const secondNumber = Math.ceil(Math.random() * 10 ** level);
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return { firstNumber, secondNumber, operator };
};

const generateAnswers = (correctAnswer: number): Answer[] => {
  const answers: Answer[] = [
    { value: correctAnswer, isCorrect: true },
    { value: correctAnswer + Math.ceil(Math.random() * 5), isCorrect: false },
    { value: correctAnswer - Math.ceil(Math.random() * 5), isCorrect: false },
  ];
  return shuffle(answers);
};

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Game5: React.FC = () => {
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(generateQuestion(level));

  const getCorrectAnswer = (q: Question) => {
    switch (q.operator) {
      case '+':
        return q.firstNumber + q.secondNumber;
      case '-':
        return q.firstNumber - q.secondNumber;
      case '*':
        return q.firstNumber * q.secondNumber;
      case '/':
        return q.firstNumber / q.secondNumber;
      default:
        return 0;
    }
  };

  const [answers, setAnswers] = useState<Answer[]>(generateAnswers(getCorrectAnswer(question)));

  const handleAnswerClick = (selectedAnswer: Answer) => {
    const correctAnswer = getCorrectAnswer(question);
    if (selectedAnswer.isCorrect) {
      setScore(score + level);
      if (score + level === 10) {
        setLevel(level + 1);
      }
    } else {
      alert(`Game Over. Your final score is ${score}`);
      setLevel(1);
      setScore(0);
    }
    const newQuestion = generateQuestion(level);
    const newAnswers = generateAnswers(getCorrectAnswer(newQuestion));
    setQuestion(newQuestion);
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>Math Game</h1>
      <h2>Level {level}</h2>
      <div className="question-container">
        <div className="number-box">{question.firstNumber}</div>
        <div className="operator-box">{question.operator}</div>
        <div className="number-box">{question.secondNumber}</div>
        <div className="equal-sign">=</div>
        <div className="answer-box">
          {answers.map((a) => (
            <div key={a.value} className="option-box" onClick={() => handleAnswerClick(a)}>
              {a.value}
            </div>
          ))}
        </div>
      </div>
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default Game5;
