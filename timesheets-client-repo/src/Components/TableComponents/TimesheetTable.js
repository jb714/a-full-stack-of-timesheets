import React, { Component } from 'react';

class TimesheetTable extends Component {

  render() {
    return (
      <div className='table-container border-thick'>
        <table className='timesheet-table'>
          <tr>
            <th>Client</th>
            <th>Project Name</th>
            <th>Hours</th>
            <th>Billable Hours</th>
            <th>Billable Rate</th>
          </tr>
          <tr>
            <td>Client 1 with really long name</td>
            <td>A cool project</td>
            <td>29</td>
            <td>19</td>
            <td>40</td>
          </tr>
        </table>
      </div>
    );
  }

}

export default TimesheetTable;
