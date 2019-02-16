import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'Take out the men',
        checked:false
      },
      {
        id:2,
        title:'Take out the women',
        checked:true
      },
      {
        id:3,
        title:'Take out the kids',
        checked:false
      }
    ]
  }
  markComplete=(id)=>{
    console.log('hello',id);
    this.setState({
      todos:this.state.todos.map((item)=>{
        if(item.id===id){
          item.checked=!item.checked;
        }
        return item;
      })
    })

  }

  deleteItem=(id)=>{
    this.setState({
      todos:this.state.todos.filter((item)=>{
        return item.id!==id;
      })
    })
  }
  render() {
    return (
      <div className="App">
           <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
