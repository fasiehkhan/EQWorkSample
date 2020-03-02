import React, {useEffect, useState, Component} from 'react';
import Mychart from './Mychart';
import Mychart4 from './Mychart4';
import Mychart5 from './Mychart5';
import Mychart6 from './Mychart6';import Mychart7 from './Mychart7';
import Mychart8 from './Mychart8';import Mychart9 from './Mychart9';
import Mychart10 from './Mychart10';



import Buttons from './Buttons'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ImpressionDays from './ImpressionDays';


function HomePage()  {
const [dates, setDates] = useState([]) ;
const [events] = useState([]) ;
const [impressions] = useState([]);


const [dates1, setDates1] = useState([]);
const [clicks] = useState([]);

const [dates2, setDates2] = useState([]);
const [clicks2] = useState([]);
const [impressions2] = useState([]);

const [dates3, setDates3] = useState([]);
const [clicks3] = useState([]);
const [impressions3] = useState([]);

const [dates4, setDates4] = useState([]);
const [clicks4] = useState([]);
const [impressions4] = useState([]);

const [dates5, setDates5] = useState([]);
const [clicks5] = useState([]);
const [impressions5] = useState([]);

const [dates6, setDates6] = useState([]);
const [clicks6] = useState([]);
const [impressions6] = useState([]);

const [dates7, setDates7] = useState([]);
const [clicks7] = useState([]);
const [impressions7] = useState([]);

// fetch the dates from API endpoint for bar graph
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/daily").then(response => 
     response.json().then(data => {
       setDates(data)
    for(let i = 0, max = data.length; i<max;i+=1){
      dates.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
         ) 
      // fetch num of events from API endpoint
      events.push(data[i].impressions)
      impressions.push(data[i].impressions)

    }
    setDates(dates)
      }))
  }, [])


  // fetching data for Impressions (sunday)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates1(data)

    for(let i = 0, max = 24; i<max;i+=1){
      dates1.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + i)
      // fetch num of clicks from API endpoint
      clicks.push(data[i].clicks)
    }
    setDates1(dates1)
  }))
  }, [])


  // fetching data for Impressions (Monday)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates2(data)

    for(let i = 24, max = 48; i<max;i+=1){
      dates2.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks2.push(data[i].clicks)      
      impressions2.push(data[i].impressions)

    }
    setDates2(dates2)
  }))
  }, [])

  // fetching data for Impressions (Tuesday)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates3(data)

    for(let i = 48, max = 72; i<max;i+=1){
      dates3.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks3.push(data[i].clicks)      
      impressions3.push(data[i].impressions)

    }
    setDates3(dates3)
  }))
  }, [])

  // fetching data for Impressions (Wed)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates4(data)

    for(let i = 72, max = 96; i<max;i+=1){
      dates4.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks4.push(data[i].clicks)      
      impressions4.push(data[i].impressions)

    }
    setDates4(dates4)
  }))
  }, [])

  // fetching data for Impressions (thursday)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates5(data)

    for(let i = 96, max = 120; i<max;i+=1){
      dates5.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks5.push(data[i].clicks)      
      impressions5.push(data[i].impressions)

    }
    setDates5(dates5)
  }))
  }, [])

  // fetching data for Impressions (friday)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates6(data)

    for(let i = 120, max = 144; i<max;i+=1){
      dates6.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks6.push(data[i].clicks)      
      impressions6.push(data[i].impressions)

    }
    setDates6(dates6)
  }))
  }, [])

  // fetching data for Impressions (sat)
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://sparkly-peony-nlqxoacynm.glitch.me/stats/hourly").then(response => 
     response.json().then(data => {
       setDates6(data)

    for(let i = 144, max = 168; i<max;i+=1){
      dates7.push(data[i].date[0] + data[i].date[1] + data[i].date[2]
        + data[i].date[3] + data[i].hour)
      // fetch num of clicks from API endpoint
      clicks7.push(data[i].clicks)      
      impressions7.push(data[i].impressions)

    }
    setDates7(dates7)
  }))
  }, [])

  

        return (
   <div className="App">
          <Router basename={`${process.env.PUBLIC_URL}`}>
      <Buttons/>

      <Switch>
        <Route path="/data" component={() => <Mychart dates={dates} events={events}/>}/>
        <Route path="/data3" component={()=> <ImpressionDays/>}/>
        <Route path="/data4" component={()=> <Mychart4 dates={dates1} impressions={impressions} clicks={clicks}/>}/>
        <Route path="/data5" component={()=> <Mychart5 dates2={dates2} impressions={impressions2} clicks2={clicks2}/>}/>
        <Route path="/data6" component={()=> <Mychart6 dates3={dates3} impressions3={impressions3} clicks3={clicks3}/>}/>
        <Route path="/data7" component={()=> <Mychart7 dates4={dates4} impressions4={impressions4} clicks4={clicks4}/>}/>
        <Route path="/data8" component={()=> <Mychart8 dates5={dates5} impressions5={impressions5} clicks5={clicks5}/>}/>
        <Route path="/data9" component={()=> <Mychart9 dates6={dates6} impressions6={impressions6} clicks6={clicks6}/>}/>
        <Route path="/data10" component={()=> <Mychart10 dates7={dates7} impressions7={impressions7} clicks7={clicks7}/>}/>


      </Switch>
      </Router>

    </div> 
        )
    }


export default HomePage
