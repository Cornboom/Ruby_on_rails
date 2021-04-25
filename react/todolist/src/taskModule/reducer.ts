import {ITask, ITaskState} from "./interfaces";
import {createReducer} from "redux-act";
import {TaskStatus} from "./enums";
import {addTask, removeTaskById, toggleTaskStatusById} from "./actions";
import size from "lodash/size";
import union from "lodash/union";
import remove from "lodash/remove";
import first from "lodash/first";
import filter from "lodash/filter";
import Lockr from "lockr";

const TASKS_SESSION_NAME = "TODO_TASKS";

const defaultValues: ITaskState = {
  tasks: Lockr.get(TASKS_SESSION_NAME)
};




export const taskReducer = createReducer({}, defaultValues);

taskReducer.on(addTask, (state, name) => {
  const newTask = {
    name,
    id: size(state.tasks).toString(),
    status: TaskStatus.CREATED
  }
  const tasks = union (state.tasks, [newTask]);
  Lockr.set(TASKS_SESSION_NAME, tasks);

  return ({
    ...state,
    tasks
        });
});


taskReducer.on(removeTaskById, (state, id) => {
    remove(state.tasks, (task: ITask) => task.id === id);
    const tasks = [...state.tasks];
    Lockr.set(TASKS_SESSION_NAME, tasks);
    const newState = {...state};
    return ({
        ...newState,
        tasks
    });
});

taskReducer.on(toggleTaskStatusById, (state,id) =>{
  let task: ITask = first(filter(state.tasks, (task: ITask) => task.id===id)) as ITask;
  task.status = task.status === TaskStatus.CHECKED ? TaskStatus.CREATED : TaskStatus.CHECKED;
  const tasks = union (state.tasks, [task]);
  Lockr.set(TASKS_SESSION_NAME, tasks);

  return ({
    ...state,
    tasks
  });
});
