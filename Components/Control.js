import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component{
     constructor(props) {
        super(props);
        this.state= {

    };
    this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd(){
        this.props.onClickAdd();
    }


    render(){
      let orderBY  = this.props.orderBY;
      let orderDir = this.props.orderDir;

      let elemButton =  <button onClick={this.handleAdd} className="btn btn-primary col-md-12" type="button">Thêm task</button>

      if (this.props.isShow === true) {
          elemButton  = <button onClick={this.handleAdd} className="btn btn-danger col-md-12" type="button" onClick={this.handleAdd}>Close</button>
      }


        return( 
      <div className="d-flex" > 
      <Search onClickSearchGo={this.props.onClickSearchGo} />
      <Sort 
        onClickSort={this.props.onClickSort}
        orderBY ={orderBY}
        orderDir={orderDir}
      />
      <div className="mb-3 col-md-6" >
        {elemButton}
      </div>
    
       </div>
      );
  }
} 
export default Control;