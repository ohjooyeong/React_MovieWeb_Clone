import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import TV from "../routes/TV";
import Search from "../routes/Search";
import Header from "./Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </BrowserRouter>
);
