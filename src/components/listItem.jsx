import { useRef, useEffect } from 'react'

export function TodoItem({
  deleteTodo, toggleTodo,
  id, status, priority, title,
  }) {

  const handleDrag = (e) => {

  }

  return (
    <li className={`priority-${priority}`} >
      <label className={status ? "strike" : ""}>
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={status}
        />
        <span>{title}</span>
      </label>
      <button className="btn btn-secondary" onClick={() => deleteTodo(id)} type="button">
        <span><i className="fa-solid fa-delete-left"></i> Delete</span>
      </button>
    </li>
  );
}

