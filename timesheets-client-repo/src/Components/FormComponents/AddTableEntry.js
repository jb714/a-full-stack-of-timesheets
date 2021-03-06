import React, { Component } from 'react';
import axios from 'axios';

import SuccessModal from './SuccessModal';

class AddTableEntry extends Component {
  constructor() {
    super();
    this.state = {
      client: '',
      project: '',
      hours: 0,
      billable: '',
      billable_rate: 0,
      showModal: false
    }
  }

  onAddClient = (e) => {
    this.setState({
      client: e.target.value
    })
  }

  onAddProject = (e) => {
    this.setState({
      project: e.target.value
    })
  }

  onAddHours = (e) => {
    this.setState({
      hours: e.target.value
    })
  }

  onAddBillable = (e) => {
    this.setState({
      billable: e.target.value
    })
  }

  onAddBillableRate = (e) => {
    this.setState({
      billable_rate: e.target.value
    })
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const newTimesheet = {
      Client: this.state.client,
      Project: this.state.project,
      Hours: this.state.hours,
      "Billable?": this.state.billable,
      "Billable Rate": this.state.billable_rate
    }

    axios.post('http://localhost:8080/timesheets/add_entry', newTimesheet)
    .then(res => console.log(res.data));

      this.setState({
        client: '',
        project: '',
        hours: 0,
        billable: '',
        billable_rate: 0,
        showModal: true
      });
  }

  render() {

    const {
      client,
      project,
      hours,
      billable,
      billable_rate
    } = this.state;

    return (
      <div className='form-wrapper'>
        <p className='form-prompt fw-bold'>Fill out the below form to submit a timesheet entry:</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor='Client'>Client:</label>
            <input type='text' className='form-control' id='Client' value={client} onChange={this.onAddClient}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='ProjectName'>Project Name:</label>
            <input type='text' className='form-control' id='ProjectName' value={project} onChange={this.onAddProject}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='Hours'>Hours:</label>
            <input type='text' className='form-control' id='Hours' value={hours} onChange={this.onAddHours}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='BillableHours'>Billable?:</label>
            <input type='text' className='form-control' id='Billable' value={billable} onChange={this.onAddBillable}></input>
          </div>
          <div className='form-group'>
            <label htmlFor='BillableRate'>Billable Rate:</label>
            <input type='text' className='form-control' id='BillableRate' value={billable_rate} onChange={this.onAddBillableRate} maxLength="3"></input>
          </div>
          <button type='submit' className='btn btn-success'>Submit your entry</button>
        </form>
        <SuccessModal showModal={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
      </div>
    );
  }
}

export default AddTableEntry;
