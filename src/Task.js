import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Task2 from './components/HOC/Task2';
import Todo from './components/Task4/Todo';
import TodoList from './components/Task5/TodoList';


const Task = () => {
    return (
        <Router>
            <Switch>
                <Route path='/task2' component={App} />
                <Route path='/task3' component={Task2} />
                <Route path='/task4' component={Todo} />
                <Route path='/task5/' component={TodoList} />
                <Redirect from='/' to='/task2/'/>
            </Switch>
        </Router>
    );
};


export default Task;