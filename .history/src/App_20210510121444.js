import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <div>
    < className="App">
        <p>Currency: </p>
        <form>
          <select name="dropdown">
            <option value="USD" selected>
              USD
            </option>
            <option value="CHF">CHF</option>
            <option value="EUR">EUR</option>
          </select>
        </form>
    </div> 
  );
}

export default App;
