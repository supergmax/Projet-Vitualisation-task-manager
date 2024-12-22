import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the API
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setTasks(data); // Update tasks only if response is an array
      } else {
        setTasks([]); // Default to an empty array if response is invalid
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Set tasks to an empty array on error
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <h1>Task Management</h1>
      {/* Input Form */}
      <TaskForm fetchTasks={fetchTasks} />
      {/* Task Grid */}
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <div className="task-grid">
          <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default App;
