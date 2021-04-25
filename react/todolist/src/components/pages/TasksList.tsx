import {TaskListItem} from "../tasks/TaskListItem";
import {ITask} from "../../taskModule/interfaces";
import map from "lodash/map";


export const TasksList = () => {
  const tasks: ITask[] = [
    {name: "Task 1",
      id: "1"},
    {name: "Task 2",
      id:"2"}
  ];


  return (
    <>
      <p>TasksList</p>
      {map(tasks, (task: ITask) => {
        return (
          <TaskListItem key={task.id} task={task}/>
        );
      })}
    </>
  );
};
