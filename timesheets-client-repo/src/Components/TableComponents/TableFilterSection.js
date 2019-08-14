import React, { Component } from 'react';

class TableFilterSection extends Component {

  render(){
    return (
      <section className="table-filter-section">
        <div>All entries listed below.</div>
        <div>
          <input className="client-searchbox"type="text" placeholder="Find entry by client name"></input>
          <button>Find client entries</button>
        </div>
      </section>
    );
  }
}

export default TableFilterSection;
