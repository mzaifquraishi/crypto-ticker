import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../features/counter/counterSlice';
import styles from '../features/counter/Counter.module.css';

export function Ticker(): any {
  const [data, setdata] = useState([]);

  useEffect(() => {
    let timer1 = setTimeout(() => fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=ALL').then(d => d.json()).then(d => {
      const dd = d.map((j: any) => [j[0].toString().substr(1, 3),
      j[0].toString().substr(4),
      j[1],
      j[8],
      j[9],
      j[10],
      j[0]])
      setdata(dd);
      console.log(d);
    }), 2 * 1000);
    
    return () => {
      clearTimeout(timer1);
    };
  }, [data]);

  return (
    <div className="table-responsive">
      <table className="table table-stripe text-center table-hover">
        <thead className="bold">
          <tr>
            <td>Name</td>
            <td>Last</td>
            <td>Vol</td>
            <td>Low</td>
            <td>High</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(d => <tr key={d[6]} >
              <td>{d[0]}/{d[1]}</td>
              <td>{d[2]}</td>
              <td>{d[3]}</td>
              <td>{d[4]}</td>
              <td>{d[5]}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}
