
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState("");       // Current input
  const [todos, setTodos] = useState([]);     // List of tasks

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Do not remove the main div */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button
        onClick={handleAddTodo}
        style={{ padding: "8px 12px" }}
      >
        Add Todo
      </button>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "15px", padding: "4px 8px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
