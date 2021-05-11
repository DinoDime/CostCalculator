import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <p>Currency: </p>
      <select name="dropdown">
        <option value="USD" selected>
          USD
        </option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="ZAR">ZAR</option>
        <option value="AUD">AUD</option>
      </select>

      <p>Availability: </p>
      <select name="dropdown">
        <option value="Standard">Standard</option>
        <option value="High">High</option>
      </select>

      <p>Storage per day:</p>
      <input type="text" name="gigabytes" />
    </div>
  );
}

export default App;
