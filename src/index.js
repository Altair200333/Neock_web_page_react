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
      <button onClick={() => {setCount(count + 1)}}>
        Btn
      </button>
    </div>
  )
}

class ExampleCss extends Component {
  constructor(props){
      super(props);
      this.wrapperRef = React.createRef();
  }
  handleClick() {
      const wrapper = this.wrapperRef.current;
      wrapper.classList.toggle('is-nav-open')
  }
  render() {
      return (
          <div ref={this.wrapperRef} className="wrapper">
              <div className="nav">
                  <icon
                      className="nav__icon"
                      type="menu-fold"
                      onClick={() => this.handleClick()}/>
                  <div className="nav__body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae ducimus est laudantium libero nam optio repellat
                      sit unde voluptatum?
                  </div>
              </div>
          </div>
      );
  }
}
function CenterAll()
{
  return (
  <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
    <ExampleCss/>
  </div>)
}

ReactDOM.render(<CenterAll/>, document.getElementById('root'));