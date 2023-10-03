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
  // You can use this to maintain the calculator buffer
  const [calcBuffer, setCalcBuffer] = useState([]);

  function convertCalcBufferToString() {
    if (calcBuffer.length === 0) {
      return '0'
    }
    
    return calcBuffer.join(' ');
  }

  // Handle button clicks here
  function handleClick(value) {
    const calcBufferLastElement = calcBuffer.slice(-1)[0]
    let newCalcBuffer = calcBuffer
    
    // value is a digit
    if (isElementANumber(value)) {
      if (value === '0'  && calcBufferLastElement === '0') {
        // if we already have a 0, don't add another 0.
        return
      } else if (isElementANumber(calcBufferLastElement)) { // if the last element is an integer or equates to 0 (ie '0.')
        // if the last value is a digit, append the number
        const newFinalElement = calcBufferLastElement + value;
        newCalcBuffer.splice(-1, 1, newFinalElement);
      } else {
        // otherwise, create new item
        newCalcBuffer.push(value);
      }
    } else if (['+', '-', 'x', '÷'].includes(value) && isElementANumber(calcBufferLastElement)) {
       // value is an operator and the last item is a number
      newCalcBuffer.push(value);
    } else if (value === '+/-' && isElementANumber(calcBufferLastElement)) { 
      // multiply the last item by -1, if its a number
      const newFinalElement = parseFloat(calcBuffer.slice(-1)) * -1;
      newCalcBuffer.splice(-1, 1, newFinalElement)
    } else if (value === '%' && isElementANumber(calcBufferLastElement)) {
      // shortcut to divide by 100
      newCalcBuffer.push('÷')
      newCalcBuffer.push('100')
    } else if (value === '.') { // Decimal
      if (calcBuffer.length === 0 || ['+', '-', 'x', '÷'].includes(calcBufferLastElement) ) {
        newCalcBuffer.push('0.');
      } else if (isElementANumber(calcBufferLastElement)) {
        const newFinalElement = parseInt(calcBuffer.slice(-1)) + '.';
        newCalcBuffer.splice(-1, 1, newFinalElement)
      }
    } else if (value === '=') { // Do the calculation
      try {
        newCalcBuffer = [eval(convertCalcBufferToString().replace('÷', '/').replace('x', '*'))]
      } catch {
        // We could also consider removing the last element, and then trying to run again.
        console.log("The current numbers and operators are not possible to run.")
      }
    } else if (value === 'AC') { // Reset
      newCalcBuffer = [];
    }
    // set the state, and use the spread operator to trigger a rerender
    setCalcBuffer([...newCalcBuffer]);
  }

  function isElementANumber(value) {
    return parseFloat(value) || parseFloat(value) === 0
  }

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Calculator</h1>
        </header>
      </div>
      <main className="calculator">
        <div className="display">{convertCalcBufferToString()}</div>
        <div className="keypad">
          {buttons.map((button, index) => {
            return <Button label={button} handleClick={() => handleClick(button)} key={`${index}${button}`}/>
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
