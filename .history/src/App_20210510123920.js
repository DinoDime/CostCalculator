import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <p>Currency: </p>
      <form>
        <select name="dropdown">
          <option value="USD" selected>
            USD
          </option>
          <option value="CHF">CHF</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </form>
      <p>Availability: </p>
      <select name="dropdown">
        <option value="Standard">Standard</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}

export default App;
