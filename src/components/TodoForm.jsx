import { useState } from "react"
import PropTypes from "prop-types"

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState("")

    /* 
   1. Prevent the default behavior of the form.
   2. Create a new todo object with the todo and a unique id.
   3. Add the todo object to the todos array.
  */
    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo === "") return
        addTodo(todo)
        setTodo("")
    }

    const handleTodoChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="todo-form__input">
                <label htmlFor="todo">Add Item</label>
                <input
                    value={todo}
                    onChange={handleTodoChange} type="text" id="todo" />
            </div>
            <button className="button">Add</button>
        </form>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}