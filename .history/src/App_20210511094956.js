import "./App.css";
import React from "react";
import useForm from "react-hook-form";

function App() {
  const { handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit}>
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
        <option value="Standard" name="standard">
          Standard
        </option>
        <option value="High" name="high">
          High
        </option>
      </select>

      <p>Storage per day:</p>
      <input type="text" placeholder="gigabytes" name="storage" />

      <p>Total hits:</p>
      <input type="text" placeholder="hits" name="hits" />

      <p>Total production hours:</p>
      <input type="text" placeholder="hours" name="hours" />

      <p>Number of projects:</p>
      <input type="text" placeholder="projects" name="projects" />

      <p>Total dev hours:</p>
      <input type="text" placeholder="hours" name="hours" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
