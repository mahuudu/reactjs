import React, { Component } from 'react';

class Item extends Component{
   constructor(props) {
        super(props);
        this.state= {

        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
  }

    handleDelete(id){
      this.props.onClickDelete(id);
    }

    handleEdit(item){
      this.props.onClickEdit(item);
    }
    render(){
      const {item} = this.props;
      const index = this.props.index;

      let elementlevel = <span className="badge badge-secondary"> Small</span>;

      if (item.level === 1) {
        elementlevel = <span className="badge badge-success ml-2"> Medium</span>;
      }else if(item.level === 2){
         elementlevel =  <span className="badge badge-danger"> Hight</span>;
      } 



      return( 
            <tr>
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td> {elementlevel}</td>
            <td>
              <button onClick={()=>this.handleEdit(item)} className="btn btn-primary col-md-4 mb-3 ml-2" type="button">EDIT</button>
              <button onClick={() => this.handleDelete(item.id)} className="btn btn-danger col-md-4 mb-3 ml-2" type="button">DELETE</button>
            </td>
          </tr>
      
      );
  }
} 
export default Item;