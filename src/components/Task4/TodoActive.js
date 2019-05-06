import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoActive = ({todo, deleteTodo, setCompleted}) => {
    const filtered = todo.filter(t => !t.completed);
    return filtered.map(t => (
        <TodoItem
            setCompleted={setCompleted}
            deleteTodo={deleteTodo}
            key={t.id}
            todo={t}
        />
    ))
};

TodoActive.propTypes = {
    todo: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    setCompleted: PropTypes.func.isRequired,
};

export default TodoActive;