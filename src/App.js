import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import uuidv4 from 'uuidv4';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  function handleAddTodo(e) {
    const name = toDoNameRef.current.value
    if (name === "") return;

    setTodos(prevToDos => {
      return [...prevToDos, { id: uuidv4(), name: name, complete: false}]
    })
    toDoNameRef.current.value = null;



  }

  return (
    <>
      <ToDoList todos = {todos} />
      <input ref= {toDoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div> 0 left to do</div>
   </>
   )
}

export default App;
