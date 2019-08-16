import React, { Component } from 'react';

class TimesheetTable extends Component {


  render() {
    const {
      filteredByClient
    } = this.props;

    let renderedRows;

    if(filteredByClient) {
      renderedRows = this.props.clientSpecificTimesheets.map(function(timesheet){
        return(
          <tr key={timesheet._id}>
            <td>{timesheet.Client}</td>
            <td>{timesheet.Project}</td>
            <td>{timesheet.Hours}</td>
            <td>{timesheet["Billable?"]}</td>
            <td>{timesheet["Billable Rate"]}</td>
          </tr>
        )
      });
    }
    else {
      renderedRows = this.props.allTimesheets.map(function(timesheet){
        return(
          <tr key={timesheet._id}>
            <td>{timesheet.Client}</td>
            <td>{timesheet.Project}</td>
            <td>{timesheet.Hours}</td>
            <td>{timesheet["Billable?"]}</td>
            <td>{timesheet["Billable Rate"]}</td>
          </tr>
        )
      });
    }

    return (
      <div className='table-container border-thick'>
        <table className='timesheet-table table-striped'>
          <thead>
            <tr>
              <th>Client</th>
              <th>Project Name</th>
              <th>Hours</th>
              <th>Billable Hours</th>
              <th>Billable Rate</th>
            </tr>
          </thead>
          <tbody>
            {renderedRows}
          </tbody>
        </table>
      </div>
    );
  }

}

export default TimesheetTable;
