import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
