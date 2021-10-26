import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  const task = props.task;
  const removeTaskHandler = () => {
    props.removeTask(task.id);
  };
  const taskDoneHandler = () => {
    props.markDone(task.id);
  }

  let taskItemClasses = [classes["list-item"]];
  if(task.isDone) {
    taskItemClasses.push(classes["isDone"]);
  } else {
    taskItemClasses.push(classes["isNotDone"]);
  }

  return (
    <li className={taskItemClasses.join(" ")}>
      <p>{task.title}</p>
      <div>
        {!task.isDone && <button onClick={taskDoneHandler}>
          <i className="fas fa-check-circle"></i>
        </button>}
        <button onClick={removeTaskHandler}>
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
