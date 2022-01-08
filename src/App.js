import React from 'react';
import './App.css';
import { Routes, Route }  from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
      <Route path="/" elelment={<Home/>}/>
    </Routes>
    </React.Fragment>
    
  );
};

export default App;