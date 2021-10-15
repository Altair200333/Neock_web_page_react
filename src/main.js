import React, { useState } from 'react';
import './App.css';
import {
    Link
  } from "react-router-dom";

function Tag(props)
{
  const [hower, setHower] = useState(0);

  return (
    <button className='tagBtn' style={{color:'white', backgroundColor:'#9b00de', padding: hower==0?'4px':'7px', borderRadius: '5px', fontWeight: 'bold'}}
      onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
      {props.tag}
    </button>)
}

function PostLink(props)
{
  const [hower, setHower] = useState(0);

  return (  
      <div onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <div style={{height:"20px"}}>
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
        <p>{props.info.short}</p>
      </div>);
}

function PostsLinks(props)
{
  var posts = [
    {text: 'What is Lorem Ipsum?', short:"Lorem Ipsum is simply dummy text of the printing and typesetting", link:'/page1', tags: ['box', 'cat', 'kurwa']}, 
    {text: 'Where does it come from?', short:"Contrary to popular belief, Lorem Ipsum is not simply random text ", link:'/page2', tags: ['duck', 'mouse', 'rat']},
    {text: 'Why do we use it?', short:"There are many variations of passages of Lorem Ipsum available", link:'/page2', tags: ['game', 'vr', 'cd']},

  ];

  return (
    <div>
    <h1 style={{ fontFamily: 'Courier New' }}>Posts</h1>
    <table cellPadding="2" >
      <tbody>
          {posts.map(item => (
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
    <div>
      <PostsLinks/>
      
    </div>
  )
}

export default UI;