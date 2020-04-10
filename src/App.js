import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; //not in use
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('/math-fact').then(res => res.json()).then(data => {
      setCurrentTime(data.number);
      setMessage(data.message);
    })
  },[]);

  return(
    <div className="App">
      <header className="App-header">
        Current Time
        <p>The current time is: {currentTime}</p>
        <p>{message}</p>
      </header>
    </div>
    );
}

export default App;
