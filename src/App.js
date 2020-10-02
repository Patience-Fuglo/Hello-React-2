import React from 'react';
import logo from './pic2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Practicing React
        </p>
        <a
          className="App-link"
          href="https://github.com/Patience-Fuglo/Hello-React-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reacting to React!
        </a>
      </header>
    </div>
  );
}

export default App;
