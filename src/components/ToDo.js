import React from 'react';

const ToDo = ({ text, setToDos, todos, todo }) => {
    // Events
    const deleteHandler = () => {
        // if element id matches todo id, delete it
        setToDos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setToDos(todos.map((item) => {
            if (item.id === todo.id) {
                // return the same item, except the completed field is changed
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick = {completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;