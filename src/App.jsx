import { useState } from "react";
import "./styles.css";



export default function App() {
  const [todo, setTodo] = useState("")

  const handleTodoChange = (e) => {
    setTodo(e.target.value)
  }


  return(
    <div className="wrapper">
      <form className="todo-form">
        <div className="todo-form__input">
          <label htmlFor="todo">Add Item</label>
          <input value={todo} onChange={handleTodoChange} type="text" id="todo" />
        </div>
        <button className="button">Add</button>
      </form>
      <h1>Todos List</h1>
      <ul className="todo-list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li> 
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-delete">Delete</button>
        </li> 
      </ul>
    </div>
  )
}