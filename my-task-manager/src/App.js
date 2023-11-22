import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
//import TaskDetails from './TaskDetails'; // Assuming you have a TaskDetails component

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Router>
        <Routes>
          {/* Route for displaying the task list */}
          {/* <Route path='/' element={<SignUp />} /> */}
          <Route path="/" element={<TaskList tasks={tasks}/>} />

          {/* Route for adding a new task */}
          <Route path="/add-task" element={<TaskForm addTask={addTask} />}/>

          {/* Route for displaying task details */}
          {/* <Route path="/task/:id">
            <TaskDetails tasks={tasks} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;