import React, { Component } from 'react';
import Title from './Components/Title';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
import items from './Mocks/task';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

class project1 extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isShow        : false,
      items         : items,
      stringSearch  : '',
      itemSelect     : null,
      orderBY       : 'name',
      orderDir      : 'asc'
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSeacrh = this.handleSeacrh.bind(this);
    this.handleSort = this.handleSort.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
       this.handleEdit = this.handleEdit.bind(this);
  }

  handleAdd() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  closeForm() {
    this.setState({
      isShow: false
    });
  }

  handleSeacrh(value){
    this.setState({
      stringSearch: value
    });
  }

  handleSort(orderBY,orderDir){
    this.setState({
      orderBY :orderBY,
      orderDir:orderDir
    });
  }
  handleDelete(id){
    var checked = this.state.items;
    var values = checked.indexOf(id)
    checked.splice(values, 1);
    this.setState({items: checked});
  }

 
  handleSubmit(item){
    let items = this.state.items;

    items.push({
      id :uuidv4(),
      name : item.name,
      level : +item.level
    })

    this.setState(
          items = items
      )
  }
  handleEdit(item){
    this.setState({
      itemSelect : item,
      isShow :  true
    });

  }

  render() {

    let  items=  this.state.items;
    let isShow = this.state.isShow;
    let elemForm = null;
    const search = this.state.stringSearch;
    let orderBY  = this.state.orderBY;
    let orderDir = this.state.orderDir;
    let {itemSelect} = this.state;



    if(search.length > 0){
     items = _.filter(items, (item) =>{
      return _.includes(item.name, search);
    });
   }else{
     items = _.orderBy(items, [orderBY],[orderDir])
   }
   




   let elementOutline=null;

   if(this.state.isShow){
      elemForm = <Form itemSelect={itemSelect} onClickCancel={this.closeForm}
       onClickSubmit={this.handleSubmit} 
      />  
  }
  return (
    <div className="pt-4">
    <Title />
    <Control
    onClickSort={this.handleSort}
    orderBY ={orderBY}
    orderDir ={orderDir} 
    onClickSearchGo={this.handleSeacrh}
    onClickAdd={this.handleAdd} 
    isShow={isShow}

    />
    {elemForm}
    <List 
    onClickEdit={this.handleEdit}
    items={items} onClickDelete={this.handleDelete} />

    </div>  
    );
  }
}

export default project1;