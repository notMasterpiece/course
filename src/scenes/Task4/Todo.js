import React, {Component} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import styled from 'styled-components';

import TodoAll from './TodoAll';
import TodoCompleted from './TodoCompleted';
import TodoActive from './TodoActive';

class Todo extends Component {

    state = {
        value: '',
        todo: [
            {
                id: 1,
                value: 'task 1',
                completed: true
            },
            {
                id: 2,
                value: 'task 2',
                completed: true
            },
            {
                id: 3,
                value: 'task 3',
                completed: true
            },
        ]
    };


    onChange = e => {
        this.setState({
            value: e.target.value
        })
    };


    addTodo = e => {
        e.preventDefault();
        const {value} = this.state;
        if (!value.trim()) return;

        const item = {
            id: Date.now(),
            value,
            completed: false
        };

        this.setState({
            todo: [...this.state.todo, item],
            value: ''
        })

    };

    deleteTodo = id => {
        this.setState({
            todo: this.state.todo.filter(t => t.id !== id)
        })
    };


    setCompleted = id => {

        const todo = this.state.todo.map(el => {
            if (el.id !== id) {
                return el;
            } else {
                return {...el, completed: !el.completed};
            }
        });
        this.setState({
            todo
        })
    };


    render() {

        const {todo, value} = this.state;
        console.log(this.props);

        return (
            <TodoWrap>
                <TodoH1>TODO</TodoH1>

                <form onSubmit={this.addTodo}>
                    <TodoInput
                        onChange={this.onChange}
                        type="text"
                        placeholder='What needs to be done?'
                        value={value}
                    />
                </form>

                <TodoUl>
                    <Switch>
                        <Route exact path="/task4" component={() => <TodoAll deleteTodo={this.deleteTodo} setCompleted={this.setCompleted} todo={todo}/>}/>
                        <Route exact path="/task4/active" component={() => <TodoActive deleteTodo={this.deleteTodo} setCompleted={this.setCompleted} todo={todo}/>}/>
                        <Route exact path="/task4/completed" component={() => <TodoCompleted deleteTodo={this.deleteTodo} setCompleted={this.setCompleted} todo={todo}/>}/>
                        <Redirect from='/task4/*' to='/task4/'/>
                    </Switch>
                </TodoUl>

                <TodoLinks>
                    <TodoLength>{todo.length} items left</TodoLength>
                    <li><Link to='/task4'>All</Link></li>
                    <li><Link to='/task4/active'>Active</Link></li>
                    <li><Link to='/task4/completed'>Completed</Link></li>
                </TodoLinks>
            </TodoWrap>
        );
    }
};


const TodoWrap = styled.div`
  max-width: 500px;
  background: #fff;
  margin: 130px auto 40px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const TodoH1 = styled.h1`
  text-align: center;
  font-weight: normal;
  margin: 0;
  padding: 15px;
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

Todo.propTypes = {};
export default Todo;