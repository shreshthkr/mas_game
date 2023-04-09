import React, { useState, useEffect } from 'react';
import {randomNum, options, getCorrectAnswer, shuffle} from "../api"
import { Question, Answer } from '../constants';
import "./GamePage.css"

import { useNavigate } from 'react-router-dom';

const GamePage = () => {
    const [level, setLevel] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [question, setQuestion] = useState<Question>(randomNum(level));
    const [timer, setTimer] = useState<number>(10)

    const navigate=useNavigate()

    const [answers, setAnswers] = useState<Answer[]>(options(getCorrectAnswer(question)));
  
    const handleAnswerClick = (selectedAnswer: Answer) => {
      const correctAnswer = getCorrectAnswer(question);
      if (selectedAnswer.isCorrect) {
        setScore(score + level);
        setTimer(10);
        if (score + level === 10) {
            // clearInterval(id);
            
          setLevel(level + 1);
        }
        
      } else {
        alert(`Game Over. Your final score is ${score}`);
        window.location.reload();
      }
      const newQuestion = randomNum(level);
      const newAnswers = options(getCorrectAnswer(newQuestion));
      setQuestion(newQuestion);
      setAnswers(newAnswers);
    };
  
    useEffect(() => {
      let id  = setInterval(() => {
          setTimer((prevTime) => prevTime - 1);
        }, 1000);
      
        if (timer === 0) {
          clearInterval(id);
          alert("Game over");
          window.location.reload();
        }
      
        return () => clearInterval(id);
      }, [timer]);


const handleReset = () => {
    window.location.reload();
}

  return (
    <>
    <div className='w-full h-full bg-white full'>
      <div className=' p-3 rounded-lg'><button onClick={()=>navigate('/')} style={{display:"flex",alignItems:"flex-start" ,margin:"35px 30px",marginTop:"25px",backgroundColor:"blue",borderRadius:"5px",padding:"5px"}}>Home</button> </div>
      <h1 className='animate-words'>Dmas Game</h1>
      <h2 className="text-black">Level {level}</h2>
      <div className="w-200 flex flex-col justify-evenly">
      <div>
      <div className="w-50 h-400 m-auto flex items-center justify-center gap-20">
  <div className="flex items-center justify-evenly gap-15 h-full w-96">
    <div className="border-2 border-gray-300 shadow-lg gap-15 rounded-lg p-4 text-center flex items-center justify-center w-1/3 h-full ml-4 hover:bg-blue-500 ">
      <div className="text-black font-bold text-2xl text-center leading-7 hover:text-white "> {question.Num1} </div>
    </div>
    <div className="border-2 border-gray-300 shadow-lg rounded-lg p-4 text-center flex items-center justify-center w-1/3 h-full ml-4 hover:bg-blue-500">
      <div className="text-black font-bold text-2xl text-center leading-7 hover:text-white"> {question.operator} </div>
    </div>
    <div className="border-2 border-gray-300 shadow-lg rounded-lg p-4 text-center flex items-center justify-center w-1/3 h-full ml-4 hover:bg-blue-500">
      <div className="text-black font-bold text-2xl text-center leading-7 hover:text-white"> {question.Num2} </div>
    </div>
  </div>
</div>

        <div className="w-50 h-400 m-auto flex items-center justify-center gap-20 mt-20">
          {answers.map((a) => (
            <div key={a.value}  className="border-2 border-gray-300 shadow-lg rounded-lg p-4 text-center flex items-center justify-center w-auto h-full ml-4 hover:bg-blue-500 cursor-pointer" 
            onClick={() => handleAnswerClick(a)}>
              <p className="text-black font-bold text-md text-center leading-7 hover:text-white">{Math.floor(a.value)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white bg-blue-500 rounded-md p-2 mt-20 mx-auto w-300">Score: {score}</div>
      <div className="text-white bg-blue-500 rounded-md p-2 mt-20 mx-auto w-300">{`Time left: ${timer}s`}</div>
      <div className="text-white bg-blue-500 rounded-md px-5 py-3 mt-5 mx-auto w-300 cursor-pointer" onClick={handleReset }>Reset</div>
    </div>
    </div>
      </>
  )
}

export default GamePage;