import React from 'react';

export class AddTodo extends React.Component{
  state={
    title:''
  }
  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title:''
    }) 
  }
  render(){
    return(
      <form action=""         onSubmit={this.submit}>
        <input 
        type="text"
        name="title"
        placeholder='add new todo...'
        onChange={this.onChange}
        value={this.state.title}
        />
        <input 
        type="submit" 
        value="submit"
        />
      </form>
    )
  }
}

export default AddTodo