import React, { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operators, setOperators] = useState(["+", "-", "*", "/"]);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  function onChangeInput1(e) {
    setInput1(parseInt(e.target.value));
  }
  function onChangeInput2(e) {
    setInput2(parseInt(e.target.value));
  }
  function onChangeOperator(e) {
    setOperator(e.target.value);
  }
  function onSubmitResult(e) {
    e.preventDefault();
    const plus = input1 + input2;
    const minus = input1 - input2;
    const multiple = input1 * input2;
    const divide = input1 / input2;
    switch (operator) {
      case "+":
        setResult(plus);
        break;
      case "-":
        setResult(minus);
        break;
      case "*":
        setResult(multiple);
        break;
      case "/":
        setResult(divide);
        break;
      default:
        setResult(0);
    }
    setInput1(0);
    setInput2(0);
  }

  function useAnswer() {
    setInput1(result);
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <hr />

      <form onSubmit={onSubmitResult}>
        <div className="form-group">
          <label htmlFor="input1">Number Set 1: </label>
          <input
            type="number"
            name="input1"
            value={input1}
            onChange={onChangeInput1}
          />{" "}
          <a className="use-answer" onClick={useAnswer}>
            use answer
          </a>
        </div>

        <div className="form-group">
          <label htmlFor="operator">Operator:</label>
          <select value={operator} onChange={onChangeOperator}>
            {operators.map((operator) => (
              <option key={operator} value={operator}>
                {operator}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="operator">Number Set 2: </label>
          <input
            type="number"
            name="operator"
            value={input2}
            onChange={onChangeInput2}
          />
        </div>

        <div className="form-group">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <h2>Your Result: {result} </h2>
    </div>
  );
}

export default App;
