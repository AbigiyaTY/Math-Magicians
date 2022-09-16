import React, { PureComponent } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClickEvent = (e) => {
    const textValue = e.target.textContent;
    const returnObj = calculate(this.state, textValue);
    this.setState(returnObj);
  };

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="display col-12 py-3">
              <span>{next || operation || total || 0}</span>
            </div>
            <div>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>AC</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>+/-</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>%</button>
              <button type="button" className="col-2 orange" onClick={(e) => this.handleClickEvent(e)}>&divide;</button>
            </div>
            <div>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>7</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>8</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>9</button>
              <button type="button" className="col-2 orange" onClick={(e) => this.handleClickEvent(e)}>x</button>
            </div>
            <div>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>4</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>5</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>6</button>
              <button type="button" className="col-2 orange" onClick={(e) => this.handleClickEvent(e)}>-</button>
            </div>
            <div>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>1</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>2</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>3</button>
              <button type="button" className="col-2 orange" onClick={(e) => this.handleClickEvent(e)}>+</button>
            </div>
            <div>
              <button type="button" className="col-4" onClick={(e) => this.handleClickEvent(e)}>0</button>
              <button type="button" className="col-2" onClick={(e) => this.handleClickEvent(e)}>.</button>
              <button type="button" className="col-2 orange" onClick={(e) => this.handleClickEvent(e)}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
