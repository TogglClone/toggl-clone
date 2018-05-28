import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Timer from './components/Timer/Timer.js';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/timer' component={Timer} />
        </Switch>
    </div>
)