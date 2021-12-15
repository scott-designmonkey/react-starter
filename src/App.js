import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  //set the component variables
  const [number, setNumber] = useState(1)

  const incrementNumber = (e) => {
    e.preventDefault();
    //set State
    setNumber(currentNumber =>
      currentNumber + 1
    )
  }

  return (
    <div className="App">

      <Header text={number} />

      <button onClick={e => incrementNumber(e)}> Standard Add </button>
      <Button
        variant="outlined"
        color="error"
        onClick={e => incrementNumber(e)
        } > 
        Material ui Add
      </Button>

      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
