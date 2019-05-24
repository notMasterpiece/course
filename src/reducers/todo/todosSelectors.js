import { createSelector } from 'reselect';

const todos = state => state.todos.todos;


const getTodos = createSelector(
    todos,
    state => state
);


