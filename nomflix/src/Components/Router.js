import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import TV from "../routes/TV";
import Search from "../routes/Search";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exactcomponent={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);
