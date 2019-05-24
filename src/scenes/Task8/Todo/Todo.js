import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Link} from 'react-router-dom';
import { routes } from '../App';
import List from '../List/List';
import styled from "styled-components";


import { connect } from 'react-redux';
import {compose, withState, withHandlers} from "recompose";
import * as todosOperations from '../../../reducers/todo/todosOperation';


const mapStateToProps = state => ({
    todos: state.todos.todos
});

const mapDispatchToProps = {
  addTodo: todosOperations.actions.addTodo
};

const enhancer = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withState('value', 'onChange', ''),
    withHandlers({
        onSubmit: ({ value, addTodo,  onChange}) => e => {
            e.preventDefault();
            if (!value.trim()) return;
            const todo = {
                id: Date.now(),
                value,
                completed: false
            };
            addTodo(todo);
            onChange('');
        }
    })
);

const Todo = ({todos, value, onChange, onSubmit}) => {

    return (
        <TodoWrap>
            <form onSubmit={onSubmit}>
                <TodoInput
                    onChange={ e => onChange(e.target.value)}
                    type="text"
                    placeholder='What needs to be done?'
                    value={value}
                />
            </form>
            {
                todos.map(todo => (
                    <p key={todo.id}>{todo.value}</p>
                ))
            }
            <Switch>
                <Route exact path={routes.home} component={List} />
                <Route exact path={routes.active} component={List} />
                <Route exact path={routes.completed} component={List} />
            </Switch>
            <TodoLinks>
                <TodoLength>{todos.length} items left</TodoLength>
                <li><Link to={routes.home}>All</Link></li>
                <li><Link to={routes.active}>Active</Link></li>
                <li><Link to={routes.completed}>Completed</Link></li>
            </TodoLinks>
        </TodoWrap>

    );
};

Todo.propTypes = {
    todos: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};



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

export default enhancer(Todo);