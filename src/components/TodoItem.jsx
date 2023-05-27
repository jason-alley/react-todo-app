import PropTypes from "prop-types"

export function TodoItem({ completed, id, title, handleTodoClick, handleDeleteTodo }) {
    return (
        <li>
        <label>
            <input type="checkbox"
                defaultChecked={completed}
                onChange={e => handleTodoClick(id, e.target.checked)}
            />
            {title}
        </label>
        <button className="btn btn-delete"
            onClick={() => handleDeleteTodo(id)}
        >Delete</button>
    </li>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleTodoClick: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired
}