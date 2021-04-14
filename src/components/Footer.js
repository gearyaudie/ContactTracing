import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className='container grid-3'>
        <div>
          <h1>Contact Tracing</h1>
        </div>
        <div className='footer-links'></div>
        <div className='social'>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/logbook'>
              <li>Logbook</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
