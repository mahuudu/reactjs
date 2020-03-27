import React, { Component } from 'react';

class Sort extends Component{
     constructor(props) {
        super(props);
        this.state= {

    };

    this.handleSort = this.handleSort.bind(this);
    } 

    handleSort(orderBY,orderDir){
      console.log(orderBY + " - " + orderDir);
      this.props.onClickSort(orderBY,orderDir);
    }


    render(){
        let orderBY  = this.props.orderBY;
        let orderDir = this.props.orderDir;
        let stringSort = orderBY + " - " + orderDir;

        return( 
     
      <div className="dropdown">
      <button className="btn btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort-by</button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button onClick={()=>this.handleSort('name', 'asc')} className="dropdown-item" type="button">Name ASC</button>
        <button onClick={()=>this.handleSort('name', 'desc')}  className="dropdown-item" type="button">Name DESC</button>
        <button onClick={()=>this.handleSort('level', 'asc')}  className="dropdown-item" type="button"> level ASC</button>
        <button  onClick={()=>this.handleSort('level', 'desc')}  className="dropdown-item" type="button">level DESC </button>
      </div>
      <span className="badge badge-success p-3 ml-2">{stringSort}</span>
      </div>
  

      );
  }
} 
export default Sort;