import React, { useState } from 'react';
import './App.css';
import {
    Link
  } from "react-router-dom";
import pages from './pages'
import PostLink from './post_short';


function TagFilter(props)
{
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <button style={{padding: '4px', borderRadius: '5px', fontWeight: 'bold'}} onClick={() => {props.setFilter('');}}>
              Reset
            </button>
          </td>
          <td>
            <div style={{color:'white', backgroundColor:'#d14fff', padding: '4px', borderRadius: '5px', fontWeight: 'bold'}}>
              {props.filter == '' ?  '...' : props.filter}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
function PostsHead(props)
{
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1 style={{ fontFamily: 'Courier New' }}>Posts</h1>
          </td>
          <td style={{width:'30px'}}/>
          {
            props.filter != ''?
            <td>
            <TagFilter setFilter={props.setFilter} filter={props.filter}/>
            </td>:''
          }
        </tr>
      </tbody>
    </table>
  );
}
function PostsLinks(props)
{
  const [filter, setFilter] = useState('');
  return (
    <div>
    <PostsHead setFilter = {setFilter} filter = {filter}/>
    <br/>

    <table cellPadding="2" >
      <tbody>
          {pages.filter(page => filter == '' || page.tags.includes(filter)).map(item => (
            <tr key={item.text}>
                  <td><PostLink info={item} setFiler={setFilter}/></td>
            </tr>))}
      </tbody>
    </table>
    </div>
  );
}

function UI()
{
  return (
    <div style={{width:'600px'}}>
      <PostsLinks/>
      
    </div>
  )
}

export default UI;