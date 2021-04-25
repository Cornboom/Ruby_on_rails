import React from 'react';
import {Homepage} from "./components/pages/Homepage";
import {TasksList} from "./components/pages/TasksList";
import {TaskDetailPage} from "./components/pages/TaskDetailPage";
import {NavBar} from "./components/NavBar";
import {
        BrowserRouter,
        Switch,
        Route,
        Redirect
        } from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



function App() {
  return (
      <AppWrapper>
          <BrowserRouter>
            <Switch>

                  <Route path="/" exact>
                      <Homepage/>
                  </Route>

                  <Route path="/tasks" exact>
                      <TasksList/>
                  </Route>

                  <Route path="/tasks/:id" exact>
                      <TaskDetailPage/>
                  </Route>

                  <Route>
                      <Redirect to="/"/>
                  </Route>

              </Switch>

              <NavBar/>
            </BrowserRouter>

      </AppWrapper>





  );
}

export default App;
