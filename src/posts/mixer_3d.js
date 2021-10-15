import React, { useState } from 'react';
import '../App.css';
import './styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
var Carousel = require('react-responsive-carousel').Carousel;

function Mixer3D()
{
    return (
        <div style={{width:'600px'}}>
            <h1 className='title'>Mixer 3D</h1>
            <div className='postText'>
                Mixer3D is a 3D engine with raytracing written with C++ and OpenGL. It has been made as final project for C++ course at NSU.
                <p/>
                Models can be imported from .stl file (I didn't know about Assimp back in the days xD). <br/>
                Lights count, color and intensity can be adjusted from ImGui interface. <br/>
                Finally the scene can be rendered on processor (with multithreading of course) and on GPU (or as people like to call it - hardware and software rendering).
            </div>
            <p/>
            <img src = 'post_imgs/m1.jpg' className='exampleImg'></img>
            <p/>
            <div className='postText'>
                Screenshot above show that transparency and roughness of object can be adjusted to simulate glass of mirrors. 
                HDRI images in .jpg format can be used as background.
            </div>
            <p/>
            <Carousel showArrows={true} showThumbs={false}>
                <div>
                    <img src='post_imgs/art2/a3.jpg'  className='exampleImg'/>
                </div>
                <div>
                    <img src='post_imgs/art2/a4.jpg'  className='exampleImg'/>
                </div>
                <div>
                    <img src='post_imgs/art2/a1.jpg'  className='exampleImg'/>
                </div>
                <div>
                    <img src='post_imgs/art2/a2.jpg'  className='exampleImg'/>
                </div>
            </Carousel>
            <p/>
            <div style={{height:'100px'}}/>

        </div>
    )
}
export default Mixer3D;