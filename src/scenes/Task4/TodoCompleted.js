import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoCompleted = ({todo, deleteTodo, setCompleted}) => {

    const filtered = todo.filter(t => t.completed);
    return filtered.map(t => (
        <TodoItem
            deleteTodo={deleteTodo}
            setCompleted={setCompleted}
            key={t.id}
            todo={t}
        />
    ))
};

TodoCompleted.propTypes = {
    todo: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    setCompleted: PropTypes.func.isRequired,
};

export default TodoCompleted;