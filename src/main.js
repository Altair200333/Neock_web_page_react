import React, { useState } from 'react';
import './App.css';
import {
    Link
  } from "react-router-dom";
import pages from './pages'

function Tag(props)
{
  const [hower, setHower] = useState(0);

  return (
    <button className='tagBtn' style={{color:'white', backgroundColor:'#d14fff', padding: hower==0?'4px':'7px', borderRadius: '5px', fontWeight: 'bold'}}
      onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
      {props.tag}
    </button>)
}

function PostLink(props)
{
  const [hower, setHower] = useState(0);

  return (  
      <div onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <div style={{height:"10px", width:'500px'}}>
          <Link to = {props.info.link} className="scaleText" style={{fontSize: 20 + hower * 5, color:'#9b00de', fontWeight:'bold'}}>{props.info.text}</Link>
        </div>
        
        <p></p>

        <table cellPadding="2">
          <tbody>
            <tr style={{height: '40px'}}>
              {props.info.tags.map(item => (<td key={item}><Tag tag={item}/></td>))}
            </tr>
          </tbody>
        </table>
        <p/>
        <div className='description'>{props.info.short}</div>
        <p/>
      </div>);
}

function PostsLinks(props)
{
  return (
    <div>
    <h1 style={{ fontFamily: 'Courier New' }}>Posts</h1>
    <table cellPadding="2" >
      <tbody>
          {pages.map(item => (
            <tr key={item.text}>
                  <td><PostLink info={item}/></td>
            </tr>))}
      </tbody>
    </table>
    </div>
  );
}

function UI()
{
  const [count, setCount] = useState(0);
  return (
    <div style={{width:'400px'}}>
      <PostsLinks/>
      
    </div>
  )
}

export default UI;