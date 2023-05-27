import { useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";



export default function App() {
  const [todos, setTodos] = useState([])


  const addTodo = (title) => {
    setTodos(currentTodos => {
            return [...currentTodos,
            {
                id: crypto.randomUUID(),
                title,
                completed: false
            },
            ]
        })
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
      <TodoForm addTodo={addTodo} />
      <h1>Todos List</h1>
      <TodoList 
        todos={todos} 
        handleTodoClick={handleTodoClick}
        handleDeleteTodo={handleDeleteTodo}
        />
    </div>
  )
}