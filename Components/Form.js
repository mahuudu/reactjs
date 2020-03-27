import React, { Component } from 'react';

class Form extends Component{

    constructor(props) {
        super(props);
        this.state= {
          id_task : '',
          name_task : '',
          level_task : 0
    };


    
    this.cancel = this.cancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillUnmount()
      {
            let item = this.props.itemSelect;
   if(item.id !== '') {
            this.setState({
                id_task : item.id,
                name_task : item.name,
                level_task : item.level
    });
    }
      }
    cancel(){
      this.props.onClickCancel();
    }

   handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
       });
     }
     handleSubmit(event) {
      let item = {
        name : this.state.name_task,
        level : this.state.level_task
      }

      this.props.onClickSubmit(item);
      event.preventDefault();
     }


    render(){
 
 

        return( 
              <div className="d-flex">
        <div className="col-md-offset-7 col-md-5 order-1">
          <form onSubmit={this.handleSubmit} className="d-flex">
            <div className="form-group input-group">
              <label className="sr-only"> Label 
              </label>
              <input  name="name_task" value={this.state.name_task} onChange={this.handleChange} type="text" className="form-control" placeholder="text" />
            </div>
            <div className="form-group d-flex">
              <label className="sr-only"> Label 
              </label>
              <select name="level_task" id="inputDs" value={this.state.level_task} onChange={this.handleChange} className="" required="required">
                <option value="0"> small</option>
                <option value="1"> Medium</option>
                <option value="2"> High</option>
              </select>
              <button type="submit"  className="btn btn-primary"> Submit</button>
              <button type="button" className="btn btn-danger"> Cancel</button>
            </div>
          </form>
        </div>
      </div>
      );
  }
} 
export default Form;