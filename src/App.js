import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="app">
    <Header />
      <Router>
        <switch>
          <Route path="/chat">
            <h1>Im am the chatpage</h1>
          </Route>
          <Route path="/">
            <h1>Im am the homepage</h1>
            <TinderCards />
          </Route>
        </switch>
      </Router>


    </div>
  );
}

export default App;
