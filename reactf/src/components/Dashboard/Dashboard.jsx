// import React from 'react'
// import './Dashboard.css'
// // import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
// import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis } from 'recharts';


// export default function Dashboard() {

//   const randomTime = function () {
//     // const min = 1
//     const max = 86400
//     return Math.round(Math.random() * max)
//   }


//   const randomTemp = function () {
//     return roundedToFixed((Math.random() * (450 - 200) + 200) / 10, 1)

//   }
//   function roundedToFixed(input, digits) {
//     var rounded = Math.pow(10, digits);
//     return (Math.round(input * rounded) / rounded).toFixed(digits);
//   }

//   const data = [];

//   for (let i = 0; i < 100; i++) {
//     data.push({
//       Time: sortArray(randomTime()),
//       // Time: randomTime(),
//       Temperature: randomTemp()
//     })


//   }
//   function sortArray(data) {
//     for (let i = 0; i < data.length; i++) {
//       for (let j = i + 1; j < data.length; j++) {
//         if (data.Time[i] > data.Time[j]) {
//           var temp = data.Time[i];
//           data.Time[i] = data.Time[j];
//           data.Time[j] = temp;
//         } ̰ ̰ ̰ ̰
//       }
//     }
//     return data;
//   }
//   console.log("sortedTime:", sortArray(randomTime()));

//   return (
//     <>
//       <div className="Dashboard" id='dashboard'>
//         <h4>Time and Temperature</h4>

//         <ResponsiveContainer width="100%" aspect={3}>
//           <LineChart data={data}>

//             <Line dataKey='Temperature' stroke='red' />
//             <Legend />
//             <XAxis dataKey='Time' interval={'preserveStartEnd'} />
//             <YAxis dataKey='Temperature' interval={'preserveStartEnd'} />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </>
//   )
// }



import React, { useState } from 'react'
import './Dashboard.css'
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts'
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis } from 'recharts';


export default function Dashboard() {










  function getMillis(inputDate) {
    const date = new Date(inputDate)
    // console.log(date)
    // console.log(date.getTime())
    return date.getTime()
  }

  const randomTime = function () {
    // const min = 1
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
      // Time: sortArray(randomTime()),
      Time: randomTime(),
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




  const UserData = [
    { time: "12:00", temp: "120f" },
    { time: "01:00", temp: "130f" },
    { time: "02:00", temp: "140f" },
    { time: "03:00", temp: "150f" },
    { time: "04:00", temp: "160f" },
    { time: "05:00", temp: "170f" },
    { time: "06:00", temp: "180f" },


  ]
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
    console.log(data);
    return (
      <table class="table table-hover" id='Table'>
        <tbody>
          <Header />
          {data.map(row =>
            <Row Time={row.Time} Temperature={row.Temperature} />
            // <Row userId={row.userId} />
          )}
        </tbody>
      </table>
    )
  }
  const [rows, setRows] = useState(data)

  return (
    <>
      <div className="Dashboard" >
        <div className="container">

          <div className='left'>

            <h4>Time and Temperature Table</h4>
            <Table data={rows} />
          </div>
          <div className='right'>

            <h4>Time and Temperature</h4>

            <ResponsiveContainer width={600} height={400} aspect={3} className='graph' >
              <LineChart data={data}>

                <Line dataKey='Temperature' stroke='red' />
                <Legend />
                <XAxis dataKey='Time' interval={'preserveStartEnd'} />
                <YAxis dataKey='Temperature' interval={'preserveStartEnd'} />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </>
  )
}
