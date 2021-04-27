import React from 'react';

const ToDoList = (props) => {

    

    return (
    <>
        <div className="todo_style">
            <li> 
            <i 
            className="fas fa-times-circle todo-font"
            onClick={() => {
                props.onSelect(props.id)
            }}
            ></i> 
            {props.text}
            </li>
        </div>
    </>
    );
}

export default ToDoList;