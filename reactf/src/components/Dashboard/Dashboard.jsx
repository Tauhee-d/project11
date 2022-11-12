import React from 'react'
import './Dashboard.css'
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis } from 'recharts';


export default function Dashboard() {

  const randomTime = function () {
    const min = 1
    const max = 86400
    return Math.round(Math.random() * max)
  }


  const randomTemp = function () {
    return roundedToFixed((Math.random() * (450 - 200) + 200) / 10, 1)

  }
  function roundedToFixed(input, digits) {
    var rounded = Math.pow(10, digits);
    return (Math.round(input * rounded) / rounded).toFixed(digits);
  }

  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      Time: sortArray(randomTime()),
      // Time: randomTime(),
      Temperature: randomTemp()
    })


  }
  function sortArray(data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data.Time[i] > data.Time[j]) {
          var temp = data.Time[i];
          data.Time[i] = data.Time[j];
          data.Time[j] = temp;
        }
      }
    }
    return data;
  }
  console.log("sortedTime:", sortArray(randomTime()));

  return (
    <>
      <div className="Dashboard" id='dashboard'>
        <h4>Time and Temperature</h4>

        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>

            <Line dataKey='Temperature' stroke='red' />
            <Legend />
            <XAxis dataKey='Time' interval={'preserveStartEnd'} />
            <YAxis dataKey='Temperature' interval={'preserveStartEnd'} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
