import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoAll = ({todo, deleteTodo, setCompleted}) => {
    return todo.map(t => (
        <TodoItem
            deleteTodo={deleteTodo}
            setCompleted={setCompleted}
            key={t.id}
            todo={t}
        />
    ))
};

TodoAll.propTypes = {
    todo: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    setCompleted: PropTypes.func.isRequired,
};

export default TodoAll;