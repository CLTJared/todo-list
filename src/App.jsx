import { useState, useEffect, useMemo } from "react";
import { TodoList, TodoForm } from "./components";

function App() {
  const [query, setQuery] = useState(''); // Keep search query in its own state

  const [todoList, setNewTodo] = useState(() => { // Function to check local storage and return value or empty object
    const value = localStorage.getItem("jstl")
      if(value !== null) { return JSON.parse(value) } else return []
    });
  
  useEffect(() => {
    localStorage.setItem("jstl", JSON.stringify(todoList))
  }, [todoList])

  function addTodo(title) {
    setNewTodo((currTodos) => {
      const priority = Math.floor(Math.random() * 3);
      const newTodos = [
        ...currTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          status: false,
          priority: priority,
        },
      ];

      return newTodos;
    });
  }

  // Controls the `checkbox` state - checked or not. Updates `status` between true and false
  const toggleTodo = (id, status) => setNewTodo(currTodos => currTodos.map(todo => todo.id === id ? { ...todo, status } : todo))

  // Controls deleting a record. Uses filter to update everything where the  id does not match passed id
  const deleteTodo = (id) => setNewTodo(currTodos => currTodos.filter(todo => todo.id !== id))

  //useMemo allows us to only re-update filteredList when `todoList` or `query` change and on no other changes
  //if we had more states than `todoList` and `query`, this would improve performance
  const filteredList = useMemo(() => todoList.filter(item => item.title.toLowerCase().includes(query.toLowerCase() )), [todoList, query])

  return (
    // fragment (<> </>) tags eliminate the need to have a 'real' tag to surround everything in
    <>
      <h1>Simple Todo List</h1>
      <TodoForm action={addTodo} />
      <hr />
      <h2> {/* Custom header that changes its title based on if todoList exist */}
        {todoList.length === 0 ? 'No List' : `Todo List (${todoList.length})`}
      </h2>
      {/* Search Bar for Todo List */}
      <label htmlFor="todoSearch" aria-label="Search"></label>
      <input type="search" id="todoSearch" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query} />

      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={filteredList} />

      <footer className="text-center">
        <span className="text-small">Made with <i className="fa-solid fa-heart text-conflict"></i>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        View on &nbsp;<a target="_blank" href="https://www.github.com/cltjared/" ><i className="fa-brands fa-github"></i> GitHub</a></span>
      </footer>
    </>
  );
}

export default App;
