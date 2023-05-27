import PropTypes from "prop-types"
import { TodoItem } from "./TodoItem"

export function TodoList({ todos, handleTodoClick, handleDeleteTodo }) {
    return (
        <ul className="todo-list">
            {todos.length === 0 && <p>You Currently have nothing to do.</p>}
            {todos.map(todo => {
                return (
                   <TodoItem 
                        key={todo.id}
                        {...todo}
                        handleTodoClick={handleTodoClick}
                        handleDeleteTodo={handleDeleteTodo}
                   />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleTodoClick: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}