import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import UI from './main';
import Page1 from './page1';
import Page2 from './page2';

import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//https://www.npmjs.com/package/react-toggle

function CenterAll()
{
  return (
  <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
    <UI/>
  </div>)
}

function App() {
  return (
    <Router>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Page2/>
          </Route>
          <Route path="/users">
            <Page1/>
          </Route>
          <Route path="/">
            <UI />
          </Route>
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));