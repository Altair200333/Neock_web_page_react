import React from 'react';
import ReactDOM from 'react-dom';


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

function CenterAll()
{
  return (
  <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
    <LinksRow/>
  </div>)
}

ReactDOM.render(<CenterAll/>, document.getElementById('root'));