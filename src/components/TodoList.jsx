import { useAutoAnimate } from '@formkit/auto-animate/react';
import { TodoItem } from './listItem';

export function TodoList({ deleteTodo, toggleTodo, sort, updatePriority, todos }) {

const [parent, enableAnimations] = useAutoAnimate( /* optional config*/ )

let sortable;

switch (sort) {
    case 'asc':
        sortable = todos.sort((a,b) => b.priority - a.priority);
        break;
    case 'dsc':
        sortable = todos.sort((a,b) => a.priority - b.priority);
        break;
    case 'manual':
        sortable = todos;
        break;
    default:
        sortable = todos;
        break;
}

    return (
        <ul ref={parent}>
            {sortable.map(todo => {
                return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updatePriority={updatePriority} {...todo} />
            })}
        </ul>
    )
}