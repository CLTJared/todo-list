import { TodoItem } from './listItem';

export function TodoList({ deleteTodo, toggleTodo, todos }) {

const sortable = todos.sort((a,b) => b.priority - a.priority)

    return (
        <ul>
            {sortable.map(todo => {
                return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} {...todo} />
            })}
        </ul>
    )
}