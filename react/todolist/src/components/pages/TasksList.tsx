import {TaskListItem} from "../tasks/TaskListItem";
import {ITask} from "../../taskModule/interfaces";
import map from "lodash/map";
import {useDispatch, useSelector} from "react-redux";
import {getTaskNamesSelector, getTasksSelector} from "../../taskModule/selector";
import {addTask} from "../../taskModule/actions";
import React, {FC, useState} from "react";
import {Column, Row } from "../basic/Grid";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";
import indexOf from "lodash/indexOf";

interface IError {
    isError: boolean;
}

interface IDisabled {
    disabled?: boolean;
}

const FormWrapper = styled.div`
align-items: center;
`;

const Input = styled.input<IError & IDisabled>`
  font-size: 16px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: transparent;
  border-radius: 5px 0 0 5px;
  border-right: 0;
  ${props => props.isError && `
    border-color: tomato;
  `}
`;

const AddButton = styled.button<IDisabled>`
  font-size: 16px;
  color: white;
  background-color: #2f2f9b;
  outline: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  padding: 0 10px;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.disabled && `
      background-color: gray;
      &:hover {
        opacity: 1;
      }
  `}
`;

const ErrorWrapper = styled(Row)`
  color: tomato;
  justify-content: center;
  margin: 10px 0;
`;

const TaskListWrapper = styled(Column)`
margin: 10px 0;
align-items: flex-start;
`;

const TitleWrapper = styled(Row)`
justify-content: center;
margin: 10px 0;
font-size: 32px;
font-weight: bold;
`;

interface IFormProps {
    value: string;
    error: string;
    onChange: (value: string) => void;
    onButtonClick: () => void;
    placeholder?: string;
    buttonLabel?: string;
    disabled?: boolean;
}

export const AddForm: FC<IFormProps> = ({
    value,
    error,
    onChange,
    onButtonClick,
    placeholder = "Input task name",
    buttonLabel = "Add",
    disabled= false,
}) => {
    const ref = React.createRef<HTMLInputElement>();

    const handleInputChange = () => {
        const value = ref.current?.value;
        onChange(value || "");
    }

    return (
        <FormWrapper>
            <Row>
                <Input
                    type="text"
                    ref={ref}
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    isError={!!error}
                    disabled={disabled}
                />
                <AddButton onClick={onButtonClick} disabled={disabled}>
                    {buttonLabel}
                </AddButton>
            </Row>
            {error && (
                <ErrorWrapper>
                    {error}
                </ErrorWrapper>
            )}
        </FormWrapper>
    );
}

export const TasksList = () => {
  const tasks = useSelector(getTasksSelector);
  const dispatch = useDispatch();

  const [currName, setCurrName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const taskNames = useSelector(getTaskNamesSelector);

  const validateName = (name: string) => {
      if (isEmpty(name)) {
        setError("Name should not be empty");
      } else if (indexOf(taskNames as unknown as string[], name) > -1) {
          setError("Name must be unique");
      } else {
          setError("");
      }
  }

  const addNewTask = () => {
      validateName(currName);
      if (!error && currName) {
          dispatch(addTask(currName));
          setCurrName("");
      }
  };

  const handleInputChange = (value: string) => {
      setCurrName(value || "");
      validateName(value || "");
  }

  return (
    <Column>
      <TitleWrapper>
          TasksList
      </TitleWrapper>
      <AddForm
        value={currName}
        onChange={handleInputChange}
        onButtonClick={addNewTask}
        error={error}
      />
      <TaskListWrapper>
      {map(tasks, (task: ITask) => {
        return (
          <TaskListItem key={task.id} task={task}/>
        );
      })}
      </TaskListWrapper>
    </Column>
  );
};
