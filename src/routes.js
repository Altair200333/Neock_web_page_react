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

import pages from './pages'

function Routes() {
  return (
    <Router>
        <Switch>
          {pages.map(item => <Route path={item.link}>{item.page} </Route>)}
         
          <Route path=''>
            <UI />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes;