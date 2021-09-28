import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Work Out',
    id: 1,
    completed: false
  },
  {
    task: 'Study',
    id: 2,
    completed: false
  },
  {
    task: 'Make Dinner',
    id: 3,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
      this.state = {
        todos: todos
      }
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          return({
            ...todo,
            completed: !todo.completed
          });
        }else{
          return (todo);
        }
      })
    });
  }

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((item) => {
        return(!item.completed === false);
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoList
          handleClear={this.handleClear}
          handleToggle={this.handleToggle}
          todos={this.state.todos}
        />
        <TodoForm
          handleAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
