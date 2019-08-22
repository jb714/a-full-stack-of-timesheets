import React, { Component } from 'react';
import TimesheetTable from './TimesheetTable';
import axios from 'axios';

class TableAndFilterContainer extends Component {

  constructor() {
    super();

    this.state = {
      clientQuery: '',
      clientQueryFilter: '',
      allTimesheets: [],
      clientSpecificTimesheets: [],
      filteredByClient: false,

    }
  }

  getAllTimesheets = () => {
    axios.get('http://localhost:8080/timesheets/')
    .then(response => {
      this.setState({allTimesheets: response.data});
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  updateClientQuery = (e) => {
    this.setState({
      clientQuery: e.target.value,
      clientQueryFilter: e.target.value
    })
  }

  handleClientFilterOn = (e) => {
    e.preventDefault();
    let clientQuery = this.state.clientQuery;

    axios.get('http://localhost:8080/timesheets/client_search', {params:{clientQuery: clientQuery}})
    .then(response =>{
      this.setState({
        clientQuery: '',
        clientSpecificTimesheets: response.data,
        filteredByClient: true
      });
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  handleClientFilterOff = () => {
    this.setState({
      filteredByClient: false
    })
  }



  componentDidMount = () => {
    this.getAllTimesheets();
  }

  render() {
    const {
      filteredByClient
    } = this.state;

    return (
      <div className='table-and-filter-section'>
        {filteredByClient ?
          <section className='table-filter-section'>
            <div>Showing results for {this.state.clientQueryFilter}</div>
            <button className='btn btn-success' onClick={this.handleClientFilterOff}>Click to see all timesheets</button>
          </section>
          :
          <section className='table-filter-section'>
            <p className='fw-bold'>All timesheet entries listed below.</p>
            <form onSubmit={this.handleClientFilterOn}>
              <input
                className='client-searchbox'
                type='text'
                value={this.state.clientQuery}
                onChange={this.updateClientQuery}
                placeholder='Find entry by client name'></input>
              <button className='btn btn-success'>Find client entries</button>
            </form>
          </section>
        }
        <TimesheetTable
          allTimesheets={this.state.allTimesheets}
          clientSpecificTimesheets={this.state.clientSpecificTimesheets}
          filteredByClient={this.state.filteredByClient}/>
      </div>
    );
  }

}

export default TableAndFilterContainer;
