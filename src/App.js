import React, { Component } from 'react';
import './app.css'




class App extends Component {


  componentDidMount(){

    // this is the api fetch
    
    fetch("https://free-football-soccer-videos.p.rapidapi.com/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
        "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
      }
    })
    .then(response => {
      console.log(response.json());
    })
    .catch(err => {
      console.log(err);
    });
  }
 
  render() {
    
    return (
      <div className="App">
        <h1>SOCCER HIGHLIGHTS</h1>
      </div>
    );
  }
}

export default App;
