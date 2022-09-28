import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calculator from './components/Calculator/Calculator';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
