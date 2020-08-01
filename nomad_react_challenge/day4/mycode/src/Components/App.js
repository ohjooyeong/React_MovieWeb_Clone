import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 242, 0, 1);
  position: absolute;
  width: 500px;
  height: 250px;
  margin: -150px 0px 0px -200px;
  top: 40%;
  left: 50%;
  padding: 5px;
  text-align: center;
`;

const NavC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
`;

const TitleH = styled.h1`
  font-size: 60px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  margin: 30px;
`;

function App() {
  return (
    <>
      <Container>
        <NavC>
          <TitleH>Coin Explorer</TitleH>
          <Router />
          <GlobalStyles />
        </NavC>
      </Container>
    </>
  );
}
export default App;
