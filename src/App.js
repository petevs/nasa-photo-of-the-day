import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [data, setData] = useState("")
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=A4u2lLELSmgfijnNijbYzOQtPwu0KvfRoqBw91aS&date=2020-10-18")
    .then(({data}) => {
      setData(data);
      console.log(data)
    })
  },[]);

  return (
    <div className="App">
      <h1><span>🚀 </span>NASA's Photo of The Day</h1>
      <input type="date" max="2020-10-20" />
      <div className="content">
        <div className="card">
        <p>{data.date}</p>
          <h2>{data.title}</h2>
          <img className="photo" alt="astronomy photo of the day" src={data.url} />
          <p>
            {data.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
