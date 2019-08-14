import React, { Component } from 'react';
import TableFilterSection from './TableFilterSection';
import TimesheetTable from './TimesheetTable';

class TableAndFilter extends Component {

  render() {
    return (
      <div className='table-and-filter-section'>
        <TableFilterSection />
        <TimesheetTable />
      </div>
    );
  }

}

export default TableAndFilter;
