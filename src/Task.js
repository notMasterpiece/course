import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Task2 from './scenes/HOC/Task2';
import Todo from './scenes/Task4/Todo';
import TodoList from './scenes/Task5/TodoList';
import ReduxTodo from './scenes/Task8/App';


const Task = () => {
    return (
        <Router>
            <Switch>
                <Route path='/task2' component={App} />
                <Route path='/task3' component={Task2} />
                <Route path='/task4' component={Todo} />
                <Route path='/task5/' component={TodoList} />
                <Route path='/task8/' component={ReduxTodo} />
                <Redirect from='/' to='/task2/'/>
            </Switch>
        </Router>
    );
};


export default Task;