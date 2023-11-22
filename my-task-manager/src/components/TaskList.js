import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Functions for adding, deleting, and updating tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  // JSX to display tasks
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => updateTaskStatus(task.id)}>
            {task.done ? 'Undo' : 'Done'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;