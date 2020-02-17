import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home'

import { Router, Link } from "@reach/router";
import { CookiesProvider } from 'react-cookie';
import { Card } from 'antd';
import SubmitReview from './pages/SubmitReview';

const App = () => {
  return (
    <CookiesProvider>
      <div className="App">
        <Link to="/">Home</Link>.
        <Link to="/submit">Submit Review</Link>
        <Router primary={false}>
          <Home path="/" />
          <SubmitReview path="/submit" />
        </Router>
      </div>
    </CookiesProvider>
  );
}

export default App;
