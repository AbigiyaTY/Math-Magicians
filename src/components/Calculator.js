import React, { PureComponent } from 'react';
import './Calculator.css';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="display col-12 py-3">
              <span> 0 </span>
            </div>
            <div>
              <button type="button" className="col-2"> AC </button>
              <button type="button" className="col-2"> +/- </button>
              <button type="button" className="col-2"> % </button>
              <button type="button" className="col-2 orange"> /</button>
            </div>
            <div>
              <button type="button" className="col-2"> 7 </button>
              <button type="button" className="col-2"> 8 </button>
              <button type="button" className="col-2">9</button>
              <button type="button" className="col-2 orange">*</button>
            </div>
            <div>
              <button type="button" className="col-2">4</button>
              <button type="button" className="col-2">5</button>
              <button type="button" className="col-2">6</button>
              <button type="button" className="col-2 orange">-</button>
            </div>
            <div>
              <button type="button" className="col-2">1</button>
              <button type="button" className="col-2">2</button>
              <button type="button" className="col-2">3</button>
              <button type="button" className="col-2 orange">+</button>
            </div>
            <div>
              <button type="button" className="col-4">0</button>
              <button type="button" className="col-2">.</button>
              <button type="button" className="col-2 orange">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
