import React, {Component} from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

class Todos extends Component{
 

  render(){

    return this.props.todos.map((todo)=>(
      <TodoList key={todo.id} list={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem} />
    ))
  }
}

// proptypes
Todos.propTypes={
  todos:PropTypes.array.isRequired
}
export default Todos;