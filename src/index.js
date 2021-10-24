import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

import Header from './header'

import Routes from './routes';
import Switch from "react-switch";
import { IoSunnyOutline } from 'react-icons/io5';
import { BsMoon } from "react-icons/bs";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";

//https://www.npmjs.com/package/react-toggle


function CenterAll(props)
{
  return (
  <div className='CenterAll'> 
    {props.data}
  </div>)
}

function SwitchIcon(props)
{
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.icon}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
function MainPage()
{
  document.title = "Mike Petrenko"
  const [themeState, setThemeState] = useState('dark');

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (themeState === 'light') {
      setThemeState('dark');
    // otherwise, it should be light
    } else {
      setThemeState('light');
    }
  }

  return (
  <ThemeProvider theme={themeState === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles />

    <CenterAll data={
      <div>
      <table>
      <tbody>
        <tr>
          <td>
            <Header/>
          </td>
          <td style={{width: '100px'}}/>
          <td style={{paddingTop:'15px'}}>
            <Switch onChange={toggleTheme} checked={themeState == 'light' ? false : true} onColor='#d9d9d9' offColor='#58555A'
              onHandleColor = '#575757' offHandleColor='#d9d9d9'
              checkedIcon={ <SwitchIcon icon={<IoSunnyOutline size='22px' color='black'/>}/>}
              uncheckedIcon={ <SwitchIcon icon={<BsMoon size='20px' color='white'/>}/>}/>
          </td>
        </tr>
      </tbody>
    </table>
    <Routes/>
    </div>
    }/>
    
    

    </>
  </ThemeProvider>)
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));