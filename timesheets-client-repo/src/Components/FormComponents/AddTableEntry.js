import React, { Component } from 'react';

class AddTableEntry extends Component {

  render() {
    return (
      /*
      Client, Project Name, Hours, Billable Hours, Billable Amount
      */
      <div className='form-wrapper'>
        <h3>Add a timesheet entry:</h3>
        <form>
          <div className='form-group'>
            <label for='Client'>Client:</label>
            <input type='text' className='form-control' id='Client'></input>

            <label for='ProjectName'>Project Name:</label>
            <input type='text' className='form-control' id='ProjectName'></input>

            <label for='Hours'>Hours:</label>
            <input type='text' className='form-control' id='Hours'></input>

            <label for='BillableHours'>Billable Hours:</label>
            <input type='text' className='form-control' id='BillableHours'></input>

            <label for='BillableRate'>Billable Rate:</label>
            <input type='text' className='form-control' id='BillableRate'></input>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTableEntry;
