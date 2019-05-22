import React from 'react';
import styled from "styled-components";
import {Link, Redirect} from "react-router-dom";
import TodoItem from './TodoItem';
import enhance from './TodoHoc';

const TodoList = enhance(({value, todos, onSubmit, onChange, toggleTodo, deleteTodo, ...props }) => {
    const {pathname} = global.location;
    const status = pathname.split('/')[2];
    let filteredTodos;

    switch (status) {
        case '':
            filteredTodos = todos;
            break;
        case 'active':
            filteredTodos = todos.filter(t => !t.completed);
            break;
        case 'completed':
            filteredTodos = todos.filter(t => t.completed);
            break;
        default:
            return <Redirect to={'/task5/'} />
    }

    return (
            <TodoWrap>
                <form onSubmit={onSubmit}>
                    <TodoInput
                        onChange={onChange}
                        type="text"
                        placeholder='What needs to be done?'
                        value={value}
                    />
                </form>
                <TodoUl>
                    {
                        filteredTodos.map(todo =>
                            <TodoItem
                                key={todo.id}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                                todo={todo}
                            />
                        )
                    }
                </TodoUl>
                <TodoLinks>
                    <TodoLength>{todos.length} items left</TodoLength>
                    <li><Link to={`/task5/`}>All</Link></li>
                    <li><Link to={`/task5/active`}>Active</Link></li>
                    <li><Link to={`/task5/completed`}>Completed</Link></li>
                </TodoLinks>
            </TodoWrap>
        )
    }
);


const TodoWrap = styled.div`
  max-width: 500px;
  background: #fff;
  margin: 130px auto 40px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;


const TodoInput = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03); 
  box-sizing: border-box;
  font-size: 15px;
`;


const TodoUl = styled.ul`
  padding: 0;
  margin: 0;  
  list-style-type: none;
  max-height: 300px;
  overflow: auto;
`;


const TodoLinks = styled.ul`
  list-style-type: none;
  text-align: center;
  position: relative;
  li {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  &:before {
    content: '';
    background-color: #fff;
    position: absolute;
    right: 0;
    bottom: -20px;
    left: 0;
    height: 20px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;


const TodoLength = styled.li`
  position: absolute;
  top: 0;
  left: 20px;
`;

export default TodoList;