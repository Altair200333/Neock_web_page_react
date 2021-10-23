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
    <button className='tagBtn' style={{color:'white', backgroundColor:'#8a2be2', padding: hower==0?'4px':'7px', borderRadius: '5px', fontWeight: 'bold'}}
      onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}} onClick={() => {props.setFiler(props.tag)}}>
      {props.tag}
    </button>)
}

function PostLink(props)
{
  const [hower, setHower] = useState(0);

  return (  
      <div onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <div style={{height:"10px", width:'500px'}}>
          <Link to = {props.info.link} className="scaleText" style={{fontSize: 20 + hower * 5, color:'#8a2be2', fontWeight:'bold'}}>{props.info.text}</Link>
        </div>
        
        <p/>

        <table cellPadding="2">
          <tbody>
            <tr style={{height: '40px'}}>
              {props.info.tags.map(item => (<td key={item}><Tag tag={item} setFiler={props.setFiler}/></td>))}
            </tr>
          </tbody>
        </table>

        <div className='description'>{props.info.short}</div>
        <p/>
      </div>);
}

export default PostLink;