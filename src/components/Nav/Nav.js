import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="blackBg">
      <div className="container Nav">
        <div className="row">
          <h1 className="titleMath col-3 px-4">Math Magicians</h1>
          <div className="col-6 px-5 linkDis" />
          <li className="col-1 home my-4"><Link to="/">Home</Link></li>
          <li className="col-1  my-4"><Link to="/Calculator">Calculator</Link></li>
          <li className="col-1  my-4 px-5"><Link to="/Quote">Quote</Link></li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
