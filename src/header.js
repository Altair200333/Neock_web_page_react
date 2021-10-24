import React, { useState } from 'react';
import './App.css';


function ImageLink(props)
{
  const [hower, setHower] = useState(0);
  var baseW = "40px";
  var scaledW = "25px";
  return (
    <div className="imageStack"  onMouseEnter ={() => {setHower(1)}} onMouseLeave={()=>{setHower(0)}}>
      <a href={props.link}>
        <img className="backImage" src='./none.png' style={{height:baseW}}/>

        <img color='red' className="linkImage linkSvg" src = {props.src} style={{height:hower==0?baseW:scaledW}}></img>
      </a>
    </div>);
}


function Header(props)
{
  var items = [
    {src: './github.svg', link:'https://github.com/Altair200333'}, 
    {src: './twitter.svg', link:'https://twitter.com/Dr_Mihael_'},
    {src: './vk.svg', link:'https://vk.com/petrmp'},
    {src: './instagram.svg', link:'https://www.instagram.com/_neo_mp_/'},
  ];

  return (
    <table  style={{backgroundColor:'transparent', paddingTop:'10px'}} cellPadding='0' cellSpacing='0'>
        <tbody>
          <tr>
            <td><h2 style={{ fontFamily: 'Courier New'}}>Ne0ck&nbsp; </h2></td>
            {items.map(item => (
              <td key={item.link} style={{paddingRight:'10px', paddingLeft:'10px'}}>
                <ImageLink src={item.src} link={item.link}/>
              </td>))}
          </tr>
        </tbody>

    </table>
    );
}

export default Header;