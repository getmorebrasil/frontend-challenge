/* This file takes care of routing*/
import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed.js';
import StoreDetails from './pages/StoreDetails.js';

function Routes() {
    return(
        <Switch> {/* Ensures Routes returns the correct component based on URl */}
            <Route path="/" exact component={Feed}/> 
            <Route path="/store" component={StoreDetails}/> 
        </Switch>
    );
}

export default Routes;