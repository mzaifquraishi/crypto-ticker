import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Ticker from './ticker/Ticker';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let timer1 = setTimeout(() => fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=ALL').then(d => d.json()).then(d => {
      const dd = d.map((j: any) => [j[0].toString().substr(1, 3),
      j[0].toString().substr(4),
      j[1],
      j[8],
      j[9],
      j[10],
      j[0]])
      dispatch({ type: 'SET_DATA', data: dd });
    }), 1 * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });
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

export default connect()(App);
