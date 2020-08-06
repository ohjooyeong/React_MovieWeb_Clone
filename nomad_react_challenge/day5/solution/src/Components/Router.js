import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Details from "../Screens/Details";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Prices} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/coins" exact component={Coins} />
          <Route path="/coins/:id" component={Details} />
        </Switch>
      </>
    </Router>
  );
};
