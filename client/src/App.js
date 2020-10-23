import React from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    '8 Oct',
    '9 Oct',
    '10 Oct',
    '11 Oct',
    '12 Oct',
    '13 Oct',
    '14 Oct',
    '15 Oct',
    '16 Oct',
    '17 Oct',
    '18 Oct',
    '19 Oct',
    '20 Oct',
    '21 Oct',
    '22 Oct',
    '23 Oct',
    '24 Oct',
    '25 Oct',
    '26 Oct',
    '27 Oct',
    '28 Oct',
  ],
  datasets: [
    {
      label: 'deaths',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        18978,
        15635,
        16171,
        16981,
        18803,
        21330,
        26687,
        18978,
        15635,
        16171,
        16981,
        18803,
        21330,
        26687,
        18978,
        15635,
        16171,
        16981,
        18803,
        21330,
        26687,
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Covid-19</p>
        <h2>Line Example</h2>
      </header>

      <div className="charts">
        <div className="chart">
          <Line
            data={data}
            legend={{ display: false }}
            options={{
              scales: {
                xAxes: [{ display: false }],
              },
            }}
          />
        </div>
        <div className="chart">
          <Line data={data} legend={{ display: true, position: 'left' }} />
        </div>
        <div className="chart">
          <Line data={data} />
        </div>
        <div className="chart">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
