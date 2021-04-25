import {FC} from 'react';
import {ITask} from "../../taskModule/interfaces";
import {useHistory} from 'react-router';
import styled from 'styled-components';

interface IProps {
  task: ITask;
}

const TaskListItemWrapper = styled.div`
cursor: pointer;
`;


export const TaskListItem: FC<IProps> = ({task}) =>{
  const history = useHistory();

  const handleClick = () =>{
    history.push("/tasks/"+task.id);
  };

  return (
  <TaskListItemWrapper onClick={handleClick}>
    {task.name}
  </TaskListItemWrapper>);
};
