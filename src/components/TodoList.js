import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoList extends Component {

  getStyle=()=>{
      return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration:this.props.list.checked?'line-through':'none'
      }
  
  }

  render() {
    const {id,title}=this.props.list;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
        <span>{title}</span>
        <button onClick={this.props.deleteItem.bind(this,id)}>x</button>
      </div>
    )
  }
}



// proptypes
TodoList.propTypes={
  list:propTypes.object.isRequired
}


export default TodoList
