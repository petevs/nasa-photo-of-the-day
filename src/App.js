import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post"
import Header from "./components/Header"
import axios from "axios";
import moment from "moment"

function App() {


/* Get Yesterdays Date in YYYY-MM-DD Format */
  function yesterday(){
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate()-1)
    return yesterday.toISOString().split('T')[0]
  }

/* Set State for data and date (pass in yesterday's date)*/
  const [data, setData] = useState("")
  const [date, setDate] = useState(yesterday())
  
  /* Setup use effect on mount and change of date */
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=A4u2lLELSmgfijnNijbYzOQtPwu0KvfRoqBw91aS&date="+date)
    .then(({data}) => {
      setData(data);
      // console.log(data)
    })
  },[date]);

  /* Handle date selection and set value*/
  const handleDateSelection = event => {
    setDate(event.target.value)
  }

  return (
    <div className="App">

      <Header date={date} handleDateSelection={handleDateSelection} />
      <Post post={data}/>
    </div>
  );
}

export default App;
