import React, { useState } from "react";

const TaskItem = ({ task, index, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    editTask(index, updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
          />
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
            }
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
