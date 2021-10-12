import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import './App.css';

function ImageLink(props)
{
  const [hower, setHower] = useState(0);

  return (
    <div  className="imageStack">
      <a href={props.link}>
        <img className="backImage" src='./back.png' style={{height:"100px"}}/>

        <img className="linkImage" src = {props.src} style={{height:hower==0?"100px":"80px"}}
            onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}></img>
      </a>
    </div>);
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