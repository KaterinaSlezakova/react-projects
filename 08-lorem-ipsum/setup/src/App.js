import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState("0");
  const [text, showText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    showText(data.slice(0, amount));
  };

  return (
    <div className="section-center">
      <h3>lorem ipsum project setup</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          value={count}
          name="amount"
          id="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((article, index) => {
          return <p key={index}>{article}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
