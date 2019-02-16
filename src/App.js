import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'uuid';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';
class App extends Component {
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'Take out the men',
        checked:false
      },
      {
        id:uuid.v4(),
        title:'Take out the women',
        checked:true
      },
      {
        id:uuid.v4(),
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

  addTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
       title,
       checked:false
    };
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' render={props=>(
            <React.Fragment>
               <AddTodo addTodo={this.addTodo}/>
               <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
            </React.Fragment>
          )}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
