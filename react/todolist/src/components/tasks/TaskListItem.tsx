import React, {FC} from 'react';
import {ITask} from "../../taskModule/interfaces";
import styled from 'styled-components';
import {A} from "../basic/A";
import {TaskStatus} from "../../taskModule/enums";
import {useDispatch} from "react-redux";
import {removeTaskById, toggleTaskStatusById} from "../../taskModule/actions";
import {Row} from "../basic/Grid";

interface IProps {
  task: ITask;
}

const TaskListItemWrapper = styled(Row)`
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

const TaskListItemInnerWrapper = styled(Row)`
  align-items: center;
`

interface IChecked {
    isChecked: boolean;
}

const TaskLink = styled(A)<IChecked>`
  ${props => props.isChecked && `
    color: gray;
    text-decoration: line-through;
  `}
  max-width: 200px;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

const DeleteButton = styled.button`
  outline: transparent;
  background-color: tomato;
  border-radius: 5px;
  padding: 5px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

export const TaskListItem: FC<IProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
      dispatch(toggleTaskStatusById(task.id));
  }

  const handleDeleteTask = () => {
      dispatch(removeTaskById(task.id));
  }

  const isChecked = task.status === TaskStatus.CHECKED;

  return (
    <TaskListItemWrapper>
        <TaskListItemInnerWrapper>
            <input type="checkbox" onClick={handleCheckboxChange} checked={isChecked}/>
            <TaskLink to={`/tasks/${task.id}`} isChecked={isChecked}>
                {task.name}
            </TaskLink>
        </TaskListItemInnerWrapper>
        <DeleteButton onClick={handleDeleteTask}>
            X
        </DeleteButton>
    </TaskListItemWrapper>
  );
};
