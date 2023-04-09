import React from "react";
import {useNavigate} from "react-router-dom";
import "./homePage.css"


const HomePage = () => {
    const navigate = useNavigate();

const handleClick = () => {
    navigate ("/game")
}
//container relative mx-auto h-90vh w-80vw border border-gray.400 flex justify-center items-center
  return (
    <div className="w-400 min-h-320 container mx-auto px-4 text-white mt-20">
      <div className='container'>
        <div className="flex flex-wrap justify-center">
          <div className="flex items-center justify-center w-28 h-28 rounded-full animate-scale-up-bounce hover:transform hover:scale-125 transition duration-500 ease-in-out m-4">
            <div className="flex flex-col items-center justify-evenly">
             <img src="https://www.linkpicture.com/q/1_977.png" className="rounded-md shadow-lg animate-bounce" alt="D" />
            </div>
          </div>
          <div className="flex items-center justify-center w-28 h-28  rounded-full animate-scale-up-bounce hover:transform hover:scale-125 transition duration-500 ease-in-out m-4">
            <div className="flex flex-col items-center justify-evenly">
            <img src="https://www.linkpicture.com/q/2_1301.png" className="rounded-md shadow-lg animate-bounce" alt="M" />
            </div>
          </div>
          <div className="flex items-center justify-center w-28 h-28  rounded-full animate-scale-up-bounce hover:transform hover:scale-125 transition duration-500 ease-in-out m-4">
            <div className="flex flex-col items-center justify-evenly">
              <img src="https://www.linkpicture.com/q/3_897.png" className="rounded-md shadow-lg animate-bounce" alt="A" />
            </div>
          </div>
          <div className="flex items-center justify-center w-28 h-28  rounded-full animate-scale-up-bounce hover:transform hover:scale-125 transition duration-500 ease-in-out m-4">
            <div className="flex flex-col items-center justify-evenly">
             <img src="https://www.linkpicture.com/q/4_702.png" className="rounded-md shadow-lg animate-bounce" alt="S" />
            </div>
          </div>
        </div>
      </div>
      <button className="bg-white text-black py-2 px-6 rounded-lg shadow animate-scale-up" onClick={handleClick}>Start</button>
    </div>
  );
};

export default HomePage;
