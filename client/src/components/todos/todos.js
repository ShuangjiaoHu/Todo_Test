import React, { Component } from 'react';
import './todos.css';
import TodoTable from './todotable.js';

class Todos extends Component {
  constructor (props){
      super(props);
      this.state = {
        todos: [],
        user: '',
        title: '',
        id:'',
        contents:''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      fetch('/api/todos/list')
        .then(res => res.json())
        .then(todos => this.setState({todos}, () => {
          console.log('Todos fetched..', todos)
        }));
    }

    handleSubmit (e){
      e.preventDefault();
      if(this.title.value!=undefined && this.user.value!=undefined){
        this.setState({
          title: this.title.value,
          user: this.user.value
        })
        fetch('http://localhost:5000/api/todos', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            user: this.title.value,
            title: this.user.value
          })
        })
      }
      if(this.id.value!=undefined && this.contents.value!=undefined){
        alert(this.id.value + " " + this.contents.value);
        this.setState({
          id: this.id.value,
          contents: this.contents.value
        })
        fetch('http://localhost:5000/api/todos'+this.id.value+'/itmes', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            id: this.id.value,
            content: this.contents.value
          })
        })
      }
    }
    render (){
      return (
        <div className="well-lg">
          <form onSubmit={this.handleSubmit}>
          <div>
            <label>User: </label>
            <input ref={(userInput) => this.user = userInput} />
            <label>Title: </label>
            <input ref={(titleInput) => this.title = titleInput} />
            <button type="submit" >Add Todo</button>
          </div>
          <div>
            <label>Id: </label>
            <input ref={(idInput) => this.id = idInput} />
            <label>Content: </label>
            <input ref={(contentsInput) => this.contents = contentsInput} />
            <button type="submit" >Add Item</button>
          </div>
          <div>
            <h4>{this.state.user}</h4>
            <h4>{this.state.title}</h4>
          </div>
          </form>
          <TodoTable todos = {this.state.todos} />
        </div>
      );
    }
}

export default Todos;
