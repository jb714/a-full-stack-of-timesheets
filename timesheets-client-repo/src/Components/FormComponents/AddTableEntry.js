import React, { Component } from 'react';
import axios from 'axios';

class AddTableEntry extends Component {
  constructor() {
    super();
    this.state = {
      added_client: '',
      added_project: '',
      added_hours: '',
      added_billable: '',
      added_billable_rate: ''
    }

    this.onAddClient = this.onAddClient.bind(this);
    this.onAddProject = this.onAddProject.bind(this);
    this.onAddHours = this.onAddHours.bind(this);
    this.onAddBillable = this.onAddBillable.bind(this);
    this.onAddBillableRate = this.onAddBillableRate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onAddClient(e) {
    this.setState({
      added_client: e.target.value
    })
  }

  onAddProject(e) {
    this.setState({
      added_project: e.target.value
    })
  }

  onAddHours(e) {
    this.setState({
      added_hours: e.target.value
    })
  }

  onAddBillable(e) {
    this.setState({
      added_billable: e.target.value
    })
  }

  onAddBillableRate(e) {
    this.setState({
      added_billable_rate: e.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const newTimesheet = {
      added_client: this.state.added_client,
      added_project: this.state.added_project,
      added_hours: this.state.added_hours,
      added_billable: this.state.added_billable,
      added_billable_rate: this.state.added_billable_rate
    }

    axios.post('http://localhost:8080/timesheets/add_entry', newTimesheet)
    .then(res => console.log(res.data))

    this.setState = ({
      added_client: '',
      added_project: '',
      added_hours: '',
      added_billable: '',
      added_billable_rate: ''
    });
  }

  render() {

    const {
      added_client,
      added_project,
      added_hours,
      added_billable,
      added_billable_rate
    } = this.state;

    return (
      <div className='form-wrapper'>
        <h3>Add a timesheet entry:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-group'>
            <label for='Client'>Client:</label>
            <input type='text' className='form-control' id='Client' value={added_client} onChange={this.onAddClient}></input>

            <label for='ProjectName'>Project Name:</label>
            <input type='text' className='form-control' id='ProjectName' value={added_project} onChange={this.onAddProject}></input>

            <label for='Hours'>Hours:</label>
            <input type='text' className='form-control' id='Hours' value={added_hours} onChange={this.onAddHours}></input>

            <label for='BillableHours'>Billable?:</label>
            <input type='text' className='form-control' id='Billable' value={added_billable} onChange={this.onAddBillable}></input>

            <label for='BillableRate'>Billable Rate:</label>
            <input type='text' className='form-control' id='BillableRate' value={added_billable_rate} onChange={this.onAddBillableRate}></input>
          </div>
          <button onClick={this.handleFormSubmit}>Submit it</button>
        </form>
      </div>
    );
  }
}

export default AddTableEntry;
