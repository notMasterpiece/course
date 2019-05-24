import {compose, withHandlers, withState} from "recompose";
const todos = [
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
];

const enhance = compose(
    withState('value', 'setValue', ''),
    withState('todos', 'setTodos', todos),
    withHandlers({
        onChange: ({setValue}) => e => setValue(e.target.value),
        onSubmit: ({setTodos, setValue, value, todos}) => e => {
            e.preventDefault();
            if (!value.trim()) return;

            const item = {
                id: Date.now(),
                value,
                completed: false
            };
            setValue('');
            setTodos([...todos, item]);
        },
        toggleTodo: ({todos, setTodos}) => id => {
            const filtederTodos = todos.map(el => {
                if (el.id !== id) {
                    return el;
                } else {
                    return {...el, completed: !el.completed};
                }
            });
            setTodos(filtederTodos);
        },
        deleteTodo: ({todos, setTodos}) => id => {
            setTodos(todos.filter(t => t.id !== id));
        }
    })
);

export default enhance;