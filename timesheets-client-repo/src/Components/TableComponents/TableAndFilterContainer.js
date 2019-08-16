import React, { Component } from 'react';
import TableFilter from './TableFilter';
import TimesheetTable from './TimesheetTable';
import axios from 'axios';

class TableAndFilterContainer extends Component {

  constructor() {
    super();

    this.state = {
      allTimesheets: [],
      clientSpecificTimesheets: [],
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

  updateClientQuery(e) {
    this.setState({
      clientQuery: e.target.value
    })
  }

  handleClientSearch(e) {
    e.preventDefault();
    let clientQuery = this.state.clientQuery;

    axios.get('http://localhost:8080/timesheets/client_search', {params:{clientQuery: clientQuery}})
    .then(response =>{
      console.log('data!',response);
      this.setState({clientQuery: ''});
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
        <TableFilter filteredByClient={this.state.filteredByClient}/>
        <TimesheetTable
          allTimesheets={this.state.allTimesheets}
          clientSpecificTimesheets={this.state.clientSpecificTimesheets}
          filteredByClient={this.state.filteredByClient}/>
      </div>
    );
  }

}

export default TableAndFilterContainer;
