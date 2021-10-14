import React, { useState } from 'react';
import './App.css';

import {
    Link
  } from "react-router-dom";

function ImageLink(props)
{
  const [hower, setHower] = useState(0);
  var baseW = "40px";
  var scaledW = "30px";
  return (
    <div  className="imageStack">
      <a href={props.link} onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <img className="backImage" src='./none.png' style={{height:baseW}}/>

        <img className="linkImage" src = {props.src} style={{height:hower==0?baseW:scaledW}}
            ></img>
      </a>
    </div>);
}

function LinksRow(props)
{
  var items = [
    {src: './github.svg', link:'https://github.com/Altair200333'}, 
    {src: './twitter.svg', link:'https://twitter.com/Dr_Mihael_'},
    {src: './vk.svg', link:'https://vk.com/petrmp'},
    {src: './instagram.svg', link:'https://www.instagram.com/_neo_mp_/'},
  ];

  return (
    <table align="center" cellPadding="10" >
        <tbody>
          <tr>
            <td><h2 style={{ fontFamily: 'Courier New' }}>Name&nbsp; </h2></td>
            {items.map(item => (<td key={item.link}><ImageLink src={item.src} link={item.link}/></td>))}
          </tr>
        </tbody>

    </table>
    );
}

function Tag(props)
{
  return (<div style={{color:'white', backgroundColor:'#9b00de', padding: '4px', borderRadius: '5px', fontWeight: 'bold'}}>{props.tag}</div>)
}

function PostLink(props)
{
  const [hower, setHower] = useState(0);

  return (  
      <div onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <div style={{height:"20px"}}>
          <Link to = {props.info.link} className="scaleText" style={{fontSize: 20 + hower * 5, color:'#9b00de'}}>{props.info.text}</Link>
        </div>
        
        <p></p>

        <table cellPadding="2">
          <tbody>
            <tr>
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
      <LinksRow/>
      <PostsLinks/>
      
    </div>
  )
}

export default UI;