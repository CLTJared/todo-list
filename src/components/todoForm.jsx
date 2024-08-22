import { useRef } from "react";

export function TodoForm({ action }) {
    const newItem = useRef(); // Instead of using State, use Ref since we don't care to update every keypress

    const handleForm = (event) => {
        event.preventDefault(); // Prevent form submit from refreshing page
        if (newItem.current.value.trim() == '') return; // Kill handling if the value is empty after trim()
        action(newItem.current.value.trim());

        event.target.reset() // reset form
    };

    return (
        <form name="form-todo" className="" onSubmit={handleForm}>
            <label htmlFor="todoItem">New ToDo Item:</label>
            <input key={1} type="text" id="todoItem" ref={newItem} autoFocus />

            <button className="btn btn-full">
                <i className="fa-solid fa-square-plus"></i> Add
            </button>
        </form>
    );
}