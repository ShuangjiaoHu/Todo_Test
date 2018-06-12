import React from 'react';

function TodoTable(props) {
    return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>TodoTitle</th>
          <th>TodoItems</th>
          <th>Completed</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {props.todos.map(todo =>
          <tr key = {todo.id}>
            <td>{todo.id}</td>
            <td>{todo.user}</td>
            <td>{todo.title}</td>
            {todo.todoItems.length>0 ? todo.todoItems.map(item =>
              <td key = {item.id}>{item.content}</td>
            ): <td></td>}
            {todo.todoItems.length>0 ? todo.todoItems.map(item =>
              <td key = {item.id}>{item.complete.toString()}</td>
            ) : <td></td>}
            <td>update</td>
            <td>delete</td>
          </tr>
        )}
        </tbody>
      </table>
    )
}

export default TodoTable;
