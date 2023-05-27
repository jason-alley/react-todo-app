import "./styles.css";
export default function App() {
  return(
    <div className="wrapper">
      <form className="todo-form">
        <div className="todo-form__input">
          <label htmlFor="todo">Add Item</label>
          <input type="text" id="todo" />
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