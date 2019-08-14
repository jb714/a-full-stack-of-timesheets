import React, { Component } from 'react';
import SiteNav from './Components/SiteNav';
import Footer from './Components/Footer';
import TableAndFilter from './Components/TableComponents/TableAndFilter';
import AddTableEntry from './Components/FormComponents/AddTableEntry';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component  {

  //<Footer />

  render() {
    return (
      <Router>
        <div className='app'>
          <SiteNav />
          <Route exact path='/' component={TableAndFilter} />
          <Route exact path='/add_entry' component={AddTableEntry} />
        </div>
      </Router>
    );
  }

}

export default App;
