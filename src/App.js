import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  // run once when app starts
  useEffect(() => {
    getLocalToDos();
  }, []);

  // use effect: runs the function once when page first loads,
  //  and reruns when states in [] change
  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }

  const saveLocalToDos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalToDos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setToDos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Cat's To-do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setToDos={setToDos}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;
