import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClickEvent = (e) => {
    const textValue = e.target.textContent;
    const returnObj = calculate(state, textValue);
    setState(returnObj);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="display col-12 py-3">
            <span>{state.next || state.operation || state.total || 0}</span>
          </div>
          <div>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>AC</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>+/-</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>%</button>
            <button type="button" className="col-2 orange" onClick={(e) => handleClickEvent(e)}>&divide;</button>
          </div>
          <div>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>7</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>8</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>9</button>
            <button type="button" className="col-2 orange" onClick={(e) => handleClickEvent(e)}>x</button>
          </div>
          <div>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>4</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>5</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>6</button>
            <button type="button" className="col-2 orange" onClick={(e) => handleClickEvent(e)}>-</button>
          </div>
          <div>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>1</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>2</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>3</button>
            <button type="button" className="col-2 orange" onClick={(e) => handleClickEvent(e)}>+</button>
          </div>
          <div>
            <button type="button" className="col-4" onClick={(e) => handleClickEvent(e)}>0</button>
            <button type="button" className="col-2" onClick={(e) => handleClickEvent(e)}>.</button>
            <button type="button" className="col-2 orange" onClick={(e) => handleClickEvent(e)}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
