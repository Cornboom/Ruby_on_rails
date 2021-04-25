import styled from 'styled-components';
import {A} from "./basic/A";

const NavWrapper = styled.div`
position: fixed;
bottom: 10px;

`;

export const NavBar = () =>{
  return (
  <NavWrapper>

  <A to="/">
  Homepage
  </A>

  <A to="/tasks">
  Tasks List
  </A>


  </NavWrapper>

);
};
