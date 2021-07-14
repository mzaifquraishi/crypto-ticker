import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function Ticker(props: any): any {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let d = setTimeout(() => props.data.length && setdata(props.data), 1000)
  })
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

const mapStateToProps = (state: any) => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(Ticker);

