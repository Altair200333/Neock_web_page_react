import React, { useState } from 'react';
import '../App.css';
import './styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
var Carousel = require('react-responsive-carousel').Carousel;

function OldMixer()
{
    return (
        <div style={{width:'600px'}}>
            <h1 className='title PostTitle'>Simple 3D engine</h1>
            <div className='postText'>
                Custom simple 3D engine. All internal math magic is made from scratch in a way that there are no matricies (like in normal graphic API's).
                <p/>
                Initially was written as project for C classes at university but it was such a mess that later on I rewrote it to C++ and fixed some bugs.
                <p/>
                <img src = 'post_imgs/om1.jpg' className='exampleImg'/>
                <p/>
                    <a href='https://github.com/Altair200333/mixer2.0'>source code</a>
                <p/>
                <div style={{height:'100px'}}/>
            </div>   
        </div>
        );
}
export default OldMixer;