import React, { Component } from 'react';
import TableFilterSection from './TableFilterSection';
import TimesheetTable from './TimesheetTable';
import axios from 'axios';

class TableAndFilter extends Component {

  constructor() {
    super();

    this.state = {
      allTimesheets: [],
      clientQueries: [],
      filteredByClient: false,

    }
    this.getAllTimesheets = this.getAllTimesheets.bind(this);
  }

  getAllTimesheets() {
    axios.get('http://localhost:8080/timesheets/')
    .then(response => {
      console.log('data:', response.data);
      this.setState({allTimesheets: response.data});
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getAllTimesheets();
  }

  render() {
    return (
      <div className='table-and-filter-section'>
        <TableFilterSection allTimesheets={this.state.allTimesheets}/>
        <TimesheetTable allTimesheets={this.state.allTimesheets}/>
      </div>
    );
  }

}

export default TableAndFilter;
