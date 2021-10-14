import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import './App.css';
//https://www.npmjs.com/package/react-toggle

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
    {src: './tv.png', link:'https://www.twitter.com'},
    {src: './gh.png', link:'https://github.com/Altair200333'},

  ];

  return (
    <table align="center" cellPadding="2" >
        <tbody>
          <tr>
            <td><h2 style={{ fontFamily: 'Courier New' }}>Altair 200333 &nbsp; </h2></td>
            {items.map(item => (<td key={item.link}><ImageLink src={item.src} link={item.link}/></td>))}
          </tr>
        </tbody>

    </table>
    );
}

function PostLink(props)
{
  const [hower, setHower] = useState(0);

  return (  
      <div onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}} style={{backgroundColor:'wheat'}}>
        <div style={{height:"20px"}}>
          <a href = {props.info.link} className="scaleText" style={{fontSize: 20 + hower * 5}}>{props.info.text}</a>
        </div>
        <p>{props.info.short}</p>
      </div>);
}
function PostsLinks(props)
{
  var posts = [
    {text: 'Post #1', short:"nope", link:'#'}, 
    {text: 'Post #2', short:"yep", link:'#'},
    {text: 'Post #3', short:"meow", link:'#'},

  ];

  return (
    <div>
    <h1 style={{ fontFamily: 'Courier New' }}>Posts</h1>
    <table cellPadding="2" >
      <tbody>
          {posts.map(item => (<tr key={item.text}><td><PostLink info={item}/></td></tr>))}
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