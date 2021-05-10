import "./App.css";
import React from "react";

export default function App() {
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
        </select>
      </form>
    </div>
  );
}
