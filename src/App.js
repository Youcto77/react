import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quizz from './pages/Quizz';
import Home from './pages/Home'
import Erreur from './pages/Erreur';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizz' element={<Quizz />} />
        <Route path='*' element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;