import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/Dashboard'
import NavBar from './components/NavBar'


function App() {

  state = {
    user_id: null
  }


  return (
    <div className="App">
      
      <NavBar />
      <Dashboard/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
