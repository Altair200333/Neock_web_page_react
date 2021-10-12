import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import './App.css';

function ImageLink(props)
{
  return (
    <a href={props.link}>
      <img src = {props.src}></img>
    </a>);
}

function LinksRow(props)
{
  var items = [
    {src: './in.png', link:'https://www.instagram.com/'}, 
    {src: './fb.png', link:'https://www.facebook.com'},
  ];

  return items.map(item => (<ImageLink src={item.src} link={item.link}/>));
}

function UI()
{
  const [count, setCount] = useState(0);
  return (
    <div>
      <LinksRow/>
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