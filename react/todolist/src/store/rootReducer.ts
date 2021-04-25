import {combineReducers} from 'redux';
import {taskReducer} from "../taskModule/reducer";
import {ITaskState} from "../taskModule/interfaces";


export interface IAppState{
  tasks: ITaskState
};

export const rootReducer = combineReducers({
  tasks: taskReducer
});
