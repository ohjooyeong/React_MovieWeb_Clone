import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 26px;
  width: 130px;
  height: 50px;
  text-align: center;
  margin: 10px;
  font-weight: 500;
  color: ${props => (props.current ? "rgba(113, 88, 226,1.0)" : "red")};
`;

const SLink = styled(Link)`
  width: 80px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <List>
    <Item current={pathname === "/"}>
      <SLink to="/">Prices</SLink>
    </Item>
    <Item current={pathname === "/exchanges"}>
      <SLink to="/exchanges">Exchanges</SLink>
    </Item>
    <Item current={pathname === "/coins"}>
      <SLink to="/coins">Coins</SLink>
    </Item>
  </List>
));
