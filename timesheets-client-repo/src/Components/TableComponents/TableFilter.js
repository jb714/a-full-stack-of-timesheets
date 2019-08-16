import React, { Component } from 'react';
import axios from 'axios';

class TableFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clientQuery: ''
    }
    this.updateClientQuery = this.updateClientQuery.bind(this);
    this.handleClientSearch = this.handleClientSearch.bind(this);
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

  render(){
    return (
      <section className="table-filter-section">
        <div>All entries listed below.</div>
        <form onSubmit={this.handleClientSearch}>
          <input
            className="client-searchbox"
            type="text"
            value={this.state.clientQuery}
            onChange={this.updateClientQuery}
            placeholder="Find entry by client name"></input>
          <button className="btn btn-success">Find client entries</button>
        </form>
      </section>
    );
  }
}

export default TableFilter;
