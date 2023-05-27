import { useState } from "react";
import "./styles.css";



export default function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleTodoChange = (e) => {
    setTodo(e.target.value)
  }

  /* 
    1. Prevent the default behavior of the form.
    2. Create a new todo object with the todo and a unique id.
    3. Add the todo object to the todos array.
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    if ( todo === "" ) {
      return
    }
    setTodos(currentTodos => {
      return [...currentTodos,
      {
        id: crypto.randomUUID(),
        title: todo,
        completed: false
      },
      ]
    })
    setTodo("")
  }

  /** 
   * A function that checks if the todo id matches the id of the todo that was clicked.
   * If it matches, then we toggle the completed property of the todo.
   * If it doesn't match, then we return the todo as is.
  */
  const handleTodoClick = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !completed }
        }
        return todo
      })
    })
  }

  /**
   * Afunction that deletes a todo from the todos array.
   * It filters out the todo that matches the id of the todo that was clicked.
   */
  const handleDeleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="todo-form__input">
          <label htmlFor="todo">Add Item</label>
          <input value={todo} onChange={handleTodoChange} type="text" id="todo" />
        </div>
        <button className="button">Add</button>
      </form>
      <h1>Todos List</h1>
      <ul className="todo-list">
        {todos.length === 0 && <p>You Currently have nothing to do.</p>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" 
                  defaultChecked={todo.completed} 
                    onChange={ e => handleTodoClick(todo.id, e.target.checked)}
                  />
                {todo.title}
              </label>
              <button className="btn btn-delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}