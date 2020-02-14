import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import Home from './pages/Home'

import { Router, Link } from "@reach/router";
import {  } from 'antd';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
