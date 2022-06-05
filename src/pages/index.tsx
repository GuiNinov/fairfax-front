import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Score from './score/Score';
import Dash from './dash/Dash';
export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dash />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}
