import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
//import TaskDetails from './TaskDetails'; // Assuming you have a TaskDetails component

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <Routes>
      <div>
          {/* Route for displaying the task list */}
          <Route exact path="/">
            <TaskList tasks={tasks} />
          </Route>

          {/* Route for adding a new task */}
          <Route path="/add-task">
            <TaskForm addTask={addTask} />
          </Route>

          {/* Route for displaying task details */}
          {/* <Route path="/task/:id">
            <TaskDetails tasks={tasks} />
          </Route> */}
      </div>
      </Routes>
    </Router>
  );
};

export default App;