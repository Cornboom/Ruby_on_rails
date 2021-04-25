import {useParams} from 'react-router';


export const TaskDetailPage = () => {
  const {id}= useParams<any>();
  return (
    <>
    TaskDetailPage {id}
    </>
  );
};
