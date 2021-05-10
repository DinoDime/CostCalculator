import logo from "./logo.svg";
import "./App.css";
import React from "react";

export default function App() {
  return (
    <div>
      <p>Currency: </p>
      <form>
        <select name="dropdown">
          <option value="Computer Architecture" selected>
            Computer Architecture
          </option>
          <option value="Java">Java</option>
          <option value="Discrete Mathematics">Discrete Mathematics</option>
        </select>
      </form>
    </div>
  );
}
