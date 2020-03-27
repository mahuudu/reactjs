import React, { Component } from 'react';
import Item from './Item';

class List extends Component{

   constructor(props) {
        super(props);
        this.state= {

        };


  }

    render(){

      const items = this.props.items;
      const elementItem = items.map((item, index)=>{
        return ( 
          <Item onClickEdit={this.props.onClickEdit} key={index} item={item} index={index} onClickDelete={this.props.onClickDelete} />
          );
      });

        return( 
        <table className="table">
          <caption>Danh sach</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th className="w-50" scope="col">Task</th>
              <th scope="col">Level</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
             <tbody>
           {elementItem} 
            </tbody>
      </table>

      );
  }
} 
export default List;