import React from "react";

const TaskList = ({ tasks, fetchTasks }) => {
  const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchTasks();
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p className="task-priority">Priority: {task.priority}</p>
          <p>Completed: {task.completed ? "Yes" : "No"}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
