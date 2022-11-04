import React from 'react';
import Home from './Pages/Home';
import CalculatorPage from './Pages/CalculatorPage';
import Quote from './Pages/Quote';
import Nav from './Pages/Nav';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <Nav />
    <Routes className="appContainer">
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
