import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // State for controlled component
  const [inputValue, setInputValue] = useState("");

  // Handle controlled component input change
  const handleChange = (e) => {
    setInputValue(e.target.value); // Update the state with the input value
  };

  return (
    <div className="App">
      <h1>Hello Try out the controlled Component </h1>

      {/* Controlled component */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Controlled input"
      />
      <div>{inputValue}</div>
      <h2>Chalooooooooooooooo!</h2>
    </div>
  );
}
