import React, { Component } from 'react';
import SiteNav from './Components/SiteNav';
import Footer from './Components/Footer';
import TableAndFilterContainer from './Components/TableComponents/TableAndFilterContainer';
import AddTableEntry from './Components/FormComponents/AddTableEntry';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component  {

  render() {
    return (
      <Router>
        <div className='app'>
          <SiteNav />
          <Route exact path='/' component={TableAndFilterContainer} />
          <Route exact path='/add_entry' component={AddTableEntry} />
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
