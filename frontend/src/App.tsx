import React from 'react';

import './App.css';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <div className='w-full h-screen bg-primary-blue text-white border border-black'>
       <AllRoutes />
      </div>
    </div>
  );
}

export default App;
