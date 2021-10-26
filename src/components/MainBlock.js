import { useState } from "react";

import classes from "./MainBlock.module.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const DUMMY_TASKS = [
  { id: "t0", title: "Wake up", isDone:true },
  { id: "t1", title: "Eating Breakfast", isDone:false },
  { id: "t2", title: "Go for work", isDone:false },
];

const MainBlock = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (title) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...tasks];
      updatedTasks.push({ id: `t${Math.random().toString()}`, title: title });
      return updatedTasks;
    });
    
    console.log("additem");
  };

  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(task => task.id !== id);
      return updatedTasks;
    });
  };

  const isDoneHandler = (id) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex(task => task.id === id);
      const updatedTasks = [...prevTasks];
      updatedTasks[index].isDone = true;
      return updatedTasks;
    });
  };

  return (
    <div className={classes["main-block"]}>
      <h1 className={classes.heading}>To do:</h1>
      <ul className={classes["task-list"]}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} removeTask={removeTaskHandler} markDone={isDoneHandler} />
        ))}
      </ul>

      <TaskForm addTask={addTaskHandler} />
    </div>
  );
};

export default MainBlock;
