import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: "Walk the cat", isCompleted: true},
        {description: 'Throw the dishes away', isCompleted: false},
        {description: "Buy new dishes", isCompleted: false}
      ],
      newTodoDescription: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newTodoDescription) {return}
    const newTodo= { description: this.state.newTodoDescription, isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: "" });
  }

  handleChange(e) {
    this.setState({newTodoDescription: e.target.value})
  }

  deleteTodo(index){
    const copy = this.state.todos.slice();
    const todoToDelete = copy[index];
    const newArray = this.state.todos.filter(function(index){return index != todoToDelete});
    this.setState({todos: newArray });

  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos});
  }



  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map(( todo, index) =>
            <ToDo key={ index } description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index)} deleteTodo={() => this.deleteTodo(index)} />
          )}

        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)} />
          <input type="submit" />
        </form>






      </div>
    );
  }
}

export default App;
