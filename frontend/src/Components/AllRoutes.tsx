import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';



const AllRoutes:React.FC = ()  => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path ="/game" element={<GamePage/>}/>
    </Routes>
  )
}

export default AllRoutes;