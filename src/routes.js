import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './component/Home/Home.js';
import Timer from './component/Timer/Timer.js';

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/timer' component={Timer} />
        </Switch>
    </div>
)