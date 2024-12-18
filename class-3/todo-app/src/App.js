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
      //console.log(newTodo); // Log the current value of newTodo when Enter is pressed
      setTodos([...todos, { title: newTodo, isCompleted: false}]); // Add the new todo to the list
      setNewTodo(""); // Clear the input
    }
  };

  const handleClick = (e) => {
    //console.log(newTodo);
    e.preventDefault();
    setTodos([...todos, {title: newTodo, isCompleted: false}]);
    setNewTodo("");
  }

  const handleChecks = (e) => {
    const updatedTodoStatus = e.target.checked;
    const currentTodoIndex = e.target.dataset.id;
    const newUpdatedTodos = [...todos];
    const newUpdatedItem = {...newUpdatedTodos[currentTodoIndex]};
    newUpdatedItem.isCompleted = updatedTodoStatus;
    newUpdatedTodos.splice(currentTodoIndex,1,newUpdatedItem);
    setTodos(newUpdatedTodos);
  }

  const handleDelete = (e) => {
    const deleteIndex = e.target.dataset.id;
    const todosAfterDelete = [...todos];
    todosAfterDelete.splice(deleteIndex,1);
    setTodos(todosAfterDelete);
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
            todos.map((todo,indx) => (
              <div className="todo-item">
                <input data-id={indx} type='checkbox' checked={todo.isCompleted} onClick={handleChecks}/>
                <span className={todo.isCompleted? "completed":""}>
                  {' '}
                  {todo.title}
                </span>
                <span className='delete' onClick={handleDelete} data-id={indx}> X </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
