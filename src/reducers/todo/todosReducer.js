import {handleActions} from 'redux-actions';
import * as actions from './todosActions';

const initialState = {
    todos: [
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

export default handleActions(
    {
        [actions.addTodo]: (state, action) => ({
            todos: [...state.todos, action.payload]
        })
    },
    initialState);