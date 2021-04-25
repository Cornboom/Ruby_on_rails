import {TaskStatus} from "./enums";

export interface ITask {
  name: string;
  id: string;
  status: TaskStatus;
}

export interface ITaskState {
  tasks: ITask[];
}
