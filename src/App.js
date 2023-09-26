import './App.css';

import { useState } from 'react';
import Button from './Button';

const buttons = [
  "AC", "+/-", "%", "÷",
  "7", "8", "9", "x",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="];

function App() {

  const [calcBuffer, setCalcBuffer] = useState([]);

  function handleClick(value) {
    // if calcBuffer is empty, just push the value (if it's a number)
    if (calcBuffer.length === 0) {
      if( !isNaN(value) ) {
        setCalcBuffer([value]);
      }
      return;
    }

    // we'll need to know if the last value was a number or an operator
    const lastValue = calcBuffer[calcBuffer.length - 1];

    // figure out what kind of button was clicked
    switch (value) {
      case "AC":
        // clear the buffer
        setCalcBuffer([]);
        break;

      case "=":
        // calculate the result - start with the first item in the buffer,
        // which should be a number
        let result = parseFloat(calcBuffer[0]);
        for (let i = 1; i < calcBuffer.length; i++) {
          if (isNaN(calcBuffer[i])) {
            // if the value is an operator, then the next value is the number to operate on
            const nextValue = parseFloat(calcBuffer[i + 1]);
            switch (calcBuffer[i]) {
              case "+":
                result += nextValue;
                break;
              case "-":
                result -= nextValue;
                break;
              case "x":
                result *= nextValue;
                break;
              case "÷":
                result /= nextValue;
                break;
              case "%":
                result = result / 100;
                break;
              default:
                break;
            }
            // increment by 1 to skip the next value, since we already used it
            i++;
          }
        }
        
        // set the buffer to the result
        setCalcBuffer([result]);

        break;

      case ".":
        if (lastValue.indexOf(".") > -1) {
          // if the last value already has a decimal, don't add another one
          return;
        } else {
          setCalcBuffer([...calcBuffer.slice(0, -1), lastValue.concat(value)]);
        }
        break;

      case "+/-":
        // if the last value is a number, then make it negative
        if (!isNaN(lastValue)) {
          setCalcBuffer([...calcBuffer.slice(0, -1), "-".concat(lastValue)]);
        }
        break;

      case "+":
        case "-":
          case "x":
            case "÷":
              case "%":
                if (isNaN(lastValue)) {
                  // if the last value is an operator, then replace it with the new operator
                  setCalcBuffer([...calcBuffer.slice(0, -1), value]);
                } else {
                  // otherwise, just push the operator to the buffer
                  setCalcBuffer([...calcBuffer, value]);
                }
        break;

      default:
        // if the last value is a number, then concat the new value to build a new number
        if (!isNaN(lastValue)) {
          setCalcBuffer([...calcBuffer.slice(0, -1), lastValue.concat(value)]);
        } else {
          // otherwise, just push a new number to the buffer
          setCalcBuffer([...calcBuffer, value]);
        }
        break;
    }
  }

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Calculator</h1>
        </header>
      </div>
      <main className="calculator">
        <div className="display">{calcBuffer.length > 0 ? calcBuffer.join(" ") : "0"}</div>
        <div className="keypad">
          {buttons.map((button, index) => {
            return <Button label={button} handleClick={handleClick} />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
