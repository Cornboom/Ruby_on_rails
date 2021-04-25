import {useParams} from 'react-router';
import {useSelector} from "react-redux";
import {getTaskByIdSelector} from "../../taskModule/selector";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
font-size: 20px;
color: white;
background-color: #2f2f9b;
outline: transparent;
border: 0;
cursor: pointer;
border-radius: 5px;
padding: 0 10px;

&:hover {
  opacity: 0.8;
}
`;


export const TaskDetailPage = () => {
  const {id} = useParams<any>();
  const task = useSelector(getTaskByIdSelector(id));
  const history = useHistory();

  const handleClick = () => {
      history.push("/tasks");
  }
  return (
    <div>
      <p>Name: {task?.name}</p>
      <p>Id: {task?.id}</p>
      <p>Status: {task?.status}</p>
      <Button onClick={handleClick}>
          Back
      </Button>
    </div>
  );
};
