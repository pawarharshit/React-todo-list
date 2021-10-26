import { useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const titleRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    props.addTask(title);
    event.target.reset();
  }

  return (
    <form className={classes["task-form"]} onSubmit={formSubmitHandler}>
      <div className={classes.input}>
        <label htmlFor="task">Task</label>
        <input ref={titleRef} placeholder="What do you need to do?" />
      </div>
      <button className={classes.btn} type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
