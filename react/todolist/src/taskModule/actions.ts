import {createAction} from "redux-act";

export const addTask = createAction<string>(
  "ADD_TASK",
  (name :string) => name
);

export const removeTaskById = createAction<string>(
  "REMOVE_TASK",
  (id :string) => id
);

export const toggleTaskStatusById = createAction<string>(
  "TOGGLE_TASK_BY_ID",
  (id: string) => id
);
