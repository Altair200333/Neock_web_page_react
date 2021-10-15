import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

import Header from './header'

import Routes from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//https://www.npmjs.com/package/react-toggle


function CenterAll(props)
{
  return (
  <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', }}> 
    {props.data}
  </div>)
}
function MainPage()
{
  return (
  <div>
    <CenterAll data={<Header/>}/>

    <CenterAll data={<Routes/>}/>
  </div>)
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));