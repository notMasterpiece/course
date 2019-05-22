import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TodoItem = ({todo, toggleTodo, deleteTodo}) => (
    <TodoLi key={todo.id}>
        <TodoLabel htmlFor={todo.id}>
            <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.value}
        </TodoLabel>
        <TodoClose onClick={() => deleteTodo(todo.id)}/>
    </TodoLi>
);

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};


const TodoLi = styled.li`
  border-bottom: 1px solid #eee;
  position: relative;
`;

const TodoLabel = styled.label`
  cursor: pointer;
  display: block;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #eee; 
  }
`;



const TodoClose = styled.div`
    color: red;
    font-size: 24px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:after {
      content: 'x';
    }
    
`;

export default TodoItem;