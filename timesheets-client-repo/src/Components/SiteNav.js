import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SiteNav extends Component {
  render() {
    return (
      <nav className='site-nav navbar border-thick'>
        <h1>Timesheets<span><h3>Now featuring full stack!</h3></span></h1>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/add_entry'>Add timesheet entry</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
