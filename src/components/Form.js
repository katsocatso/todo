import React, { useState } from 'react';

const Form = ({ inputText, todos, setToDos, setInputText, setStatus }) => {
    // e is an event
    const inputTextHandler = (e) => {
        (setInputText(e.target.value));
    };

    const submitToDoHandler = (e) => {
        e.preventDefault(); // prevents page from refreshing when submit pressed
        // note: don't use Math.random() when building actual app, install an id-generating pkg
        setToDos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");       // clear text after submitting
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange = {statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;