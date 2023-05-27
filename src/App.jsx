import { useEffect, useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {

  /**
   * 1. We create a state variable called todos.  
   * 2. We initialize the state variable with the value from localStorage.
   * 3. If the value from localStorage is null, then we return an empty array.
   * 4. If the value from localStorage is not null, then we parse the value from localStorage and return it.
   */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Todos")
    if ( null === localValue ) {
      return []
    }
    return JSON.parse(localValue)
  })

  /** 
   * 1. We create a side effect that runs every time the todos array changes.
  */
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])

  /** 
   * A function that adds a new todo to the todos array.
  */
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
   * A function that deletes a todo from the todos array.
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