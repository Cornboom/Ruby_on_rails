import styled from "styled-components";


const TitleWrapper = styled.p`
justify-content: center;
margin: 10px 0;
font-size: 32px;
font-weight: bold;
color: transparent;
-webkit-background-clip: text;
background-clip: text;
background-image: linear-gradient(to right, gold, fuchsia);
`;

export const Homepage = () => {
  return (
    <>
      <TitleWrapper>This is Homepage</TitleWrapper>
    </>
  );
};
