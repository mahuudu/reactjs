import React, { Component } from 'react';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state= {
        stringSearch : ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
    }

    handleSearch(){
      this.props.onClickSearchGo(this.state.stringSearch);

    }

    clear(){
      this.setState({stringSearch: ''});
      this.props.onClickSearchGo('');
    }

  handleChange(event) {
    this.setState({stringSearch: event.target.value});
  }

  render(){
    return( 
      <div className="input-group mb-3 col-md-4 align-self-baseline">
           <input value={this.state.stringSearch} onChange={this.handleChange} type="text" className="form-control" ref="search" placeholder="Search for..." aria-label="Search for..." aria-describedby="basic-addon2" />
           <div className="input-group-append">
           <button onClick={this.handleSearch} className="btn btn-outline-primary" type="button">Search</button>
           <button onClick={this.clear} className="btn btn-outline-danger" type="button"> Clear </button>
      </div>
      </div>
      );
    }
  } 
  export default Search;