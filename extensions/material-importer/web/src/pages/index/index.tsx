import '@babel/polyfill';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../../router/index';
import './index.scss';

const appRoot = (
    <Router>
        <Switch>
            {routes.map((item, index) => {
                return <Route exact={true} path={item.path} component={item.component} key={index} />;
            })}
            <Redirect from='/' to={routes[0].path} />
        </Switch>
    </Router>
);

ReactDOM.render(
    appRoot,
    document.getElementById('app')
);