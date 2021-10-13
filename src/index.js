import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import './App.css';

function ImageLink(props)
{
  const [hower, setHower] = useState(0);
  var baseW = "60px";
  var scaledW = "40px";
  return (
    <div  className="imageStack">
      <a href={props.link} onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
        <img className="backImage" src='./back.png' style={{height:baseW}}/>

        <img className="linkImage" src = {props.src} style={{height:hower==0?baseW:scaledW}}
            ></img>
      </a>
    </div>);
}

function LinksRow(props)
{
  var items = [
    {src: './in.png', link:'https://www.instagram.com/'}, 
    {src: './fb.png', link:'https://www.facebook.com'},
    {src: './gh.png', link:'https://github.com/Altair200333'},

  ];

  return (
    <table align="center" cellspacing="2" cellpadding="2" >
        <tr>
          <td style={{color: "#575959"}}><h2>Altair 200333 &nbsp; </h2></td>
          {items.map(item => (<td><ImageLink src={item.src} link={item.link}/></td>))}
        </tr>
    </table>
    );
}
function PostsLinks(props)
{
  return (<h1>Kurwa</h1>);
}

function UI()
{
  const [count, setCount] = useState(0);
  return (
    <div>
      <LinksRow/>
      <PostsLinks/>
      <p>Text {count}</p>
      <p className='color' onMouseEnter ={() => {setCount(count + 1)}} onMouseLeave={()=>{setCount(count - 1)}} 
                    style={{color: count==1?"red":"gray"}}>
        Btn
      </p>
    </div>
  )
}

function CenterAll()
{
  return (
  <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
    <UI/>
  </div>)
}

ReactDOM.render(<CenterAll/>, document.getElementById('root'));