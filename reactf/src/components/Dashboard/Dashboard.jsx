import React, { useState } from 'react'
import './Dashboard.css'
import { LineChart, ResponsiveContainer, Legend, CartesianGrid, Tooltip, Line, XAxis, YAxis } from 'recharts';


export default function Dashboard() {





  function getZeroTime() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function addDate(plus) {
    let date = getZeroTime();
    date.setDate(date.getDate() + plus);
    return date;
  }

  var ranTime = [];
  var xData = [];
  var yData = [];
  var colors = [];

  const min = getZeroTime().getTime();
  const max = addDate(1).getTime() - 1;

  for (let k = 0; k < 5; k++) {
    const time = Math.round(Math.random() * (max - min) + min);
    ranTime.push(time);
  }

  ranTime.sort();

  for (let i = 0; i < 5; i++) {
    let temp = Math.round(Math.random() * (450 - 220) + 220);
    temp = temp / 10;
    yData.push(temp);
    if (temp < 33) {
      colors.push("green");
    } else if (temp > 33 && temp < 40) {
      colors.push("orange");
    } else if (temp > 40) {
      colors.push("red");
    }
    let d = new Date(ranTime[i]);
    const x = d.getHours() + ":" + d.getMinutes();
    xData.push(x);
  }

  const Data = []
  Data.push({
    Time: xData,
    Temperature: yData
  })





  //  Time Temperature Table 

  const Header = () => {
    return (
      <tr className='Heading' >
        <th>Time</th>
        <th>Temp</th>


      </tr>
    )
  }
  const Row = (props) => {
    const { Time, Temperature } = props
    return (
      <tr>
        <td>{Time}</td>
        <td>{Temperature}</td>

      </tr>
    )
  }
  const Table = (props) => {
    const { data } = props
    console.log("tabledata:", data);
    return (
      <table class="table table-striped table-bordered table-sm" id='Table'>
        <tbody>
          <Header />
          {data.map(row =>
            <Row Time={row.Time} Temperature={row.Temperature} />
          )}
        </tbody>
      </table>
    )
  }
  const [rows, setRows] = useState(Data)




  return (
    <>


      <div className="Dashboard" >
        <div className="container">

          <div className='left'>

            <h4>Time and Temperature Table</h4>
            <Table data={rows} />
          </div>
          {/* <div> */}
          <div className='right'>

            <h4>Time and Temperature</h4>

            <ResponsiveContainer width={600} height={250} aspect={3} className='graph' >
              <LineChart data={Data}>

                <Line dataKey='Temperature' stroke='red' />
                <Legend />
                <XAxis dataKey='Time' interval={'preserveStartEnd'} />
                <YAxis dataKey='Temperature' interval={'preserveStartEnd'} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
            <div className="button-group">
              <div className="button">
                <button type="button" class="btn btn-primary">Day</button>
              </div>
              <div className="button">
                <button type="button" class="btn btn-primary">Week</button>
              </div>
              <div className="button">
                <button type="button" class="btn btn-primary">Month</button>
              </div>
            </div>



          </div>
        </div>

      </div>
    </>
  )
}



