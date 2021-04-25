import {createSelector} from "reselect";
import {IAppState} from "../store/rootReducer";
import {ITask, ITaskState} from "./interfaces";
import filter from "lodash/filter";
import first from "lodash/first";
import map from "lodash/map";
import uniq from "lodash/uniq";


const baseSelector = (state: IAppState): ITaskState => state.tasks;

export const getTasksSelector = createSelector(
  baseSelector,
  ({tasks}) => tasks
);

export const getTaskByIdSelector = (id: string) => createSelector(
  getTasksSelector,
  (tasks) => first(filter(tasks, (task: ITask) => task.id === id ))
)

export const getTaskNamesSelector = createSelector (
  getTasksSelector,
  (tasks) => uniq(map(tasks, (task: ITask)=> task.name))
);
