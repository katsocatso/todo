import React from 'react';

// import components
import ToDo from './ToDo'

// {} within jsx means u can write javascript there
const ToDoList = ({ todos, setToDos, filteredToDos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        text={todo.text}
                        setToDos = {setToDos}
                        todos = {filteredToDos}
                        todo = {todo}
                    />
                ))}
            </ul>

        </div>
    );
};

export default ToDoList;