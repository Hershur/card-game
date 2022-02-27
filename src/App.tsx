import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DealHand } from 'views/DealHand/DealHand';
import { Loser } from 'views/Loser/Loser';
import { Winner } from 'views/Winner/Winner';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DealHand />} />
        <Route path="/lose" element={<Loser />} />
        <Route path="/win" element={<Winner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
