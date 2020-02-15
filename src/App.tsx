import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home'

import { Router, Link } from "@reach/router";
import { Card } from 'antd';
import SubmitReview from './pages/SubmitReview';

const App = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>.
      <Link to="/submit">Submit Review</Link>
      <Router>
        <Home path="/" />
        <SubmitReview path="/submit" />
      </Router>
    </div>
  );
}

export default App;
