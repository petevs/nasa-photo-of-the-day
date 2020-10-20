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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img alt="astronomy photo of the day" src={data.url} />
    </div>
  );
}

export default App;
