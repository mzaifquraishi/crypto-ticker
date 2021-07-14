import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Ticker } from './ticker/Ticker';

function App() {
  return (
    <div className="App">
      <header className="container">
      <div className="jumbotron">
      <h1 className="display-4">Ticker</h1></div>
        <Ticker />
      </header>
    </div>
  );
}

export default App;
