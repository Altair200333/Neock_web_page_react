import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
/**
 * Import all page components here
 */
import UI from './main';
import Page1 from './page1';
import Page2 from './page2';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path='/page2'>
            <Page2/>
          </Route>
          <Route path='/page1'>
            <Page1/>
          </Route>
          <Route path=''>
            <UI />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;