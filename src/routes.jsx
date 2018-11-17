import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Store from "./store/store";
import Error from "./error/error";
import StoreList from "./storeList/storeList";

export default props => (
    <Router history={hashHistory}>
        <Route path='/list' component={StoreList} />
        <Route path='/store/:id' component={Store} />
        <Route path='/error' component={Error} />
        <Redirect from='*' to='/list' />
    </Router>
)