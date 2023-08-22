import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Login, Article } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/article' element={<Article/>}/>
      </Routes>
    </Router>
  );
}

export default App;
