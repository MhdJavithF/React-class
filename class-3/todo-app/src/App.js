import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  
  const [newTodo, setNewTodo] = useState("");

  const handleTodoChanges = (e) => {
    //console.log(e.target.value);
    setNewTodo(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(newTodo); // Log the current value of newTodo when Enter is pressed
      setTodos([...todos, { title: newTodo }]); // Add the new todo to the list
      setNewTodo(""); // Clear the input
    }
  };

  const handleClick = (e) => {
    //console.log(newTodo);
    e.preventDefault();
    setTodos([...todos, {title: newTodo}]);
    setNewTodo("");
  }

  const handleChecks = (e) => {
    
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo App</h1>
        <form className='in-form'>
          <input type='text' placeholder='Enter your todo...' onChange={handleTodoChanges} value={newTodo} onKeyDown={handleKeyDown}/>
          <button id='add' onClick={handleClick}>Add</button>
        </form>
        <div className="todo-list">
          {
            todos.map((todo) => (
              <div className="todo-item">
                <input type='checkbox' checked={todos.isCompleted} onClick={handleChecks}/>
                <span className={todos.isCompleted? "completed":""}>
                  {' '}
                  {todo.title}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
