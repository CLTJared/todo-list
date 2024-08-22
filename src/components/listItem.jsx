// import { useRef, useEffect } from 'react'

export function TodoItem({
  deleteTodo, toggleTodo, updatePriority,
  id, status, priority, title,
  }) {

  // const handleDrag = (e) => {

  // }

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
        <i className="fa-solid fa-ban"></i>
      </button>
      &nbsp;
      <button className="btn btn-secondary" onClick={() => updatePriority(id, priority)} type="button">
        <i className="fa-solid fa-arrow-down-up-across-line"></i>
      </button>
    </li>
  );
}

